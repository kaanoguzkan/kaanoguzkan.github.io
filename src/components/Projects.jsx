import { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';
import { useProjectModal } from '../context/ProjectModalContext';

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.4 }}>
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

function Projects() {
  const { t, i18n } = useTranslation();
  const ref = useScrollFadeIn();
  const { openProject } = useProjectModal();
  const allItems = t('projects.items', { returnObjects: true });
  const items = useMemo(
    () => allItems.filter(p => p.online !== false),
    [allItems]
  );
  const [activeTag, setActiveTag] = useState(null);

  useEffect(() => {
    setActiveTag(null);
  }, [i18n.language]);

  const allTags = useMemo(() => {
    const tagSet = new Set();
    items.forEach(p => p.tags.forEach(tag => tagSet.add(tag)));
    return Array.from(tagSet).sort();
  }, [items]);

  const filteredItems = useMemo(() => {
    if (!activeTag) return items;
    return items.filter(p => p.tags.includes(activeTag));
  }, [items, activeTag]);

  const handleTagClick = (tag) => {
    setActiveTag(prev => prev === tag ? null : tag);
  };

  return (
    <section id="projects" className="fade-in" ref={ref}>
      <div className="container">
        <h2 className="section-title">{t('projects.title')}</h2>

        <div className="project-filter-bar" role="group" aria-label="Filter projects by technology">
          <button
            className={`filter-tag${!activeTag ? ' filter-tag--active' : ''}`}
            onClick={() => setActiveTag(null)}
          >
            {t('projects.filterAll')}
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              className={`filter-tag${activeTag === tag ? ' filter-tag--active' : ''}`}
              onClick={() => handleTagClick(tag)}
              aria-pressed={activeTag === tag}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredItems.map((project) => (
            <article className="glass-card project-card" key={project.name}>
              <div className="project-accent"></div>
              <div className="project-image-placeholder">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="project-image"
                    loading="lazy"
                  />
                ) : (
                  <CodeIcon />
                )}
              </div>
              <div className="project-body">
                <h3>{project.name}</h3>
                <p className="project-label">{project.label}</p>
                <p>{project.description}</p>
                <div className="tech-tags">
                  {project.tags.map((tag) => (
                    <button
                      className={`tag tag--interactive${activeTag === tag ? ' tag--active' : ''}`}
                      key={tag}
                      onClick={() => handleTagClick(tag)}
                      aria-pressed={activeTag === tag}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
                <div className="project-links">
                  {project.github ? (
                    <a
                      href={project.github}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon />
                      {project.linkText}
                    </a>
                  ) : (
                    <span className="project-link-note">{project.linkText}</span>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="project-link project-link--demo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLinkIcon />
                      {t('projects.demoText')}
                    </a>
                  )}
                  <button
                    className="project-link project-details-btn"
                    onClick={() => openProject(project)}
                  >
                    {t('projects.viewDetails')}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <p className="projects-empty">{t('projects.noResults')}</p>
        )}
      </div>
    </section>
  );
}

export default Projects;
