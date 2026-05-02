import { useTranslation } from 'react-i18next';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

function Academics() {
  const { t } = useTranslation();
  const ref = useScrollFadeIn();

  const orcidId = t('academics.profiles.orcid.id');
  const orcidLabel = t('academics.profiles.orcid.label');
  const scholarUrl = t('academics.profiles.scholar.url');
  const scholarName = t('academics.profiles.scholar.name');

  return (
    <section id="academics" className="block reveal" ref={ref}>
      <div className="shell">
        <div className="block-head">
          <div className="block-num">
            <span className="n">06</span> &nbsp;/ {t('nav.research')}
          </div>
          <h2 className="block-title">{t('academics.title')}</h2>
        </div>

        <div className="ac-grid">
          <a
            className="ac-card"
            href={`https://orcid.org/${orcidId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="ac-label">Researcher ID</div>
            <div className="ac-name">ORCID</div>
            <div className="ac-id">{orcidId}</div>
            <div className="ac-note">{orcidLabel}</div>
            <div className="ac-go">Open ORCID profile →</div>
          </a>

          <a
            className="ac-card"
            href={scholarUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="ac-label">Citation Index</div>
            <div className="ac-name">Google Scholar</div>
            <div className="ac-id">{scholarName}</div>
            <div className="ac-go">Open Scholar profile →</div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Academics;
