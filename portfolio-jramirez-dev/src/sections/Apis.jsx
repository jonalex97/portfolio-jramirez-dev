import { useLanguage } from '../context/LanguageContext';
import '../styles/Apis.css';

function ApiCard({ title, description, endpoints, docs, docsBtn }) {
  return (
    <article className="api-card">
      <h3 className="api-card__title">{title}</h3>
      <p className="api-card__desc">{description}</p>
      <ul className="api-card__endpoints">
        {endpoints.map((ep) => (
          <li key={ep}><code>{ep}</code></li>
        ))}
      </ul>
      {docs && (
        <a href={docs} target="_blank" rel="noopener noreferrer" className="btn btn--small">
          {docsBtn}
        </a>
      )}
    </article>
  );
}

export default function Apis() {
  const { content, t } = useLanguage();

  return (
    <section className="apis" id="apis">
      <h2 className="section__title">{t('apisTitle')}</h2>
      <div className="apis__grid">
        {content.apis.map((api) => (
          <ApiCard key={api.id} {...api} docsBtn={t('docsBtn')} />
        ))}
      </div>
    </section>
  );
}
