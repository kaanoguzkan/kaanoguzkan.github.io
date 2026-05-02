import { useTranslation } from 'react-i18next';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

function Volunteering() {
  const { t } = useTranslation();
  const ref = useScrollFadeIn();
  const items = t('volunteering.items', { returnObjects: true });

  return (
    <section id="volunteering" className="block reveal" ref={ref}>
      <div className="shell">
        <div className="block-head">
          <div className="block-num">
            <span className="n">07</span> &nbsp;/ {t('nav.community')}
          </div>
          <h2 className="block-title">{t('volunteering.title')}</h2>
        </div>

        <div className="vol-list">
          {items.map((item, i) => (
            <div key={i} className="vol">
              <div className="vol-when">{item.date}</div>
              <div>
                <div className="vol-role">{item.role}</div>
                <div className="vol-org">{item.organization}</div>
              </div>
              <div className="vol-desc">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Volunteering;
