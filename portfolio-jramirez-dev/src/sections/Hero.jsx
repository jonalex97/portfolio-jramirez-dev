import { useLanguage } from '../context/LanguageContext';
import '../styles/Hero.css';

export default function Hero() {
  const { content, t } = useLanguage();
  const { personalInfo } = content;

  return (
    <section className="hero" id="hero">
      <div className="hero__content">
        <p className="hero__greeting">{t('heroGreeting')}</p>
        <h1 className="hero__name">{personalInfo.name}</h1>
        <h2 className="hero__title">{personalInfo.subtitle}</h2>
        <p className="hero__description">{personalInfo.description}</p>
        <div className="hero__cta">
          <a href="#projects" className="btn btn--primary">{t('viewProjects')}</a>
          <a href="#contact" className="btn btn--secondary">{t('contact')}</a>
        </div>
      </div>
    </section>
  );
}
