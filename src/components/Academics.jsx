import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';
import { fetchOrcidWorks } from '../utils/academicUtils';

const OrcidIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width="32"
    height="32"
    aria-hidden="true"
  >
    <path
      fill="#A6CE39"
      d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0z"
    />
    <path
      fill="#fff"
      d="M86.3 186.2H70.9V79.1h15.4v107.1zM108.9 79.1h41.6c39.6 0 57 28.3 57 53.6 0 27.5-21.5 53.6-56.8 53.6h-41.8V79.1zm15.4 93.3h24.5c34.9 0 42.9-26.5 42.9-39.7 0-21.5-13.7-39.7-43.7-39.7h-23.7v79.4zM88.7 56.8c0 5.5-4.5 10.1-10.1 10.1s-10.1-4.6-10.1-10.1c0-5.6 4.5-10.1 10.1-10.1s10.1 4.6 10.1 10.1z"
    />
  </svg>
);

const ScholarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="32"
    height="32"
    aria-hidden="true"
  >
    <path fill="#4285F4" d="M5.242 13.769L0.5 9.5 12 1l11.5 8.5-4.742 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.749-6.758 4.269z" />
    <path fill="#34A853" d="M12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
  </svg>
);

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

function Academics() {
  const { t } = useTranslation();
  const ref = useScrollFadeIn();

  const orcidId = t('academics.profiles.orcid.id');
  const orcidLabel = t('academics.profiles.orcid.label');
  const scholarUrl = t('academics.profiles.scholar.url');
  const scholarName = t('academics.profiles.scholar.name');
  const scholarMetrics = t('academics.profiles.scholar.metrics');

  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetchOrcidWorks(orcidId)
      .then((data) => {
        if (!cancelled) {
          setWorks(data);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setError(true);
          setLoading(false);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [orcidId]);

  return (
    <section id="academics" className="fade-in" ref={ref}>
      <div className="container">
        <h2 className="section-title">{t('academics.title')}</h2>
        <p className="academics-subtitle muted">{t('academics.subtitle')}</p>

        <div className="academics-grid">
          <a
            href={`https://orcid.org/${orcidId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="academic-card glass-card"
            aria-label="ORCID profile"
          >
            <div className="academic-card-icon"><OrcidIcon /></div>
            <div className="academic-card-body">
              <h3 className="academic-card-title">ORCID</h3>
              <p className="academic-card-handle">{orcidId}</p>
              <p className="academic-card-meta">{orcidLabel}</p>
            </div>
            <span className="academic-card-link" aria-hidden="true"><ExternalIcon /></span>
          </a>

          <a
            href={scholarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="academic-card glass-card"
            aria-label="Google Scholar profile"
          >
            <div className="academic-card-icon"><ScholarIcon /></div>
            <div className="academic-card-body">
              <h3 className="academic-card-title">Google Scholar</h3>
              <p className="academic-card-handle">{scholarName}</p>
              {scholarMetrics && (
                <p className="academic-card-meta">{scholarMetrics}</p>
              )}
            </div>
            <span className="academic-card-link" aria-hidden="true"><ExternalIcon /></span>
          </a>
        </div>

        <div className="publications">
          <h3 className="publications-title">{t('academics.publicationsTitle')}</h3>

          {loading && <p className="muted">{t('academics.publicationsLoading')}</p>}

          {!loading && error && (
            <p className="muted">{t('academics.publicationsError')}</p>
          )}

          {!loading && !error && works.length === 0 && (
            <p className="muted">{t('academics.publicationsEmpty')}</p>
          )}

          {!loading && !error && works.length > 0 && (
            <ol className="publications-list">
              {works.map((w) => (
                <li key={w.putCode} className="publication-item glass-card">
                  <div className="publication-meta">
                    <span className="publication-type">{w.type}</span>
                    {w.year && <span className="publication-year">{w.year}</span>}
                  </div>
                  <h4 className="publication-title">
                    {w.url ? (
                      <a href={w.url} target="_blank" rel="noopener noreferrer">
                        {w.title}
                      </a>
                    ) : (
                      w.title
                    )}
                  </h4>
                  {w.journal && (
                    <p className="publication-journal">{w.journal}</p>
                  )}
                  {w.doi && (
                    <p className="publication-doi">
                      DOI:{' '}
                      <a
                        href={`https://doi.org/${w.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {w.doi}
                      </a>
                    </p>
                  )}
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </section>
  );
}

export default Academics;
