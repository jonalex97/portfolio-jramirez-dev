import { useContactForm } from '../hooks/useContactForm';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Contact.css';

export default function Contact() {
  const { content, t } = useLanguage();
  const { personalInfo } = content;
  const { form, status, handleChange, handleSubmit, handleWhatsApp } = useContactForm();

  return (
    <section className="contact" id="contact">
      <div className="section__container">
        <h2 className="section__title">{t('contactTitle')}</h2>
        <div className="contact__wrapper">
        <div className="contact__info">
          <p>{t('contactSubtitle')}</p>
          <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
          <div className="contact__socials">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a
              href={`https://wa.me/${personalInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            name="name"
            placeholder={t('namePlaceholder')}
            value={form.name}
            onChange={handleChange}
            maxLength={100}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t('emailPlaceholder')}
            value={form.email}
            onChange={handleChange}
            maxLength={150}
            required
          />
          <input
            type="text"
            name="company"
            className="contact__hp"
            value={form.company}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
          <textarea
            name="message"
            placeholder={t('msgPlaceholder')}
            value={form.message}
            onChange={handleChange}
            maxLength={1000}
            rows={5}
            required
          />
          {status === 'success' && <p className="form-msg form-msg--success">{t('msgSuccess')}</p>}
          {status === 'error' && <p className="form-msg form-msg--error">{t('msgError')}</p>}
          {status === 'error-email' && <p className="form-msg form-msg--error">{t('msgErrorEmail')}</p>}
          {status === 'cooldown' && <p className="form-msg form-msg--error">{t('msgCooldown')}</p>}
          {status === 'failed' && (
            <p className="form-msg form-msg--error">
              {t('msgFailed')}
            </p>
          )}
          <div className="contact__form-actions">
            <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
              {status === 'sending' ? t('sendingBtn') : t('sendEmailBtn')}
            </button>
            <button type="button" className="btn btn--whatsapp" onClick={handleWhatsApp}>
              {t('sendWhatsAppBtn')}
            </button>
          </div>
        </form>
        </div>
      </div>
    </section>
  );
}
