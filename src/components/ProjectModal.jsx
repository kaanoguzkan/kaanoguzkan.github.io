import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useProjectModal } from '../context/ProjectModalContext';

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

function ProjectModal() {
  const { t } = useTranslation();
  const { activeProject, closeProject } = useProjectModal();
  const modalRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    if (!activeProject) return;

    previousFocusRef.current = document.activeElement;
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      const closeBtn = modalRef.current?.querySelector('.project-modal-close');
      closeBtn?.focus();
    }, 50);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeProject();
        return;
      }
      if (e.key === 'Tab') {
        const focusable = modalRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
      previousFocusRef.current?.focus();
    };
  }, [activeProject, closeProject]);

  if (!activeProject) return null;

  const project = activeProject;
  const hasScreenshots = project.screenshots && project.screenshots.length > 0 && project.screenshots[0];

  return (
    <div className="project-modal-overlay" onClick={closeProject}>
      <div
        className="project-modal"
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="project-modal-header">
          <div>
            <h3 id="project-modal-title">{project.name}</h3>
            <p className="project-modal-label">{project.label}</p>
          </div>
          <button className="project-modal-close" onClick={closeProject} aria-label="Close">
            &times;
          </button>
        </div>

        <div className="project-modal-body">
          {hasScreenshots && (
            <div className="project-modal-screenshots">
              {project.screenshots.filter(Boolean).map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${project.name} screenshot ${i + 1}`}
                  className="project-modal-screenshot"
                  loading="lazy"
                />
              ))}
            </div>
          )}

          <div className="project-modal-description">
            <p>{project.detailedDescription || project.description}</p>
          </div>

          {project.highlights && project.highlights.length > 0 && (
            <div className="project-modal-highlights">
              <h4>{t('projects.highlightsTitle')}</h4>
              <ul>
                {project.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="tech-tags">
            {project.tags.map((tag) => (
              <span className="tag" key={tag}>{tag}</span>
            ))}
          </div>

          <div className="project-modal-links">
            {project.github ? (
              <a
                href={project.github}
                className="btn btn-outline"
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
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLinkIcon />
                {t('projects.demoText')}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
