import { useTranslation } from 'react-i18next';

// Bump this whenever the "now" items in the i18n files change.
const NOW_UPDATED = '2026-10-01';

function Now() {
  const { t, i18n } = useTranslation();
  const items = t('now.items', { returnObjects: true });
  const updated = new Date(NOW_UPDATED).toLocaleDateString(i18n.language || 'en', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });

  return (
    <section className="now" aria-labelledby="now-label">
      <div className="shell">
        <div className="now-head">
          <span className="now-dot" aria-hidden="true" />
          <h2 id="now-label" className="mono now-label">{t('now.label')}</h2>
          <span className="mono now-date">{t('now.updated')} · {updated}</span>
        </div>
        <dl className="now-grid">
          {Array.isArray(items) && items.map((item) => (
            <div key={item.k} className="now-item">
              <dt className="mono">{item.k}</dt>
              <dd>{item.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default Now;
