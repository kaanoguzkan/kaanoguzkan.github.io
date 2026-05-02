import { useTranslation, Trans } from 'react-i18next';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

function About() {
  const { t } = useTranslation();
  const ref = useScrollFadeIn();
  const educationItems = t('about.educationItems', { returnObjects: true });

  return (
    <section id="about" className="block reveal" ref={ref}>
      <div className="shell">
        <div className="block-head">
          <div className="block-num">
            <span className="n">02</span> &nbsp;/ {t('nav.about')}
          </div>
          <h2 className="block-title">{t('about.title')}</h2>
        </div>

        <div className="about-grid">
          <aside className="about-side">
            <div className="meta-row">
              <span className="k">{t('about.sidebar.basedLabel')}</span>
              <span className="v">{t('about.location')}</span>
            </div>
            <div className="meta-row">
              <span className="k">{t('about.sidebar.languagesLabel')}</span>
              <span className="v">{t('about.languages')}</span>
            </div>
            <div className="meta-row">
              <span className="k">{t('about.sidebar.statusLabel')}</span>
              <span className="v">{t('about.sidebar.statusValue')}</span>
            </div>
            <div className="meta-row">
              <span className="k">{t('about.sidebar.focusLabel')}</span>
              <span className="v">{t('about.sidebar.focusValue')}</span>
            </div>
          </aside>

          <div className="about-body">
            <p>
              <Trans i18nKey="about.paragraph1" components={{ strong: <strong /> }} />
            </p>
            <p>
              <Trans i18nKey="about.paragraph2" components={{ strong: <strong /> }} />
            </p>

            <div className="edu-list">
              {Array.isArray(educationItems) && educationItems.map((edu, i) => (
                <div key={i} className="edu-row">
                  <div>
                    <div className="edu-school">{edu.school}</div>
                    <div className="edu-deg">{edu.degree}</div>
                  </div>
                  <div className="edu-right">
                    <div className="edu-period">{edu.period}</div>
                    {edu.detail && <div className="edu-detail">{edu.detail}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
