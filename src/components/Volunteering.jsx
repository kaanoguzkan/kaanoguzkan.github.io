import { useTranslation } from 'react-i18next';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

function Volunteering() {
  const { t } = useTranslation();
  const ref = useScrollFadeIn();
  const items = t('volunteering.items', { returnObjects: true });

  return (
    <section id="volunteering" className="fade-in" ref={ref}>
      <div className="container">
        <h2 className="section-title">{t('volunteering.title')}</h2>
        <div className="timeline">
          {items.map((item, i) => (
            <div className="timeline-entry" key={i}>
              <div className="timeline-dot" />
              <div className="volunteering-entry glass-card">
                <div className="volunteering-header">
                  <div>
                    <h3>{item.role}</h3>
                    <p className="volunteering-org">{item.organization}</p>
                  </div>
                  <span className="date-badge">{item.date}</span>
                </div>
                {item.description && <p className="volunteering-desc">{item.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Volunteering;
