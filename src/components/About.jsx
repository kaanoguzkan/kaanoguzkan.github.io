import { useTranslation, Trans } from 'react-i18next';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

function About() {
  const { t } = useTranslation();
  const ref = useScrollFadeIn();
  const educationItems = t('about.educationItems', { returnObjects: true });

  return (
    <section id="about" className="fade-in" ref={ref}>
      <div className="container">
        <h2 className="section-title">{t('about.title')}</h2>
        <div className="about-content">
          <div className="about-photo">
            <img src="/assets/profile.jpg" alt="S. Kaan Oguzkan" />
          </div>
          <div className="about-text">
            <p><Trans i18nKey="about.paragraph1" components={{ strong: <strong /> }} /></p>
            <p><Trans i18nKey="about.paragraph2" components={{ strong: <strong /> }} /></p>
            <div className="about-education">
              {Array.isArray(educationItems) && educationItems.map((edu, i) => (
                <div className="glass-card education-card" key={i}>
                  <div className="education-header">
                    <h4>{edu.school}</h4>
                    <span className="date-badge">{edu.period}</span>
                  </div>
                  <p className="education-degree">{edu.degree}</p>
                  {edu.detail && <p className="education-detail">{edu.detail}</p>}
                </div>
              ))}
            </div>
            <div className="about-info">
              <div className="info-item">
                <span className="info-label">{t('about.labels.location')}</span>
                <span>{t('about.location')}</span>
              </div>
              <div className="info-item">
                <span className="info-label">{t('about.labels.languages')}</span>
                <span>{t('about.languages')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
