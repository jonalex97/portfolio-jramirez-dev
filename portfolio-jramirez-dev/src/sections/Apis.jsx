import { APIS } from '../constants/data';
import '../styles/Apis.css';

function ApiCard({ title, description, endpoints, docs }) {
  return (
    <article className="api-card">
      <h3 className="api-card__title">{title}</h3>
      <p className="api-card__desc">{description}</p>
      <ul className="api-card__endpoints">
        {endpoints.map((ep) => (
          <li key={ep}><code>{ep}</code></li>
        ))}
      </ul>
      <a href={docs} target="_blank" rel="noopener noreferrer" className="btn btn--small">
        Documentación
      </a>
    </article>
  );
}

export default function Apis() {
  return (
    <section className="apis" id="apis">
      <h2 className="section__title">APIs Desarrolladas</h2>
      <div className="apis__grid">
        {APIS.map((api) => (
          <ApiCard key={api.id} {...api} />
        ))}
      </div>
    </section>
  );
}
