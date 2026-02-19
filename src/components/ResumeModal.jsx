import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useResume } from '../context/ResumeContext';

function ResumeModal() {
  const { t } = useTranslation();
  const { isOpen, close } = useResume();

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === 'Escape') close();
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  return (
    <div className="resume-overlay" onClick={close}>
      <div className="resume-modal" onClick={(e) => e.stopPropagation()}>
        <div className="resume-modal-header">
          <h3>{t('resume.title')}</h3>
          <button className="resume-close" onClick={close} aria-label="Close">
            &times;
          </button>
        </div>
        <iframe src="/assets/resume.pdf" title="Resume" className="resume-iframe" />
        <div className="resume-modal-footer">
          <a href="/assets/resume.pdf" download className="btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            {t('resume.download')}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ResumeModal;
