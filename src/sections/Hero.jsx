import { PERSONAL_INFO } from '../constants/data';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__content">
        <p className="hero__greeting">Hola, soy</p>
        <h1 className="hero__name">{PERSONAL_INFO.name}</h1>
        <h2 className="hero__title">{PERSONAL_INFO.subtitle}</h2>
        <p className="hero__description">{PERSONAL_INFO.description}</p>
        <div className="hero__cta">
          <a href="#projects" className="btn btn--primary">Ver Proyectos</a>
          <a href="#contact" className="btn btn--secondary">Contactar</a>
        </div>
      </div>
    </section>
  );
}
