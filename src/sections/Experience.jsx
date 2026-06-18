import { EXPERIENCE } from '../constants/data';
import '../styles/Experience.css';

function ExperienceItem({ company, role, period, location, description, achievements, tech }) {
  return (
    <article className="exp-item">
      <div className="exp-item__header">
        <div>
          <h3 className="exp-item__role">{role}</h3>
          <p className="exp-item__company">{company} · <span>{location}</span></p>
        </div>
        <span className="exp-item__period">{period}</span>
      </div>
      <p className="exp-item__desc">{description}</p>
      <ul className="exp-item__achievements">
        {achievements.map((a) => <li key={a}>{a}</li>)}
      </ul>
      <div className="exp-item__tech">
        {tech.map((t) => <span key={t} className="tech-badge">{t}</span>)}
      </div>
    </article>
  );
}

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <h2 className="section__title">Experiencia</h2>
      <div className="experience__list">
        {EXPERIENCE.map((exp) => (
          <ExperienceItem key={exp.id} {...exp} />
        ))}
      </div>
    </section>
  );
}
