// ─── INFORMACIÓN BASE (Común a ambos idiomas) ──────────────────────────────────
const BASE_INFO = {
  name: 'Jonathan Ramírez',
  email: import.meta.env.VITE_CONTACT_EMAIL || 'jramirez.dev.net@gmail.com',
  phone: '+503 7120-2704',
  whatsapp: import.meta.env.VITE_WHATSAPP || '50371202704',
  github: 'https://github.com/jonalex97',
  linkedin: 'https://linkedin.com/in/jonathan-ramirez97',
  website: 'https://jonalex97.github.io/portfolio-jramirez-dev/',
  availableForWork: true,
};

// ─── DICCIONARIOS BILINGÜES (ES / EN) ──────────────────────────────────────────
export const CONTENT = {
  es: {
    nav: [
      { href: '#about', label: 'Sobre mí' },
      { href: '#experience', label: 'Experiencia' },
      { href: '#projects', label: 'Proyectos' },
      { href: '#apis', label: 'APIs' },
      { href: '#contact', label: 'Contacto' },
    ],
    personalInfo: {
      ...BASE_INFO,
      title: 'Fullstack Developer .NET / C#',
      subtitle: 'Fullstack Developer | .NET · C# · Clean Architecture · Microservicios · SQL Server',
      description:
        'Ingeniero de Software y Desarrollador Fullstack .NET con más de 5 años de experiencia modernizando procesos y construyendo arquitecturas críticas en los sectores bancario, energético y comercial. Especialista en entender la operativa del negocio, transformar flujos manuales y desplegar soluciones de alto rendimiento con .NET, microservicios y Clean Architecture.',
      location: 'San Salvador, El Salvador',
    },
    aboutProfile: {
      title: 'Sobre mí',
      headline: 'Entiendo el problema del negocio, diseño la arquitectura adecuada y modernizo los procesos.',
      lead: 'No me limito a escribir código: me adentro en la operativa de las instituciones para identificar ineficiencias, cuellos de botella y procesos manuales. Mi objetivo es transformar sistemas heredados y flujos complejos en soluciones tecnológicas escalables, seguras y de alto impacto.',
      highlights: [
        {
          title: 'Diagnóstico & Modernización',
          desc: 'Capacidad demostrada para auditar sistemas legacy, comprender la lógica operativa de la institución y liderar su digitalización y modernización integral.',
        },
        {
          title: 'Arquitectura .NET & Microservicios',
          desc: 'Diseño de sistemas bajo Clean Architecture, patrones Hexagonales, CQRS y microservicios en .NET 10 con alta resiliencia y tolerancia a fallos.',
        },
        {
          title: 'Entornos de Alta Criticidad',
          desc: 'Experiencia directa en banca, el sector energético regional y plataformas fiscales (DTE), donde la integridad transaccional y el cumplimiento regulatorio son indispensables.',
        },
      ],
    },
    experience: [
      {
        id: 1,
        category: 'consulting',
        company: 'CoreStack Consulting / Consultor Independiente',
        role: 'Consultor de Software & Modernización de Procesos',
        period: 'Sep 2025 – Presente',
        location: 'San Salvador, El Salvador · Remoto',
        description:
          'Consultoría técnica independiente y desarrollo de soluciones críticas de software para clientes corporativos de diversos sectores, destacando servicios de modernización de procesos, arquitectura de microservicios y cumplimiento tributario.',
        achievements: [
          'Banco Integral, S.A.: Consultor externo para la arquitectura e implementación del Motor de Decisión Crediticia mediante microservicios en .NET 10 (Clean Architecture / Hexagonal): orquestación de scoring multifuente, evaluación automatizada de riesgo crediticio, originación y cálculo de planes de amortización',
          'Banco Integral, S.A.: Desarrollo de API para la indexación y procesamiento de documentación generada por contratos de productos digitales en la institución',
          'Facturación Electrónica (DTE): Diseño e integración de plataformas para emisión, contingencia y transmisión de DTE con el Ministerio de Hacienda para empresas comerciales',
          'Sistemas ERP y de Gestión: Creación de sistemas modulares en la nube con Clean Architecture, CQRS, control de cajas, kardex de inventario y permisos RBAC',
        ],
        tech: ['C#', '.NET 10', 'React', 'Next.js', 'PostgreSQL', 'SQL Server', 'Docker', 'DTE / MH', 'Microservicios'],
      },
      {
        id: 2,
        category: 'consulting',
        company: 'TechyWe (Servicios Profesionales / Contractor)',
        role: 'Fullstack Developer / Consultor Externo',
        period: 'Sep 2025 – Jul 2026',
        location: 'San Salvador, El Salvador · Remoto',
        description:
          'Servicios profesionales de desarrollo fullstack y modernización de sistemas para clientes corporativos asignados en los rubros energético regional y retail/comercio, bajo patrones de diseño y arquitecturas desacopladas.',
        achievements: [
          'Sector Energético Regional: Automatización y digitalización de procesos operativos manuales sobre plataforma web en .NET ASP y base de datos Oracle con Dapper',
          'Sector Comercial / Retail: Desarrollo de arquitectura cloud con .NET y migración completa de base de datos desde SQL Server hacia PostgreSQL mediante Entity Framework Core',
          'Pipelines ETL: Diseño e implementación de procesos ETL para la consolidación y migración de bases de datos heredadas hacia nuevas plataformas en la nube',
          'Optimización de interfaces y rendimiento con JavaScript, Ajax, jQuery y Bootstrap bajo estándares de Clean Code',
        ],
        tech: ['.NET', 'C#', 'PostgreSQL', 'SQL Server', 'Oracle DB', 'Entity Framework Core', 'Dapper', 'ETL', 'JavaScript', 'jQuery', 'Bootstrap'],
      },
      {
        id: 3,
        category: 'corporate',
        company: 'Banco Integral S.A.',
        role: 'Especialista de Aplicaciones',
        period: 'Feb 2022 – Abr 2026 (4 años y 2 meses)',
        location: 'San Salvador, El Salvador',
        description:
          'Ingreso inicial mediante consultora outsourcing (BSCI) e incorporación directa en abril de 2022 al equipo institucional de TI como Especialista de Aplicaciones, participando en el desarrollo, mantenimiento y modernización de servicios bancarios de alta criticidad.',
        achievements: [
          'Diseño y consumo de APIs REST para plataformas web y banca móvil',
          'Implementación de soluciones para transferencias electrónicas interbancarias (Transfers 365)',
          'Integración con sistemas externos mediante middleware OnBase',
          'Optimización de consultas SQL para mejorar rendimiento de procesos críticos batch y en línea',
          'Desarrollo y soporte a sistemas core bancarios con GeneXus (versiones 8, 15 y 18)',
          'Participación activa en células ágiles bajo metodología Scrum',
        ],
        tech: ['C#', '.NET Core', 'JavaScript', 'TypeScript', 'SQL Server', 'PostgreSQL', 'Entity Framework', 'Dapper', 'GeneXus'],
      },
      {
        id: 4,
        category: 'corporate',
        company: 'Creativa Consultores',
        role: 'Pasante Programador .NET & Oracle',
        period: '2021 (5 meses)',
        location: 'San Salvador, El Salvador',
        description:
          'Desarrollo de módulos internos para gestión de solicitudes de empleados y soporte a sistemas bancarios y de pensiones con ASP.NET MVC, PostgreSQL y Oracle Forms and Reports i9.',
        achievements: [
          'Implementación de sistema web con ASP.NET MVC, Bootstrap, Entity Framework y reportes con Rotativa',
          'Desarrollo de módulos y reportes en Oracle Forms and Reports i9 para sistemas financieros',
        ],
        tech: ['ASP.NET MVC', 'C#', 'PostgreSQL', 'Oracle Forms', 'Oracle Reports', 'Bootstrap'],
      },
    ],
    projects: [
      {
        id: 1,
        title: 'NexaFactura',
        tagline: 'Plataforma DTE para El Salvador (Facturación Electrónica)',
        description:
          'Solución SaaS y API para la emisión, firma digital (JWS/RSA), validación y transmisión de Documentos Tributarios Electrónicos (DTE) ante el Ministerio de Hacienda de El Salvador (DGII). Manejo de contingencia de hasta 72h, generación de PDF con código QR y notificación por correo.',
        tech: ['.NET 10', 'ASP.NET Core Web API', 'EF Core', 'PostgreSQL', 'Clean Architecture', 'Docker', 'Swagger'],
        highlights: [
          'Emisión de 5 tipos de DTE validados contra esquemas JSON oficiales del MH',
          'Firma electrónica con certificados .p12 (JWS) y transmisión con manejo de contingencia',
          'Generación automática de representación gráfica en PDF con código QR y envío por correo',
          'Arquitectura desacoplada sin dependencias externas comerciales, lista para integración con ERPs o sistemas clínicos',
        ],
        github: 'https://github.com/jonalex97/NexaFactura',
        status: 'live',
        featured: true,
      },
      {
        id: 2,
        title: 'NexaSuite',
        tagline: 'ERP SaaS multiempresa',
        description:
          'ERP en la nube multi-tenant para PYMEs: control de accesos por roles y permisos, facturación con cobros, inventario con kardex, cotizaciones, reportes y notificaciones. Interfaz bilingüe español / inglés.',
        tech: ['.NET 10', 'Clean Architecture', 'CQRS', 'PostgreSQL', 'Next.js', 'React', 'MUI', 'Docker'],
        highlights: [
          'Backend con Clean Architecture + CQRS/MediatR, multi-tenant y RBAC por permisos',
          'Frontend Next.js con un motor CRUD dirigido por configuración (un módulo = un objeto)',
          '35 pruebas, 0 warnings, CI/CD con GitHub Actions e interfaz bilingüe ES/EN',
        ],
        demo: 'https://nexasuite.vercel.app',
        github: 'https://github.com/jonalex97/nexasuite',
        credentials: { email: 'demo@nexasuite.io', password: 'Demo1234$' },
        status: 'demo',
        featured: true,
      },
    ],
    apis: [
      {
        id: 1,
        title: 'NexaSuite API',
        description:
          'API REST del ERP NexaSuite: ~55 endpoints versionados, autenticación JWT con refresh, autorización por permisos y respuesta uniforme (ApiResponse). Documentada con Swagger/OpenAPI.',
        endpoints: [
          'POST /api/v1/auth/login',
          'GET  /api/v1/invoices',
          'POST /api/v1/invoices/{id}/issue',
          'POST /api/v1/payments',
        ],
        docs: 'https://nexasuite-api-p263.onrender.com/swagger',
        status: 'live',
      },
      {
        id: 2,
        title: 'NexaFactura DTE API',
        description:
          'API REST para emisión y transmisión de Documentos Tributarios Electrónicos al Ministerio de Hacienda de El Salvador. Endpoints para Facturas, Créditos Fiscales, contingencia e invalidaciones con firma JWS.',
        endpoints: [
          'POST /api/v1/dte/factura',
          'POST /api/v1/dte/credito-fiscal',
          'POST /api/v1/dte/contingencia',
          'POST /api/v1/dte/anulacion',
        ],
        status: 'live',
      },
    ],
    skills: {
      frontend: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap', 'Razor Pages'],
      backend: ['C#', '.NET 6/7/8/10', 'ASP.NET Core', 'ASP.NET MVC', 'REST APIs', 'Clean Architecture', 'SOLID', 'Design Patterns', 'xUnit'],
      databases: ['SQL Server', 'PostgreSQL', 'Oracle Database', 'MySQL', 'Entity Framework Core', 'Dapper', 'ETL / Migraciones'],
      devops: ['Azure DevOps (CI/CD)', 'Docker', 'Git', 'GeneXus'],
    },
    skillsLabels: {
      frontend: 'Frontend',
      backend: 'Backend & Arquitectura',
      databases: 'Bases de Datos',
      devops: 'DevOps & Herramientas',
    },
    education: [
      {
        id: 1,
        institution: 'Universidad Pedagógica de El Salvador',
        degree: 'Licenciatura en Gerencia Informática',
        period: '2019 – 2024',
        location: 'San Salvador, El Salvador',
      },
    ],
    languages: [
      { lang: 'Español', level: 'Nativo' },
      { lang: 'Inglés', level: 'Intermedio (B1)' },
    ],
    softSkills: [
      'Pensamiento analítico y orientación a resultados',
      'Trabajo en equipo y comunicación asertiva',
      'Proactividad y mejora continua de procesos',
      'Responsabilidad y alto compromiso profesional',
      'Adaptabilidad ante entornos y tecnologías cambiantes',
    ],
    ui: {
      heroGreeting: 'Hola, soy',
      viewProjects: 'Ver Proyectos',
      contact: 'Contactar',
      aboutTitle: 'Sobre mí',
      skillsTitle: 'Stack Tecnológico & Habilidades',
      experienceTitle: 'Experiencia',
      consultingBadge: 'Servicios Profesionales / Freelance',
      consultingTitle: 'Consultoría & Proyectos Independientes',
      consultingSubtitle: 'Desarrollo de soluciones a la medida, modernización de procesos e integraciones para clientes corporativos',
      corporateBadge: 'Trayectoria Institucional',
      corporateTitle: 'Experiencia Corporativa',
      corporateSubtitle: 'Roles en planilla e ingeniería de software en el sector financiero y consultoría',
      projectsTitle: 'Proyectos',
      apisTitle: 'APIs Desarrolladas',
      contactTitle: 'Contacto',
      contactSubtitle: '¿Tienes un proyecto en mente? ¡Hablemos!',
      featuredBadge: 'Proyecto destacado',
      liveDemo: 'Demo en vivo',
      tryDemo: 'Probar demo →',
      demoCredentials: 'Acceso de demostración',
      demoCredNote: 'rol limitado · se reinicia a diario',
      emailLabel: 'Correo',
      passwordLabel: 'Clave',
      copy: 'Copiar',
      copied: '✓ Copiado',
      docsBtn: 'Documentación',
      namePlaceholder: 'Nombre',
      emailPlaceholder: 'Email',
      msgPlaceholder: 'Mensaje',
      sendEmailBtn: 'Enviar por correo',
      sendingBtn: 'Enviando…',
      sendWhatsAppBtn: 'Enviar por WhatsApp',
      msgSuccess: '¡Mensaje enviado! Te responderé pronto.',
      msgError: 'Por favor completa todos los campos.',
      msgErrorEmail: 'El correo no parece válido, revísalo.',
      msgCooldown: 'Ya enviaste un mensaje hace poco; espera un momento o escríbeme por WhatsApp.',
      msgFailed: 'No se pudo enviar el correo. Intenta por WhatsApp o escríbeme directamente.',
      footerMadeWith: 'Hecho con React + Vite',
      footerVisits: 'visitas',
      languagesTitle: 'Idiomas',
      softSkillsTitle: 'Habilidades Blandas',
      switchThemeDark: 'Cambiar a modo claro',
      switchThemeLight: 'Cambiar a modo oscuro',
    },
  },

  en: {
    nav: [
      { href: '#about', label: 'About' },
      { href: '#experience', label: 'Experience' },
      { href: '#projects', label: 'Projects' },
      { href: '#apis', label: 'APIs' },
      { href: '#contact', label: 'Contact' },
    ],
    personalInfo: {
      ...BASE_INFO,
      title: 'Fullstack Developer .NET / C#',
      subtitle: 'Fullstack Developer | .NET · C# · Clean Architecture · Microservices · SQL Server',
      description:
        'Software Engineer & Fullstack .NET Developer with over 5 years of experience modernizing institutional workflows and architecting mission-critical platforms across banking, energy, and retail sectors. Specialized in understanding complex business logic, transforming legacy systems, and delivering high-performance solutions with .NET, microservices, and Clean Architecture.',
      location: 'San Salvador, El Salvador',
    },
    aboutProfile: {
      title: 'About Me',
      headline: 'I understand the core business problem, architect the right solution, and modernize institutional processes.',
      lead: 'I do not just write code: I delve into institutional operations to diagnose friction points, manual bottlenecks, and operational gaps. My mission is transforming legacy systems and complex workflows into scalable, secure, and resilient platforms.',
      highlights: [
        {
          title: 'Diagnosis & Modernization',
          desc: 'Proven track record auditing legacy platforms, understanding institutional operational logic, and leading complete end-to-end digital modernization.',
        },
        {
          title: '.NET Architecture & Microservices',
          desc: 'Designing resilient platforms with Clean Architecture, Hexagonal patterns, CQRS, and .NET 10 microservices built for high availability and fault tolerance.',
        },
        {
          title: 'Mission-Critical Environments',
          desc: 'Direct engineering impact across banking, regional energy markets, and fiscal compliance (electronic invoicing), where auditability and ACID integrity are non-negotiable.',
        },
      ],
    },
    experience: [
      {
        id: 1,
        category: 'consulting',
        company: 'CoreStack Consulting / Independent Consultant',
        role: 'Software Consultant & Process Modernization Specialist',
        period: 'Sep 2025 – Present',
        location: 'San Salvador, El Salvador · Remote',
        description:
          'Independent technical consulting and software engineering for enterprise clients across industries, focusing on process modernization, microservices architecture, and fiscal compliance.',
        achievements: [
          'Banco Integral, S.A.: External software consultant for the architecture and implementation of the Credit Decision Engine via .NET 10 microservices (Clean Architecture / Hexagonal): multi-source scoring orchestration, automated credit risk evaluation, loan origination, and amortization plan calculation',
          'Banco Integral, S.A.: Development of an API for indexing and processing contract documentation generated for digital products within the institution',
          'Electronic Invoicing (DTE): Architecture and integration of automated platforms for issuing, contingency handling, and transmitting DTE with the Ministry of Finance for commercial businesses',
          'ERP & Business Systems: Cloud modular business suites using Clean Architecture, CQRS, cashier controls, inventory kardex, and granular RBAC permissions',
        ],
        tech: ['C#', '.NET 10', 'React', 'Next.js', 'PostgreSQL', 'SQL Server', 'Docker', 'DTE / MH', 'Microservices'],
      },
      {
        id: 2,
        category: 'consulting',
        company: 'TechyWe (Professional Services / Contractor)',
        role: 'Fullstack Developer / External Consultant',
        period: 'Sep 2025 – Jul 2026',
        location: 'San Salvador, El Salvador · Remote',
        description:
          'Fullstack engineering and systems modernization for enterprise corporate accounts in regional energy and commercial retail sectors, utilizing software design patterns and decoupled architectures.',
        achievements: [
          'Regional Energy Sector: Automation and digitization of manual operational workflows on web platform with .NET ASP and Oracle DB using Dapper',
          'Commercial / Retail Sector: Cloud-oriented solution in .NET and complete database migration from SQL Server to PostgreSQL using Entity Framework Core',
          'ETL Pipelines: Design and implementation of ETL pipelines to migrate and consolidate legacy databases into modern cloud platforms',
          'Frontend and performance optimization with JavaScript, Ajax, jQuery, and Bootstrap under Clean Code standards',
        ],
        tech: ['.NET', 'C#', 'PostgreSQL', 'SQL Server', 'Oracle DB', 'Entity Framework Core', 'Dapper', 'ETL', 'JavaScript', 'jQuery', 'Bootstrap'],
      },
      {
        id: 3,
        category: 'corporate',
        company: 'Banco Integral S.A.',
        role: 'Applications Specialist',
        period: 'Feb 2022 – Apr 2026 (4 years and 2 months)',
        location: 'San Salvador, El Salvador',
        description:
          'Initial entry via IT outsourcing consultancy (BSCI) followed by direct onboarding in April 2022 to the core IT staff as Applications Specialist, engineering and maintaining high-criticality banking services.',
        achievements: [
          'Design and consumption of REST APIs for web platforms and mobile banking',
          'Implementation of solutions for electronic fund transfers (Transfers 365)',
          'Integration with external systems via OnBase middleware',
          'SQL query optimization to boost performance in core critical batch and online processes',
          'Development and maintenance of core banking systems using GeneXus (8, 15, and 18)',
          'Active participation in agile sprints under Scrum methodology',
        ],
        tech: ['C#', '.NET Core', 'JavaScript', 'TypeScript', 'SQL Server', 'PostgreSQL', 'Entity Framework', 'Dapper', 'GeneXus'],
      },
      {
        id: 4,
        category: 'corporate',
        company: 'Creativa Consultores',
        role: 'Intern .NET & Oracle Developer',
        period: '2021 (5 months)',
        location: 'San Salvador, El Salvador',
        description:
          'Development of internal modules for employee request management and support for financial/pension systems using ASP.NET MVC, PostgreSQL, and Oracle Forms & Reports i9.',
        achievements: [
          'Web application development using ASP.NET MVC, Bootstrap, Entity Framework, and Rotativa reporting',
          'Module and report development in Oracle Forms and Reports i9 for financial systems',
        ],
        tech: ['ASP.NET MVC', 'C#', 'PostgreSQL', 'Oracle Forms', 'Oracle Reports', 'Bootstrap'],
      },
    ],
    projects: [
      {
        id: 1,
        title: 'NexaFactura',
        tagline: 'Electronic Invoicing (DTE) Platform for El Salvador',
        description:
          'SaaS platform and API for issuing, digital signing (JWS/RSA), validating, and transmitting Electronic Tax Documents (DTE) to the Ministry of Finance of El Salvador (DGII). Up to 72h offline contingency handling, PDF generation with QR code, and automated email dispatch.',
        tech: ['.NET 10', 'ASP.NET Core Web API', 'EF Core', 'PostgreSQL', 'Clean Architecture', 'Docker', 'Swagger'],
        highlights: [
          'Issuance of 5 official DTE document types validated against official DGII JSON schemas',
          'Electronic signing using .p12 certificates (JWS) and transmission with automated contingency handling',
          'Automated generation of graphical representation in PDF with QR code and email notification',
          'Decoupled architecture with zero commercial third-party dependencies, ready for ERP and clinical integrations',
        ],
        github: 'https://github.com/jonalex97/NexaFactura',
        status: 'live',
        featured: true,
      },
      {
        id: 2,
        title: 'NexaSuite',
        tagline: 'Multi-tenant SaaS ERP',
        description:
          'Cloud multi-tenant ERP for SMEs: role and permission-based access control, invoicing with payment tracking, inventory with kardex, quotes, reporting, and automated notifications. Bilingual English / Spanish interface.',
        tech: ['.NET 10', 'Clean Architecture', 'CQRS', 'PostgreSQL', 'Next.js', 'React', 'MUI', 'Docker'],
        highlights: [
          'Backend built with Clean Architecture + CQRS/MediatR, multi-tenancy, and granular RBAC',
          'Next.js frontend powered by a configuration-driven CRUD engine (one module = one object)',
          '35 test suites, 0 warnings, CI/CD with GitHub Actions, and bilingual ES/EN UI',
        ],
        demo: 'https://nexasuite.vercel.app',
        github: 'https://github.com/jonalex97/nexasuite',
        credentials: { email: 'demo@nexasuite.io', password: 'Demo1234$' },
        status: 'demo',
        featured: true,
      },
    ],
    apis: [
      {
        id: 1,
        title: 'NexaSuite API',
        description:
          'REST API of NexaSuite ERP: ~55 versioned endpoints, JWT authentication with refresh, permission authorization, and uniform response (ApiResponse). Documented with Swagger/OpenAPI.',
        endpoints: [
          'POST /api/v1/auth/login',
          'GET  /api/v1/invoices',
          'POST /api/v1/invoices/{id}/issue',
          'POST /api/v1/payments',
        ],
        docs: 'https://nexasuite-api-p263.onrender.com/swagger',
        status: 'live',
      },
      {
        id: 2,
        title: 'NexaFactura DTE API',
        description:
          'REST API for issuing and transmitting Electronic Tax Documents to the Ministry of Finance of El Salvador. Endpoints for Invoices, Tax Credits, contingency, and cancellations with JWS signature.',
        endpoints: [
          'POST /api/v1/dte/factura',
          'POST /api/v1/dte/credito-fiscal',
          'POST /api/v1/dte/contingencia',
          'POST /api/v1/dte/anulacion',
        ],
        status: 'live',
      },
    ],
    skills: {
      frontend: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap', 'Razor Pages'],
      backend: ['C#', '.NET 6/7/8/10', 'ASP.NET Core', 'ASP.NET MVC', 'REST APIs', 'Clean Architecture', 'SOLID', 'Design Patterns', 'xUnit'],
      databases: ['SQL Server', 'PostgreSQL', 'Oracle Database', 'MySQL', 'Entity Framework Core', 'Dapper', 'ETL / Migrations'],
      devops: ['Azure DevOps (CI/CD)', 'Docker', 'Git', 'GeneXus'],
    },
    skillsLabels: {
      frontend: 'Frontend',
      backend: 'Backend & Architecture',
      databases: 'Databases',
      devops: 'DevOps & Tools',
    },
    education: [
      {
        id: 1,
        institution: 'Universidad Pedagógica de El Salvador',
        degree: 'Bachelor in Computer Management (Lic. en Gerencia Informática)',
        period: '2019 – 2024',
        location: 'San Salvador, El Salvador',
      },
    ],
    languages: [
      { lang: 'Spanish', level: 'Native' },
      { lang: 'English', level: 'Intermediate (B1)' },
    ],
    softSkills: [
      'Analytical thinking and results-driven mindset',
      'Teamwork and assertive communication',
      'Proactivity and continuous process improvement',
      'Strong accountability and professional commitment',
      'Fast adaptability to evolving tech environments',
    ],
    ui: {
      heroGreeting: "Hi, I'm",
      viewProjects: 'View Projects',
      contact: 'Contact Me',
      aboutTitle: 'About Me',
      skillsTitle: 'Tech Stack & Skills',
      experienceTitle: 'Experience',
      consultingBadge: 'Professional Services / Freelance',
      consultingTitle: 'Independent Consulting & Projects',
      consultingSubtitle: 'Custom software development, process modernization, and integrations for enterprise clients',
      corporateBadge: 'Corporate Career',
      corporateTitle: 'Corporate Experience',
      corporateSubtitle: 'In-house full-time software engineering in financial institutions and consultancy',
      projectsTitle: 'Projects',
      apisTitle: 'APIs Developed',
      contactTitle: 'Contact',
      contactSubtitle: 'Have a project in mind? Let’s talk!',
      featuredBadge: 'Featured Project',
      liveDemo: 'Live Demo',
      tryDemo: 'Try Demo →',
      demoCredentials: 'Demo Credentials',
      demoCredNote: 'limited role · resets daily',
      emailLabel: 'Email',
      passwordLabel: 'Password',
      copy: 'Copy',
      copied: '✓ Copied',
      docsBtn: 'Documentation',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Your Email',
      msgPlaceholder: 'Your Message',
      sendEmailBtn: 'Send via Email',
      sendingBtn: 'Sending…',
      sendWhatsAppBtn: 'Send via WhatsApp',
      msgSuccess: 'Message sent! I will reply to you soon.',
      msgError: 'Please fill in all fields.',
      msgErrorEmail: 'The email address seems invalid, please verify.',
      msgCooldown: 'You recently sent a message; please wait a moment or message me on WhatsApp.',
      msgFailed: 'Could not send the email. Please try WhatsApp or reach out directly.',
      footerMadeWith: 'Built with React + Vite',
      footerVisits: 'visits',
      languagesTitle: 'Languages',
      softSkillsTitle: 'Soft Skills',
      switchThemeDark: 'Switch to light mode',
      switchThemeLight: 'Switch to dark mode',
    },
  },
};

// ─── EXPORTACIONES POR DEFECTO PARA RETROCOMPATIBILIDAD ───────────────────────
export const PERSONAL_INFO = CONTENT.es.personalInfo;
export const EXPERIENCE = CONTENT.es.experience;
export const PROJECTS = CONTENT.es.projects;
export const APIS = CONTENT.es.apis;
export const SKILLS = CONTENT.es.skills;
export const EDUCATION = CONTENT.es.education;
export const LANGUAGES = CONTENT.es.languages;
export const SOFT_SKILLS = CONTENT.es.softSkills;
export const NAV_LINKS = CONTENT.es.nav;
