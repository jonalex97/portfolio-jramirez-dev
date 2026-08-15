import { PERSONAL_INFO } from '../constants/data';
import { useVisitCounter } from '../hooks/useVisitCounter';
import '../styles/Footer.css';

export default function Footer() {
  const visits = useVisitCounter();

  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {PERSONAL_INFO.name} · Hecho con React + Vite</p>
      {visits !== null && (
        <p className="footer-visits">👁 {visits.toLocaleString('es')} visitas</p>
      )}
    </footer>
  );
}
