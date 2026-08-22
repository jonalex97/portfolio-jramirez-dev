import { useContactForm } from '../hooks/useContactForm';
import { PERSONAL_INFO } from '../constants/data';
import '../styles/Contact.css';

export default function Contact() {
  const { form, status, handleChange, handleSubmit, handleWhatsApp } = useContactForm();

  return (
    <section className="contact" id="contact">
      <h2 className="section__title">Contacto</h2>
      <div className="contact__wrapper">
        <div className="contact__info">
          <p>¿Tienes un proyecto en mente? ¡Hablemos!</p>
          <a href={`mailto:${PERSONAL_INFO.email}`}>{PERSONAL_INFO.email}</a>
          <div className="contact__socials">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a
              href={`https://wa.me/${PERSONAL_INFO.whatsapp}`}
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
            placeholder="Nombre"
            value={form.name}
            onChange={handleChange}
            maxLength={100}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            maxLength={150}
            required
          />
          <textarea
            name="message"
            placeholder="Mensaje"
            value={form.message}
            onChange={handleChange}
            maxLength={1000}
            rows={5}
            required
          />
          {status === 'success' && <p className="form-msg form-msg--success">¡Mensaje enviado! Te responderé pronto.</p>}
          {status === 'error' && <p className="form-msg form-msg--error">Por favor completa todos los campos.</p>}
          {status === 'failed' && (
            <p className="form-msg form-msg--error">
              No se pudo enviar el correo. Intenta por WhatsApp o escríbeme directamente.
            </p>
          )}
          <div className="contact__form-actions">
            <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
              {status === 'sending' ? 'Enviando…' : 'Enviar por correo'}
            </button>
            <button type="button" className="btn btn--whatsapp" onClick={handleWhatsApp}>
              Enviar por WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
