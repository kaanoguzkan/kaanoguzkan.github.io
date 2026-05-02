import { useTranslation } from 'react-i18next';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

const ORCID_ID = '0009-0000-3272-7333';

function Contact() {
  const { t } = useTranslation();
  const ref = useScrollFadeIn();

  return (
    <section id="contact" className="block reveal" ref={ref}>
      <div className="shell">
        <div className="block-head">
          <div className="block-num">
            <span className="n">08</span> &nbsp;/ {t('nav.contact')}
          </div>
          <h2 className="block-title" style={{ visibility: 'hidden' }}>—</h2>
        </div>

        <div className="contact-grid">
          <div>
            <h3 className="contact-headline">{t('contact.headline')}</h3>
            <p className="contact-text">{t('contact.text')}</p>
          </div>

          <div className="contact-side">
            <a
              className="contact-link"
              href="mailto:kaan.oguzkan@ug.bilkent.edu.tr"
            >
              <span className="contact-link-body">
                <span className="contact-link-lbl">{t('contact.labels.email')}</span>
                <span className="contact-link-val">kaan.oguzkan@ug.bilkent.edu.tr</span>
              </span>
              <span className="contact-link-arr" aria-hidden="true">→</span>
            </a>
            <a
              className="contact-link"
              href="https://github.com/kaanoguzkan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-link-body">
                <span className="contact-link-lbl">{t('contact.labels.github')}</span>
                <span className="contact-link-val">@kaanoguzkan</span>
              </span>
              <span className="contact-link-arr" aria-hidden="true">↗</span>
            </a>
            <a
              className="contact-link"
              href="https://linkedin.com/in/kaan-oguzkan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-link-body">
                <span className="contact-link-lbl">{t('contact.labels.linkedin')}</span>
                <span className="contact-link-val">kaan-oguzkan</span>
              </span>
              <span className="contact-link-arr" aria-hidden="true">↗</span>
            </a>
            <a
              className="contact-link"
              href={`https://orcid.org/${ORCID_ID}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-link-body">
                <span className="contact-link-lbl">{t('contact.labels.orcid')}</span>
                <span className="contact-link-val">{ORCID_ID}</span>
              </span>
              <span className="contact-link-arr" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
