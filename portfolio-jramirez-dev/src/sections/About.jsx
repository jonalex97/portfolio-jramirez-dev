import { useLanguage } from '../hooks/useLanguage';
import '../styles/About.css';

export default function About() {
  const { content, t } = useLanguage();
  const { aboutProfile, skills, skillsLabels, languages, softSkills } = content;

  return (
    <section className="about" id="about">
      <h2 className="section__title">{t('aboutTitle')}</h2>

      {aboutProfile && (
        <div className="about__intro">
          <h3 className="about__headline">{aboutProfile.headline}</h3>
          <p className="about__lead">{aboutProfile.lead}</p>

          <div className="about__highlights-grid">
            {aboutProfile.highlights.map((h, i) => (
              <div key={i} className="about__highlight-card">
                <div className="about__highlight-num">0{i + 1}</div>
                <h4 className="about__highlight-title">{h.title}</h4>
                <p className="about__highlight-desc">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="about__tech">
        <h3 className="about__tech-title">{t('skillsTitle')}</h3>
        <div className="about__skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skill-group">
              <h4 className="skill-group__title">{skillsLabels[category] || category}</h4>
              <div className="skill-group__tags">
                {items.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="about__bottom">
        <div className="about__languages">
          <h4 className="skill-group__title">{t('languagesTitle')}</h4>
          {languages.map(({ lang, level }) => (
            <p key={lang}><span>{lang}:</span> {level}</p>
          ))}
        </div>
        <div className="about__soft">
          <h4 className="skill-group__title">{t('softSkillsTitle')}</h4>
          <ul>
            {softSkills.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
