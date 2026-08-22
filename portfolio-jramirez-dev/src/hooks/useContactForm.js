import { useState, useCallback, useRef } from 'react';
import { PERSONAL_INFO } from '../constants/data';

const sanitize = (str) => str.replace(/[<>]/g, '');
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const COOLDOWN_MS = 60_000;

// Endpoint de Formspree (https://formspree.io) — se configura en .env como
// VITE_FORMSPREE_ENDPOINT; sin él, el envío por correo reporta 'failed'.
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

export function useContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '', company: '' });
  const [status, setStatus] = useState(null);
  const lastSentAt = useRef(0);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: sanitize(value) }));
    setStatus(null);
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!form.name || !form.email || !form.message) {
        setStatus('error');
        return;
      }
      if (!EMAIL_REGEX.test(form.email)) {
        setStatus('error-email');
        return;
      }
      if (Date.now() - lastSentAt.current < COOLDOWN_MS) {
        setStatus('cooldown');
        return;
      }
      // Honeypot: 'company' es invisible para humanos; si viene lleno es un
      // bot — se finge éxito sin gastar el cupo de Formspree.
      if (form.company) {
        setStatus('success');
        setForm({ name: '', email: '', message: '', company: '' });
        return;
      }
      if (!FORMSPREE_ENDPOINT) {
        setStatus('failed');
        return;
      }
      setStatus('sending');
      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message,
          }),
        });
        if (!res.ok) throw new Error(`Formspree respondió ${res.status}`);
        lastSentAt.current = Date.now();
        setStatus('success');
        setForm({ name: '', email: '', message: '', company: '' });
      } catch {
        setStatus('failed');
      }
    },
    [form]
  );

  const handleWhatsApp = useCallback(() => {
    if (!form.name || !form.message) {
      setStatus('error');
      return;
    }
    const text = [
      `Hola Jonathan, soy ${form.name}.`,
      form.email ? `Mi correo es ${form.email}.` : null,
      form.message,
    ]
      .filter(Boolean)
      .join('\n\n');
    const url = `https://wa.me/${PERSONAL_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setStatus(null);
  }, [form]);

  return { form, status, handleChange, handleSubmit, handleWhatsApp };
}
