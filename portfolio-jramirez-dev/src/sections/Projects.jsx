import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Projects.css';

function CopyField({ label, value, copyLabel, copiedLabel }) {
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
        aria-label={`${copyLabel} ${label}`}
      >
        {copied ? `✓ ${copiedLabel}` : copyLabel}
      </button>
    </div>
  );
}

function FeaturedProject({ project, t }) {
  const { title, tagline, description, tech, highlights, demo, github, credentials } = project;

  return (
    <article className="project-featured">
      <div className="project-featured__head">
        <div>
          <span className="project-featured__badge">{t('featuredBadge')}</span>
          <h3 className="project-featured__title">
            {title} <span className="project-featured__tagline">— {tagline}</span>
          </h3>
        </div>
        {credentials && <span className="project-featured__live">● {t('liveDemo')}</span>}
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
        {tech.map((tItem) => (
          <span key={tItem} className="tech-badge">{tItem}</span>
        ))}
      </div>

      {credentials && (
        <div className="cred">
          <div className="cred__title">
            {t('demoCredentials')}
            <span className="cred__note">{t('demoCredNote')}</span>
          </div>
          <CopyField
            label={t('emailLabel')}
            value={credentials.email}
            copyLabel={t('copy')}
            copiedLabel={t('copied')}
          />
          <CopyField
            label={t('passwordLabel')}
            value={credentials.password}
            copyLabel={t('copy')}
            copiedLabel={t('copied')}
          />
        </div>
      )}

      <div className="project-featured__actions">
        {demo && (
          <a className="btn btn--primary btn--small" href={demo} target="_blank" rel="noopener noreferrer">
            {t('tryDemo')}
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
        {tech.map((tItem) => (
          <span key={tItem} className="tech-badge">{tItem}</span>
        ))}
      </div>
      <div className="project-card__links">
        {github && <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>}
        {demo && <a href={demo} target="_blank" rel="noopener noreferrer">Demo</a>}
      </div>
    </article>
  );
}

export default function Projects() {
  const { content, t } = useLanguage();
  const featured = content.projects.filter((p) => p.featured);
  const rest = content.projects.filter((p) => !p.featured);

  return (
    <section className="projects" id="projects">
      <div className="section__container">
        <h2 className="section__title">{t('projectsTitle')}</h2>

        {featured.map((project) => (
          <FeaturedProject key={project.id} project={project} t={t} />
        ))}

        {rest.length > 0 && (
          <div className="projects__grid">
            {rest.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
