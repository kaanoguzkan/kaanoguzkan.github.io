const CACHE_KEY = 'orcid_works_cache';
const CACHE_TTL = 60 * 60 * 1000;

const TYPE_LABELS = {
  'journal-article': 'Journal article',
  'conference-paper': 'Conference paper',
  'book-chapter': 'Book chapter',
  'preprint': 'Preprint',
  'working-paper': 'Working paper',
  'report': 'Report',
  'other': 'Other',
};

function findDoi(externalIds) {
  if (!externalIds || !externalIds['external-id']) return null;
  const doi = externalIds['external-id'].find(
    (e) => e['external-id-type'] === 'doi'
  );
  return doi ? doi['external-id-value'] : null;
}

function normalizeWork(summary) {
  const doi = findDoi(summary['external-ids']);
  const url = summary.url?.value || (doi ? `https://doi.org/${doi}` : null);
  const typeKey = (summary.type || 'other').toLowerCase();

  return {
    putCode: summary['put-code'],
    title: summary.title?.title?.value || 'Untitled',
    year: summary['publication-date']?.year?.value || null,
    journal: summary['journal-title']?.value || null,
    type: TYPE_LABELS[typeKey] || summary.type || 'Other',
    url,
    doi,
  };
}

export async function fetchOrcidWorks(orcidId) {
  if (!orcidId) return [];

  const cached = sessionStorage.getItem(CACHE_KEY);
  if (cached) {
    try {
      const { data, timestamp, id } = JSON.parse(cached);
      if (id === orcidId && Date.now() - timestamp < CACHE_TTL) {
        return data;
      }
    } catch {
      // ignore corrupt cache
    }
  }

  const res = await fetch(`https://pub.orcid.org/v3.0/${orcidId}/works`, {
    headers: { Accept: 'application/json' },
  });
  if (!res.ok) throw new Error(`ORCID request failed: ${res.status}`);

  const data = await res.json();
  const groups = Array.isArray(data.group) ? data.group : [];

  const works = groups
    .map((g) => g['work-summary']?.[0])
    .filter(Boolean)
    .map(normalizeWork)
    .sort((a, b) => (Number(b.year) || 0) - (Number(a.year) || 0));

  sessionStorage.setItem(
    CACHE_KEY,
    JSON.stringify({ data: works, timestamp: Date.now(), id: orcidId })
  );

  return works;
}
