import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

function CaseStudy() {
  const { slug } = useParams();
  const { t } = useTranslation();

  const items = t('projects.items', { returnObjects: true });
  const project = items.find((p) => p.slug === slug && p.online !== false);
  const study = project ? t(`caseStudies.${slug}`, { returnObjects: true }) : null;
  const others = items.filter((p) => p.slug && p.slug !== slug && p.online !== false);

  useDocumentMeta({
    title: project ? `${project.name} — ${t('caseStudy.eyebrow')} | S. Kaan Oguzkan` : undefined,
    description: project?.description,
    path: `/projects/${slug}/`,
  });

  if (!project || !study || typeof study !== 'object') {
    return (
      <main id="main-content" className="shell cs-page">
        <p className="cs-notfound">{t('caseStudy.notFound')}</p>
        <Link to="/#projects" className="link-u">{t('caseStudy.notFoundLink')}</Link>
      </main>
    );
  }

  return (
    <main id="main-content" className="shell cs-page">
      <Link to="/#projects" className="cs-back mono">← {t('caseStudy.back')}</Link>

      <header className="cs-head">
        <div className="mono cs-eyebrow">{t('caseStudy.eyebrow')}</div>
        <h1 className="cs-title">{project.name}<span className="hero-period">.</span></h1>
        <p className="cs-label">{project.label}</p>
      </header>

      <div className="about-grid cs-grid">
        <aside className="about-side">
          <div className="meta-row">
            <span className="k">{t('caseStudy.role')}</span>
            <span className="v">{study.role}</span>
          </div>
          <div className="meta-row">
            <span className="k">{t('caseStudy.year')}</span>
            <span className="v">{project.year}</span>
          </div>
          <div className="meta-row">
            <span className="k">{t('caseStudy.stack')}</span>
            <span className="v cs-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="mono-tag">{tag}</span>
              ))}
            </span>
          </div>
          <div className="meta-row">
            <span className="k">{t('caseStudy.links')}</span>
            <span className="v cs-links">
              {project.demo && (
                <a className="link-u" href={project.demo} target="_blank" rel="noopener noreferrer">
                  {t('projects.demoText')} ↗
                </a>
              )}
              {project.github && (
                <a className="link-u" href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub ↗
                </a>
              )}
              {!project.demo && !project.github && <span>{project.linkText}</span>}
            </span>
          </div>
        </aside>

        <div className="cs-body">
          <section aria-labelledby="cs-context">
            <h2 id="cs-context" className="cs-h mono">{t('caseStudy.context')}</h2>
            <p className="cs-lead">{study.context}</p>
          </section>

          <section aria-labelledby="cs-approach">
            <h2 id="cs-approach" className="cs-h mono">{t('caseStudy.approach')}</h2>
            <ol className="cs-steps">
              {study.approach.map((step, i) => (
                <li key={step.head} className="cs-step">
                  <span className="cs-step-idx" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="cs-step-head">{step.head}</h3>
                    <p className="cs-step-body">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="cs-outcome">
            <h2 id="cs-outcome" className="cs-h mono">{t('caseStudy.outcome')}</h2>
            <div className="metric-row">
              {study.outcome.map((item) => (
                <span key={item} className="metric">{item}</span>
              ))}
            </div>
          </section>
        </div>
      </div>

      {others.length > 0 && (
        <nav className="cs-more" aria-label={t('caseStudy.more')}>
          <div className="mono">{t('caseStudy.more')}</div>
          {others.map((p) => (
            <Link key={p.slug} to={`/projects/${p.slug}`} className="cs-more-link">
              <span>{p.name}</span>
              <span className="cs-more-label">{p.label}</span>
              <span aria-hidden="true">→</span>
            </Link>
          ))}
        </nav>
      )}
    </main>
  );
}

export default CaseStudy;
