import { useLanguage } from '../context/LanguageContext';
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
  const { content, t } = useLanguage();
  const consulting = content.experience.filter((exp) => exp.category === 'consulting');
  const corporate = content.experience.filter((exp) => exp.category === 'corporate');

  return (
    <section className="experience" id="experience">
      <h2 className="section__title">{t('experienceTitle')}</h2>

      {/* Consultoría y Proyectos Independientes */}
      {consulting.length > 0 && (
        <div className="experience__section">
          <div className="experience__section-header">
            <span className="experience__badge">{t('consultingBadge')}</span>
            <h3 className="experience__section-title">{t('consultingTitle')}</h3>
            <p className="experience__section-desc">{t('consultingSubtitle')}</p>
          </div>
          <div className="experience__list">
            {consulting.map((exp) => (
              <ExperienceItem key={exp.id} {...exp} />
            ))}
          </div>
        </div>
      )}

      {/* Trayectoria Corporativa */}
      {corporate.length > 0 && (
        <div className="experience__section">
          <div className="experience__section-header">
            <span className="experience__badge">{t('corporateBadge')}</span>
            <h3 className="experience__section-title">{t('corporateTitle')}</h3>
            <p className="experience__section-desc">{t('corporateSubtitle')}</p>
          </div>
          <div className="experience__list">
            {corporate.map((exp) => (
              <ExperienceItem key={exp.id} {...exp} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
