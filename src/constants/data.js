// ─── INFORMACIÓN PERSONAL ────────────────────────────────────────────────────
export const PERSONAL_INFO = {
  name: 'Jonathan Ramírez',
  title: 'Fullstack Developer .NET / C#',
  subtitle: 'Fullstack Developer | .NET · C# · React · SQL Server · Clean Architecture',
  description:
    'Desarrollador Fullstack .NET con más de 4 años de experiencia en aplicaciones empresariales del sector financiero. Especializado en APIs RESTful, integración de sistemas y optimización de procesos críticos en entornos de alta demanda. Enfocado en soluciones seguras, escalables y de alto rendimiento.',
  location: 'San Salvador, El Salvador',
  email: 'jhonalexramirez15@gmail.com',
  phone: import.meta.env.VITE_PHONE,
  phoneDisplay: import.meta.env.VITE_PHONE_DISPLAY,
  whatsapp: `https://wa.me/${import.meta.env.VITE_PHONE}`,
  github: 'https://github.com/jonalex97',
  linkedin: 'https://linkedin.com/in/jonathan-ramirez97',
  website: '',
  availableForWork: true,
};

// ─── EXPERIENCIA LABORAL ──────────────────────────────────────────────────────
export const EXPERIENCE = [
  {
    id: 1,
    company: 'Freelance',
    role: 'Fullstack Developer',
    period: 'Sep 2025 – Presente',
    location: 'Remoto',
    description: 'Desarrollo de soluciones empresariales end-to-end, desde arquitectura backend hasta interfaces de usuario.',
    achievements: [
      'Desarrollo y mantenimiento de APIs RESTful con .NET Core',
      'Diseño de arquitectura backend con Clean Architecture y principios SOLID',
      'Implementación de pipelines CI/CD con Azure DevOps',
      'Contenerización de aplicaciones con Docker',
      'Desarrollo de pruebas unitarias con xUnit',
    ],
    tech: ['C#', '.NET Core', 'React', 'TypeScript', 'SQL Server', 'PostgreSQL', 'Docker', 'Azure DevOps'],
  },
  {
    id: 2,
    company: 'Banco Integral S.A.',
    role: 'Especialista de Aplicaciones',
    period: 'Abr 2022 – Abr 2026',
    location: 'San Salvador, El Salvador',
    description: 'Desarrollo e integración de servicios backend para sistemas bancarios en entornos de alta demanda y criticidad.',
    achievements: [
      'Diseño y consumo de APIs REST para plataformas web y banca móvil',
      'Implementación de soluciones para transferencias electrónicas (Transfers 365)',
      'Integración con sistemas externos mediante middleware OnBase',
      'Optimización de consultas SQL para mejorar rendimiento de procesos críticos',
      'Desarrollo y mantenimiento de sistemas core bancarios con GeneXus (8, 15 y 18)',
      'Participación en procesos ágiles bajo metodología Scrum',
    ],
    tech: ['C#', '.NET Core', 'JavaScript', 'TypeScript', 'SQL Server', 'PostgreSQL', 'Entity Framework', 'Dapper', 'GeneXus'],
  },
  {
    id: 3,
    company: 'Creativa Consultores',
    role: 'Pasante Programador .NET Full Stack',
    period: '2021 (2 meses)',
    location: 'El Salvador',
    description: 'Desarrollo de sistema interno para gestión de solicitudes de empleados.',
    achievements: [
      'Implementación con ASP.NET MVC, Bootstrap y Entity Framework',
      'Generación de reportes con Rotativa',
      'Gestión de base de datos PostgreSQL',
    ],
    tech: ['ASP.NET MVC', 'C#', 'Bootstrap', 'Entity Framework', 'PostgreSQL'],
  },
  {
    id: 4,
    company: 'Creativa Consultores',
    role: 'Pasante Programador Oracle',
    period: '2021 (3 meses)',
    location: 'El Salvador',
    description: 'Desarrollo en Oracle Forms and Reports i9 para sistemas bancarios y de pensiones.',
    achievements: [
      'Desarrollo de módulos en Oracle Forms and Reports i9',
      'Soporte a sistemas bancarios y de pensiones',
    ],
    tech: ['Oracle Forms', 'Oracle Reports', 'Oracle Database'],
  },
];

// ─── PROYECTOS ────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: 1,
    title: 'Próximamente...',
    description: 'Estoy construyendo proyectos públicos que estarán disponibles aquí pronto.',
    tech: ['.NET', 'React', 'SQL Server'],
    github: '#',
    demo: '#',
    status: 'development',
    featured: true,
  },
];

// ─── APIs ─────────────────────────────────────────────────────────────────────
export const APIS = [
  {
    id: 1,
    title: 'Próximamente...',
    description: 'APIs desarrolladas en proyectos empresariales. Los proyectos públicos estarán disponibles pronto.',
    endpoints: ['GET /api/recurso', 'POST /api/recurso', 'PUT /api/recurso/:id'],
    docs: '#',
    status: 'beta',
  },
];

// ─── HABILIDADES ──────────────────────────────────────────────────────────────
export const SKILLS = {
  frontend:  ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap', 'Razor Pages'],
  backend:   ['C#', '.NET 6/7/8', 'ASP.NET Core', 'ASP.NET MVC', 'REST APIs', 'Clean Architecture', 'SOLID', 'xUnit', 'Moq'],
  databases: ['SQL Server', 'PostgreSQL', 'Oracle Database', 'MySQL', 'Entity Framework', 'Dapper'],
  devops:    ['Azure DevOps (CI/CD)', 'Docker', 'Git', 'GeneXus'],
};

// ─── EDUCACIÓN ────────────────────────────────────────────────────────────────
export const EDUCATION = [
  {
    id: 1,
    institution: 'Universidad Pedagógica de El Salvador',
    degree: 'Licenciatura en Gerencia Informática',
    period: '2019 – 2024',
    location: 'San Salvador, El Salvador',
  },
];

// ─── CERTIFICACIONES ─────────────────────────────────────────────────────────
export const CERTIFICATIONS = [
  // Agrega tus certificaciones aquí cuando las tengas
  // { id: 1, name: '', issuer: '', year: '', url: '#' },
];

// ─── IDIOMAS ─────────────────────────────────────────────────────────────────
export const LANGUAGES = [
  { lang: 'Español', level: 'Nativo' },
  { lang: 'Inglés',  level: 'Básico técnico (lectura de documentación)' },
];

// ─── HABILIDADES BLANDAS ──────────────────────────────────────────────────────
export const SOFT_SKILLS = [
  'Pensamiento analítico y orientación a resultados',
  'Trabajo en equipo y comunicación efectiva',
  'Proactividad y mejora continua',
  'Responsabilidad y compromiso profesional',
  'Adaptabilidad ante entornos cambiantes',
];

// ─── NAVEGACIÓN ──────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { href: '#about',      label: 'Sobre mí'    },
  { href: '#experience', label: 'Experiencia' },
  { href: '#projects',   label: 'Proyectos'   },
  { href: '#apis',       label: 'APIs'        },
  { href: '#contact',    label: 'Contacto'    },
];
