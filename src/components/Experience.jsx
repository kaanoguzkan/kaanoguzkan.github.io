import { useTranslation, Trans } from 'react-i18next';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

function Experience() {
  const { t } = useTranslation();
  const ref = useScrollFadeIn();
  const jobs = t('experience.jobs', { returnObjects: true });

  return (
    <section id="experience" className="fade-in" ref={ref}>
      <div className="container">
        <h2 className="section-title">{t('experience.title')}</h2>
        <div className="timeline">
          {jobs.map((job, i) => (
            <div className="timeline-entry" key={i}>
              <div className="timeline-dot"></div>
              <div className="glass-card timeline-card">
                <div className="experience-header">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="company">{job.company}</p>
                  </div>
                  <span className="date-badge">{job.date}</span>
                </div>
                <ul className="experience-list">
                  {job.bullets.map((_, j) => (
                    <li key={j}><Trans i18nKey={`experience.jobs.${i}.bullets.${j}`} components={{ strong: <strong /> }} /></li>
                  ))}
                </ul>
                <div className="tech-tags">
                  {job.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
