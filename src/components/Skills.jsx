import { useTranslation } from 'react-i18next';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

function Skills() {
  const { t } = useTranslation();
  const ref = useScrollFadeIn();
  const categories = t('skills.categories', { returnObjects: true });

  return (
    <section id="skills" className="block reveal" ref={ref}>
      <div className="shell">
        <div className="block-head">
          <div className="block-num">
            <span className="n">05</span> &nbsp;/ {t('nav.skills')}
          </div>
          <h2 className="block-title">{t('skills.title')}</h2>
        </div>

        <div className="skills-grid">
          {categories.map((cat, i) => (
            <div key={cat.name} className="skill-cat">
              <div className="skill-cat-name">
                {String(i + 1).padStart(2, '0')} — {cat.name}
              </div>
              <div className="skill-cat-list">
                {cat.items.map((item) => (
                  <span key={item} className="chip">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
