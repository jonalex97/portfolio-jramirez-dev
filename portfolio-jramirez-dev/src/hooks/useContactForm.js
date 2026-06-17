import { useState, useCallback } from 'react';

const sanitize = (str) => str.replace(/[<>]/g, '');

export function useContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: sanitize(value) }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!form.name || !form.email || !form.message) {
        setStatus('error');
        return;
      }
      // Aquí integrarías tu servicio de email (EmailJS, API propia, etc.)
      console.log('Form submitted:', form);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    },
    [form]
  );

  return { form, status, handleChange, handleSubmit };
}
