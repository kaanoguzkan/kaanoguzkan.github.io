import { useTranslation } from 'react-i18next';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

function Experience() {
  const { t } = useTranslation();
  const ref = useScrollFadeIn();
  const jobs = t('experience.jobs', { returnObjects: true });

  return (
    <section id="experience" className="fade-in" ref={ref}>
      <div className="container">
        <h2 className="section-title">{t('experience.title')}</h2>
        {jobs.map((job, i) => (
          <div className="experience-card" key={i}>
            <div className="experience-header">
              <div>
                <h3>{job.role}</h3>
                <p className="company">{job.company}</p>
              </div>
              <span className="date-badge">{job.date}</span>
            </div>
            <ul className="experience-list">
              {job.bullets.map((bullet, j) => (
                <li key={j} dangerouslySetInnerHTML={{ __html: bullet }} />
              ))}
            </ul>
            <div className="tech-tags">
              {job.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
