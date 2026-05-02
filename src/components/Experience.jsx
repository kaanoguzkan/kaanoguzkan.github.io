import { useTranslation } from 'react-i18next';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

function Experience() {
  const { t } = useTranslation();
  const ref = useScrollFadeIn();
  const jobs = t('experience.jobs', { returnObjects: true });

  return (
    <section id="experience" className="block reveal" ref={ref}>
      <div className="shell">
        <div className="block-head">
          <div className="block-num">
            <span className="n">03</span> &nbsp;/ {t('nav.work')}
          </div>
          <h2 className="block-title">{t('experience.title')}</h2>
        </div>

        {jobs.map((job, i) => (
          <div key={i} className="exp">
            <div className="exp-side">
              <div className="exp-when">{job.date}</div>
              <div className="exp-org">{job.company}</div>
              <div className="exp-role">{job.role}</div>
              <div className="exp-tags">
                {job.tags.map((tag) => (
                  <span key={tag} className="mono-tag">{tag}</span>
                ))}
              </div>
            </div>

            <div className="exp-list">
              {job.bullets.map((bullet, j) => (
                <div key={j} className="exp-item">
                  <div className="exp-idx">{String(j + 1).padStart(2, '0')}</div>
                  <div className="exp-body">
                    <div className="exp-head">{bullet.head}</div>
                    <div className="exp-desc">{bullet.desc}</div>
                    {bullet.metrics && bullet.metrics.length > 0 && (
                      <div className="metric-row">
                        {bullet.metrics.map((m, k) => (
                          <span key={k} className="metric">{m}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
