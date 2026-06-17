import { PERSONAL_INFO } from '../constants/data';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {PERSONAL_INFO.name} · Hecho con React + Vite</p>
    </footer>
  );
}
