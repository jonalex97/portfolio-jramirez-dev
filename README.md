# Jonathan Ramírez — Portfolio

Portfolio personal desarrollado con **React + Vite**, diseñado para presentar mi experiencia como Fullstack Developer .NET / C#, proyectos realizados y APIs construidas a lo largo de mi carrera.

🌐 **Live:** https://jramirez-dev.github.io/portfolio-jramirez-dev

---

## Sobre el proyecto

Este sitio es mi carta de presentación profesional. Lo construí desde cero aplicando los mismos principios que uso en el trabajo: arquitectura limpia, separación de responsabilidades y código mantenible.

**Secciones:**
- Presentación y perfil profesional
- Habilidades técnicas por categoría
- Experiencia laboral con timeline
- Proyectos destacados
- APIs desarrolladas
- Formulario de contacto

---

## Stack tecnológico

| Categoría | Tecnología |
|---|---|
| UI | React 19 |
| Build tool | Vite 5 |
| Estilos | CSS puro con custom properties |
| Deploy | GitHub Pages |
| CI/CD | GitHub Actions |

---

## Arquitectura

Estructura basada en **Feature Separation**, donde cada sección es independiente y los datos están completamente desacoplados de la UI.

```
src/
├── constants/       # Datos del portfolio (único lugar a editar)
│   └── data.js
├── hooks/           # Lógica reutilizable
│   └── useContactForm.js
├── sections/        # Secciones de la página
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Apis.jsx
│   └── Contact.jsx
├── components/      # Componentes compartidos
│   ├── Navbar.jsx
│   └── Footer.jsx
└── styles/          # CSS por componente
```

**Patrones aplicados:**
- Compound Components en secciones con tarjetas (Projects, Apis, Experience)
- Custom Hook para manejo de formulario con sanitización de inputs
- Lazy Loading + Suspense para carga diferida de secciones
- Design Tokens via CSS Custom Properties para consistencia visual

---

## Desarrollo local

**Requisitos:** Node.js 20.19+ o 22+

```bash
# Clonar el repositorio
git clone https://github.com/jramirez-dev/portfolio-jramirez-dev.git
cd portfolio-jramirez-dev

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## Comandos disponibles

```bash
npm run dev       # Servidor de desarrollo con HMR
npm run build     # Build de producción
npm run preview   # Preview del build local
npm run lint      # Análisis estático de código
```

---

## Actualizar contenido

Todo el contenido del portfolio está centralizado en `src/constants/data.js`. Para agregar un proyecto nuevo:

```js
// src/constants/data.js
export const PROJECTS = [
  {
    id: 2,
    title: 'Nombre del proyecto',
    description: 'Qué hace y qué problema resuelve.',
    tech: ['.NET', 'React', 'SQL Server'],
    github: 'https://github.com/jramirez-dev/mi-repo',
    demo: 'https://mi-demo.com',
    status: 'production', // 'production' | 'development' | 'archived'
    featured: true,
  },
];
```

---

## Deploy

El sitio se despliega automáticamente en **GitHub Pages** al hacer push a `main`, mediante GitHub Actions.

Para hacer deploy manual:

```bash
npm run build
# El contenido de /dist se publica automáticamente via Actions
```

---

## Contacto

**Jonathan Ramírez** · Fullstack Developer .NET / C#  
📧 jhonalexramirez15@gmail.com  
💼 [linkedin.com/in/jonathan-ramirez97](https://linkedin.com/in/jonathan-ramirez97)  
📍 San Salvador, El Salvador
