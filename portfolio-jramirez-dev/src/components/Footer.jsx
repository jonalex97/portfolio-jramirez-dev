import { useLanguage } from '../context/LanguageContext';
import { useVisitCounter } from '../hooks/useVisitCounter';
import '../styles/Footer.css';

export default function Footer() {
  const { content, t, lang } = useLanguage();
  const visits = useVisitCounter();

  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {content.personalInfo.name} · {t('footerMadeWith')}</p>
      {visits !== null && (
        <p className="footer-visits">👁 {visits.toLocaleString(lang === 'en' ? 'en-US' : 'es-SV')} {t('footerVisits')}</p>
      )}
    </footer>
  );
}
