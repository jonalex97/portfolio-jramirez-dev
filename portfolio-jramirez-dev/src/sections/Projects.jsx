import { PROJECTS } from '../constants/data';
import '../styles/Projects.css';

function ProjectCard({ title, description, tech, github, demo }) {
  return (
    <article className="project-card">
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__desc">{description}</p>
      <div className="project-card__tech">
        {tech.map((t) => (
          <span key={t} className="tech-badge">{t}</span>
        ))}
      </div>
      <div className="project-card__links">
        <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={demo} target="_blank" rel="noopener noreferrer">Demo</a>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="section__title">Proyectos</h2>
      <div className="projects__grid">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
