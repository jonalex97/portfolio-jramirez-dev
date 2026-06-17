import { NAV_LINKS, PERSONAL_INFO } from '../constants/data';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="navbar__logo">{PERSONAL_INFO.name}</a>
      <ul className="navbar__links">
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
