import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useResume } from '../context/ResumeContext';

function ResumeModal() {
  const { t, i18n } = useTranslation();
  const pdfUrl = `/assets/resume-${i18n.language}.pdf`;
  const { isOpen, close } = useResume();
  const modalRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    previousFocusRef.current = document.activeElement;
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      const closeBtn = modalRef.current?.querySelector('.resume-close');
      closeBtn?.focus();
    }, 50);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        close();
        return;
      }
      if (e.key === 'Tab') {
        const focusable = modalRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, iframe, [tabindex]:not([tabindex="-1"])'
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
  }, [isOpen, close]);

  if (!isOpen) return null;

  return (
    <div className="resume-overlay" onClick={close}>
      <div
        className="resume-modal"
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="resume-modal-header">
          <h3 id="resume-modal-title">{t('resume.title')}</h3>
          <div className="resume-close-group">
            <span className="modal-esc-hint">{t('modal.escHint')}</span>
            <button className="resume-close" onClick={close} aria-label="Close">
              &times;
            </button>
          </div>
        </div>
        <iframe src={pdfUrl} title="Resume" className="resume-iframe" sandbox="allow-same-origin" />
        <div className="resume-modal-footer">
          <a href={pdfUrl} download className="btn">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            {t('resume.download')}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ResumeModal;
