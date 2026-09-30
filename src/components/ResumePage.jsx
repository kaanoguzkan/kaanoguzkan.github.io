import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import LanguageSwitcher from './LanguageSwitcher';

const CONTACT = [
  { label: 'kaan.oguzkan@ug.bilkent.edu.tr', href: 'mailto:kaan.oguzkan@ug.bilkent.edu.tr' },
  { label: 'kaanoguzkan.com', href: 'https://kaanoguzkan.com' },
  { label: 'linkedin.com/in/kaan-oguzkan', href: 'https://linkedin.com/in/kaan-oguzkan' },
  { label: 'github.com/kaanoguzkan', href: 'https://github.com/kaanoguzkan' },
  { label: 'ORCID 0009-0000-3272-7333', href: 'https://orcid.org/0009-0000-3272-7333' },
];

function ResumePage() {
  const { t, i18n } = useTranslation();
  const education = t('about.educationItems', { returnObjects: true });
  const jobs = t('experience.jobs', { returnObjects: true });
  const projects = t('projects.items', { returnObjects: true }).filter((p) => p.online !== false);
  const skills = t('skills.categories', { returnObjects: true });
  const community = t('volunteering.items', { returnObjects: true });

  useDocumentMeta({
    title: `${t('resumePage.title')} | S. Kaan Oguzkan`,
    description: t('resumePage.subtitle'),
    path: '/resume/',
  });

  return (
    <main id="main-content" className="shell rp">
      <header className="rp-head">
        <div>
          <div className="mono rp-eyebrow">{t('resumePage.title')}</div>
          <h1 className="rp-name">{t('hero.name')}</h1>
          <p className="rp-sub">{t('resumePage.subtitle')}</p>
        </div>
        <div className="rp-actions no-print">
          <LanguageSwitcher />
          <a className="btn" href={`/assets/resume-${i18n.language}.pdf`} download>
            {t('resumePage.download')}
          </a>
          <button type="button" className="btn btn-outline" onClick={() => window.print()}>
            {t('resumePage.print')}
          </button>
        </div>
      </header>

      <ul className="rp-contact" aria-label={t('resumePage.contact')}>
        {CONTACT.map((c) => (
          <li key={c.href}>
            <a className="link-u" href={c.href}>{c.label}</a>
          </li>
        ))}
      </ul>

      <section className="rp-section" aria-labelledby="rp-edu">
        <h2 id="rp-edu" className="rp-h mono">{t('resumePage.education')}</h2>
        {Array.isArray(education) && education.map((edu) => (
          <div key={edu.school} className="rp-row">
            <div>
              <div className="rp-strong">{edu.school}</div>
              <div className="rp-muted">{edu.degree}</div>
              {edu.detail && <div className="rp-muted">{edu.detail}</div>}
            </div>
            <div className="rp-when">{edu.period}</div>
          </div>
        ))}
      </section>

      <section className="rp-section" aria-labelledby="rp-exp">
        <h2 id="rp-exp" className="rp-h mono">{t('resumePage.experience')}</h2>
        {Array.isArray(jobs) && jobs.map((job) => (
          <article key={job.company + job.date} className="rp-job">
            <div className="rp-row">
              <div>
                <div className="rp-strong">{job.company}</div>
                <div className="rp-muted">{job.role}</div>
                {job.summary && <div className="rp-muted">{job.summary}</div>}
              </div>
              <div className="rp-when">{job.date}</div>
            </div>
            <ul className="rp-bullets">
              {job.bullets.map((b) => (
                <li key={b.head}>
                  <strong>{b.head}.</strong> {b.desc}
                  {b.metrics && b.metrics.length > 0 && (
                    <span className="rp-metrics"> {b.metrics.join(' · ')}</span>
                  )}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="rp-section" aria-labelledby="rp-proj">
        <h2 id="rp-proj" className="rp-h mono">{t('resumePage.projects')}</h2>
        {projects.map((p) => (
          <article key={p.name} className="rp-job">
            <div className="rp-row">
              <div>
                <div className="rp-strong">
                  {p.slug ? <Link className="link-u" to={`/projects/${p.slug}`}>{p.name}</Link> : p.name}
                </div>
                <div className="rp-muted">{p.label}</div>
              </div>
              <div className="rp-when">{p.year}</div>
            </div>
            <p className="rp-text">{p.description}</p>
            <div className="rp-muted">{p.tags.join(' · ')}</div>
          </article>
        ))}
      </section>

      <section className="rp-section" aria-labelledby="rp-skills">
        <h2 id="rp-skills" className="rp-h mono">{t('resumePage.skills')}</h2>
        <dl className="rp-skills">
          {Array.isArray(skills) && skills.map((c) => (
            <div key={c.name} className="rp-skill">
              <dt>{c.name}</dt>
              <dd>{c.items.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="rp-section" aria-labelledby="rp-comm">
        <h2 id="rp-comm" className="rp-h mono">{t('resumePage.community')}</h2>
        {Array.isArray(community) && community.map((c) => (
          <div key={c.organization + c.role} className="rp-row">
            <div>
              <div className="rp-strong">{c.role}, {c.organization}</div>
              <div className="rp-muted">{c.description}</div>
            </div>
            <div className="rp-when">{c.date}</div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default ResumePage;
