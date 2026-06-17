import { SKILLS, LANGUAGES, SOFT_SKILLS } from '../constants/data';
import '../styles/About.css';

const SKILL_LABELS = {
  frontend:  'Frontend',
  backend:   'Backend & Arquitectura',
  databases: 'Bases de Datos',
  devops:    'DevOps & Herramientas',
};

export default function About() {
  return (
    <section className="about" id="about">
      <h2 className="section__title">Habilidades</h2>

      <div className="about__skills-grid">
        {Object.entries(SKILLS).map(([category, items]) => (
          <div key={category} className="skill-group">
            <h3 className="skill-group__title">{SKILL_LABELS[category]}</h3>
            <div className="skill-group__tags">
              {items.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="about__bottom">
        <div className="about__languages">
          <h3 className="skill-group__title">Idiomas</h3>
          {LANGUAGES.map(({ lang, level }) => (
            <p key={lang}><span>{lang}:</span> {level}</p>
          ))}
        </div>
        <div className="about__soft">
          <h3 className="skill-group__title">Habilidades Blandas</h3>
          <ul>
            {SOFT_SKILLS.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
