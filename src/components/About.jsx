import { useTranslation } from 'react-i18next';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

function About() {
  const { t } = useTranslation();
  const ref = useScrollFadeIn();

  return (
    <section id="about" className="fade-in" ref={ref}>
      <div className="container">
        <h2 className="section-title">{t('about.title')}</h2>
        <div className="about-content">
          <div className="about-photo">
            <img src="/assets/profile.jpg" alt="S. Kaan Oguzkan" />
          </div>
          <div className="about-text">
            <p dangerouslySetInnerHTML={{ __html: t('about.paragraph1') }} />
            <p dangerouslySetInnerHTML={{ __html: t('about.paragraph2') }} />
            <div className="about-info">
              <div className="info-item">
                <span className="info-label">{t('about.labels.education')}</span>
                <span>{t('about.education')}</span>
              </div>
              <div className="info-item">
                <span className="info-label">{t('about.labels.period')}</span>
                <span>{t('about.period')}</span>
              </div>
              <div className="info-item">
                <span className="info-label">{t('about.labels.location')}</span>
                <span>{t('about.location')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
