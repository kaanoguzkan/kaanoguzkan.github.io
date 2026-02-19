import { useTranslation } from 'react-i18next';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

const categoryIcons = {
  code: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
  ),
  server: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
  ),
  database: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
  ),
  wrench: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
  ),
  brain: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 0 1 4 4v1a3 3 0 0 1 3 3v1a3 3 0 0 1-1 5.5V18a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3h-1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-1.5A3 3 0 0 1 2 11v-1a3 3 0 0 1 3-3V6a4 4 0 0 1 4-4z"/></svg>
  ),
};

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
            <div className="glass-card skill-category" key={i}>
              <div className="skill-category-header">
                <span className="skill-icon">{categoryIcons[cat.icon] || categoryIcons.code}</span>
                <h3>{cat.name}</h3>
              </div>
              <div className="tech-tags">
                {cat.items.map((item) => (
                  <span className="skill-badge" key={item}>{item}</span>
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
