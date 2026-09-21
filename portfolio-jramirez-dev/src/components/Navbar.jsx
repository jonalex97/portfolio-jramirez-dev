import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../hooks/useTheme';
import '../styles/Navbar.css';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, content, t } = useLanguage();

  return (
    <nav className="navbar">
      <a href="#" className="navbar__logo">{content.personalInfo.name}</a>
      <div className="navbar__right">
        <ul className="navbar__links">
          {content.nav.map(({ href, label }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>

        {/* Language Switcher */}
        <div className="lang-switcher" role="group" aria-label="Selector de idioma">
          <button
            type="button"
            className={`lang-btn ${lang === 'es' ? 'lang-btn--active' : ''}`}
            onClick={() => setLang('es')}
            aria-label="Español"
            title="Español"
          >
            ES
          </button>
          <span className="lang-divider">/</span>
          <button
            type="button"
            className={`lang-btn ${lang === 'en' ? 'lang-btn--active' : ''}`}
            onClick={() => setLang('en')}
            aria-label="English"
            title="English"
          >
            EN
          </button>
        </div>

        {/* Theme Toggle */}
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? t('switchThemeDark') : t('switchThemeLight')}
          title={theme === 'dark' ? t('switchThemeDark') : t('switchThemeLight')}
        >
          {theme === 'dark' ? (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}
