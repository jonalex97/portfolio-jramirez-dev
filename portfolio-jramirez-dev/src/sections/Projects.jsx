import { useState } from 'react';
import { PROJECTS } from '../constants/data';
import '../styles/Projects.css';

function CopyField({ label, value }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="cred__row">
      <span className="cred__label">{label}</span>
      <code className="cred__value">{value}</code>
      <button
        type="button"
        className="cred__copy"
        onClick={copy}
        aria-label={`Copiar ${label}`}
      >
        {copied ? '✓ Copiado' : 'Copiar'}
      </button>
    </div>
  );
}

function FeaturedProject({ project }) {
  const { title, tagline, description, tech, highlights, demo, github, credentials } = project;

  return (
    <article className="project-featured">
      <div className="project-featured__head">
        <div>
          <span className="project-featured__badge">Proyecto destacado</span>
          <h3 className="project-featured__title">
            {title} <span className="project-featured__tagline">— {tagline}</span>
          </h3>
        </div>
        {credentials && <span className="project-featured__live">● Demo en vivo</span>}
      </div>

      <p className="project-featured__desc">{description}</p>

      {highlights?.length > 0 && (
        <ul className="project-featured__highlights">
          {highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}

      <div className="project-card__tech">
        {tech.map((t) => (
          <span key={t} className="tech-badge">{t}</span>
        ))}
      </div>

      {credentials && (
        <div className="cred">
          <div className="cred__title">
            Acceso de demostración
            <span className="cred__note">rol limitado · se reinicia a diario</span>
          </div>
          <CopyField label="Correo" value={credentials.email} />
          <CopyField label="Clave" value={credentials.password} />
        </div>
      )}

      <div className="project-featured__actions">
        {demo && (
          <a className="btn btn--primary btn--small" href={demo} target="_blank" rel="noopener noreferrer">
            Probar demo →
          </a>
        )}
        {github && (
          <a className="project-featured__ghlink" href={github} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
        )}
      </div>
    </article>
  );
}

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
  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section className="projects" id="projects">
      <h2 className="section__title">Proyectos</h2>

      {featured.map((project) => (
        <FeaturedProject key={project.id} project={project} />
      ))}

      {rest.length > 0 && (
        <div className="projects__grid">
          {rest.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      )}
    </section>
  );
}
