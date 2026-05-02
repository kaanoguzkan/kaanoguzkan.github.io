import { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';
import { useProjectModal } from '../context/ProjectModalContext';

function Projects() {
  const { t, i18n } = useTranslation();
  const ref = useScrollFadeIn();
  const { openProject } = useProjectModal();

  const allItems = t('projects.items', { returnObjects: true });
  const items = useMemo(
    () => allItems.filter((p) => p.online !== false),
    [allItems]
  );

  const [activeTag, setActiveTag] = useState(null);

  useEffect(() => {
    setActiveTag(null);
  }, [i18n.language]);

  const allTags = useMemo(() => {
    const tagSet = new Set();
    items.forEach((p) => p.tags.forEach((tag) => tagSet.add(tag)));
    return Array.from(tagSet).sort();
  }, [items]);

  const filteredItems = useMemo(() => {
    if (!activeTag) return items;
    return items.filter((p) => p.tags.includes(activeTag));
  }, [items, activeTag]);

  const handleTagClick = (tag) => {
    setActiveTag((prev) => (prev === tag ? null : tag));
  };

  return (
    <section id="projects" className="block reveal" ref={ref}>
      <div className="shell">
        <div className="block-head">
          <div className="block-num">
            <span className="n">04</span> &nbsp;/ {t('nav.projects')}
          </div>
          <h2 className="block-title">{t('projects.title')}</h2>
        </div>

        {allTags.length > 0 && (
          <div className="proj-filters" role="group" aria-label="Filter projects by technology">
            <button
              type="button"
              className={`proj-filter${!activeTag ? ' is-active' : ''}`}
              onClick={() => setActiveTag(null)}
            >
              {t('projects.filterAll')}
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                type="button"
                className={`proj-filter${activeTag === tag ? ' is-active' : ''}`}
                onClick={() => handleTagClick(tag)}
                aria-pressed={activeTag === tag}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        <div className="proj-list">
          {filteredItems.map((project, i) => (
            <button
              key={project.name}
              type="button"
              className="proj"
              onClick={() => openProject(project)}
              aria-label={`Open details for ${project.name}`}
            >
              <div className="proj-meta">
                <span className="proj-num">
                  P / {String(i + 1).padStart(2, '0')}
                  {project.year ? ` · ${project.year}` : ''}
                </span>
              </div>

              <div className="proj-content">
                <div className="proj-name">{project.name}</div>
                <div className="proj-label">{project.label}</div>
                <div className="proj-desc">{project.description}</div>
                <div className="proj-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="mono-tag">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="proj-side">
                <span className="proj-arrow" aria-hidden="true">↗</span>
                <span className="mono">{t('projects.viewDetails')}</span>
              </div>
            </button>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <p className="proj-empty">{t('projects.noResults')}</p>
        )}
      </div>
    </section>
  );
}

export default Projects;
