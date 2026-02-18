import { useTranslation } from 'react-i18next';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

function Skills() {
  const { t } = useTranslation();
  const ref = useScrollFadeIn();
  const categories = t('skills.categories', { returnObjects: true });

  return (
    <section id="skills" className="fade-in" ref={ref}>
      <div className="container">
        <h2 className="section-title">{t('skills.title')}</h2>
        <div className="skills-grid">
          {categories.map((cat, i) => (
            <div className="skill-category" key={i}>
              <h3>{cat.name}</h3>
              <div className="tech-tags">
                {cat.items.map((item) => (
                  <span className="tag" key={item}>{item}</span>
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
