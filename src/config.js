// ============================================================
//  ARCHIVO DE CONFIGURACIÓN: edita aquí tus datos personales.
//  Todo el sitio se genera a partir de este archivo.
// ============================================================

export const site = {
  name: 'Misael Pascual Alfonso',
  github: 'https://github.com/Antifax06',

  // ⚠️ COMPLETA ESTOS DOS CAMPOS. Si los dejas vacíos ('') no se muestran.
  linkedin: 'https://www.linkedin.com/in/misael-pascual-alfonso-677278174/?isSelfProfile=true', // ej: 'https://www.linkedin.com/in/tu-perfil'
  email: 'misapascualalfo@gmail.com',    // ej: 'tucorreo@ejemplo.com'
}

// Textos en español (es) e inglés (en)
export const text = {
  es: {
    status: 'Buscando mi primera oportunidad',
    menu: 'Menú',
    illus: 'Ilustración basada en la información del repositorio. No es una captura real.',
    moreTitle: 'Más en GitHub',
    moreText: 'Todos mis repositorios públicos, incluidos los experimentos y proyectos de aprendizaje.',
    interestsTitle: 'En qué me enfoco',
    interestsNote: 'Áreas que me interesan y en las que sigo aprendiendo.',
    featuredTitle: 'Destacados',
    othersTitle: 'Otros proyectos',
    pageTitle: 'Misael Pascual Alfonso · Ingeniero de Software Junior',
    pageDesc: 'Portafolio de Misael Pascual Alfonso, ingeniero de software junior en República Dominicana. Proyectos en Python, JavaScript, React y Next.js, con código en GitHub.',
    skip: 'Saltar al contenido',
    navLabel: 'Principal',
    kindLabel: 'Tipo',
    noDemo: 'Sin demo en línea por ahora',
    nav: { about: 'Sobre mí', skills: 'Habilidades', projects: 'Proyectos', contact: 'Contacto' },
    role: 'Ingeniero de Software',
    hello: 'Hola, soy',
    intro:
      'Ingeniero de software junior en República Dominicana. Construyo aplicaciones web y APIs con Python y JavaScript, y estoy buscando mi primera oportunidad profesional en tecnología.',
    seeProjects: 'Ver proyectos',
    seeGithub: 'Visitar GitHub',
    contactMe: 'Contactarme',
    aboutTitle: 'Sobre mí',
    about: [
      'Soy ingeniero de software junior. Me interesa el desarrollo de software, Python, la inteligencia artificial, la automatización, las APIs y el desarrollo web.',
      'Aprendo construyendo: cada proyecto de mi GitHub me ha servido para practicar algo nuevo, desde un sistema de autenticación completo hasta una tienda web y una aplicación de gestión de empleados.',
      'Busco un equipo donde pueda aportar, seguir aprendiendo y resolver problemas reales.',
    ],
    skillsTitle: 'Habilidades',
    skillsNote: 'Tecnologías que he usado en mis proyectos.',
    projectsTitle: 'Proyectos',
    projectsNote: 'Proyectos reales de mi GitHub. Algunos son de aprendizaje y siguen evolucionando.',
    problem: 'Problema que resuelve',
    snip: { role: 'rol', level: 'nivel', country: 'pais', stack: 'stack', looking: 'buscando', levelV: 'junior', lookingV: 'primera oportunidad' },
    features: 'Funcionalidades',
    stack: 'Tecnologías',
    repoAt: 'Repositorio',
    code: 'Ver código en GitHub',
    demo: 'Ver demo',
    contactTitle: 'Contacto',
    contactText: 'Si tienes una oportunidad o quieres conversar sobre un proyecto, escríbeme.',
    footer: 'Hecho con React y Vite.',
    langLabel: 'Cambiar idioma a inglés',
  },
  en: {
    status: 'Looking for my first opportunity',
    menu: 'Menu',
    illus: 'Illustration based on repository information. Not a real screenshot.',
    moreTitle: 'More on GitHub',
    moreText: 'All my public repositories, including experiments and learning projects.',
    interestsTitle: 'What I focus on',
    interestsNote: 'Areas I am interested in and keep learning.',
    featuredTitle: 'Featured',
    othersTitle: 'Other projects',
    pageTitle: 'Misael Pascual Alfonso · Junior Software Engineer',
    pageDesc: 'Portfolio of Misael Pascual Alfonso, junior software engineer in the Dominican Republic. Projects in Python, JavaScript, React and Next.js, with code on GitHub.',
    skip: 'Skip to content',
    navLabel: 'Main',
    kindLabel: 'Type',
    noDemo: 'No live demo yet',
    nav: { about: 'About', skills: 'Skills', projects: 'Projects', contact: 'Contact' },
    role: 'Software Engineer',
    hello: "Hi, I'm",
    intro:
      "Junior software engineer based in the Dominican Republic. I build web apps and APIs with Python and JavaScript, and I'm looking for my first professional opportunity in tech.",
    seeProjects: 'View projects',
    seeGithub: 'Visit GitHub',
    contactMe: 'Contact me',
    aboutTitle: 'About me',
    about: [
      "I'm a junior software engineer. I'm interested in software development, Python, artificial intelligence, automation, APIs and web development.",
      'I learn by building: each project on my GitHub let me practice something new, from a full authentication system to a web store and an employee management app.',
      "I'm looking for a team where I can contribute, keep learning and solve real problems.",
    ],
    skillsTitle: 'Skills',
    skillsNote: "Technologies I've used in my projects.",
    projectsTitle: 'Projects',
    projectsNote: 'Real projects from my GitHub. Some are learning projects and still evolving.',
    problem: 'Problem it solves',
    snip: { role: 'role', level: 'level', country: 'country', stack: 'stack', looking: 'looking_for', levelV: 'junior', lookingV: 'first opportunity' },
    features: 'Features',
    stack: 'Tech stack',
    repoAt: 'Repository',
    code: 'View code on GitHub',
    demo: 'View demo',
    contactTitle: 'Contact',
    contactText: "If you have an opportunity or want to talk about a project, get in touch.",
    footer: 'Built with React and Vite.',
    langLabel: 'Switch language to Spanish',
  },
}

export const skills = [
  { es: 'Lenguajes', en: 'Languages', items: ['Python', 'JavaScript', 'HTML', 'CSS'] },
  { es: 'Desarrollo web', en: 'Web development', items: ['React', 'Next.js', 'Vite', 'Tailwind CSS'] },
  { es: 'Backend y APIs', en: 'Backend & APIs', items: ['Flask', 'FastAPI', 'Node.js', 'Express', 'JWT'] },
  { es: 'Bases de datos', en: 'Databases', items: ['MySQL', 'MongoDB'] },
  { es: 'Herramientas', en: 'Tools', items: ['Git', 'GitHub', 'Apache'] },
]

// Para añadir una captura: pon la imagen en /public/projects/ y escribe
// image: './projects/nombre.png'. Si lo dejas en null se muestra un bloque con el nombre.
// Para añadir una demo: rellena demo con la URL que funcione. Si es null, no se muestra el botón.
export const projects = [
  {
    name: 'Umbral Auth',
    featured: true,
    visual: 'auth',
    kind: { es: 'Aplicación full-stack', en: 'Full-stack app' },
    repo: 'https://github.com/Antifax06/umbral-auth',
    demo: null,
    image: null,
    stack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    es: {
      description: 'Sistema de autenticación completo con API REST y aplicación web en React.',
      problem: 'Dar a una aplicación un registro e inicio de sesión seguros y un panel protegido.',
      features: [
        'Registro con validaciones y verificación de correo con código de 6 dígitos',
        'Inicio de sesión con JWT y bloqueo temporal tras 5 intentos fallidos',
        'Recuperación de contraseña con enlace de un solo uso',
        'Contraseñas cifradas con bcrypt y límite de peticiones en las rutas de autenticación',
      ],
    },
    en: {
      description: 'Complete authentication system with a REST API and a React web app.',
      problem: 'Give an application secure sign-up and sign-in plus a protected dashboard.',
      features: [
        'Sign-up with validation and email verification with a 6-digit code',
        'JWT login with temporary lockout after 5 failed attempts',
        'Password reset with a single-use link',
        'Passwords hashed with bcrypt and rate limiting on auth routes',
      ],
    },
  },
  {
    name: 'SmartCell',
    featured: true,
    visual: 'store',
    kind: { es: 'Sitio web', en: 'Website' },
    repo: 'https://github.com/Antifax06/smartcell',
    demo: null,
    image: null,
    stack: ['Next.js', 'JavaScript'],
    es: {
      description: 'Sitio web de una tienda de teléfonos móviles, hecho con Next.js.',
      problem: 'Presentar el catálogo de una tienda de celulares en una web moderna y rápida.',
      features: ['Aplicación Next.js con App Router', 'Orientado a una tienda de teléfonos móviles'],
    },
    en: {
      description: 'Website for a cell phone store, built with Next.js.',
      problem: 'Show a mobile phone store catalog on a modern, fast website.',
      features: ['Next.js app using the App Router', 'Web project focused on a phone store'],
    },
  },
  {
    name: 'Employees Management',
    featured: true,
    visual: 'table',
    kind: { es: 'Aplicación Python con base de datos', en: 'Python app with a database' },
    repo: 'https://github.com/Antifax06/Employees-managment',
    demo: null,
    image: null,
    stack: ['Python', 'MySQL', 'Apache'],
    es: {
      description: 'Programa para gestionar los datos de los empleados de una empresa.',
      problem: 'Mantener organizada y consultable la información del personal de una empresa.',
      features: ['Gestión de datos de empleados de una empresa', 'Hecho con Python, Apache y MySQL (según el README del repositorio)'],
    },
    en: {
      description: 'Program to manage a company\u2019s employee data.',
      problem: 'Keep a company\u2019s staff information organized and easy to look up.',
      features: ['Management of a company\u2019s employee data', 'Built with Python, Apache and MySQL (per the repository README)'],
    },
  },
  {
    name: 'Task Manager',
    visual: 'terminal',
    kind: { es: 'Aplicación de consola', en: 'Console app' },
    repo: 'https://github.com/Antifax06/task-manager-python',
    demo: null,
    image: null,
    stack: ['Python', 'JSON'],
    es: {
      description: 'Gestor de tareas por consola con persistencia en archivo JSON.',
      problem: 'Llevar una lista de tareas sin perderlas al cerrar el programa.',
      features: ['Interfaz de consola', 'Código separado en módulos (tareas y almacenamiento)', 'Las tareas se guardan en JSON'],
    },
    en: {
      description: 'Console task manager with JSON file persistence.',
      problem: 'Keep a to-do list that survives closing the program.',
      features: ['Console interface', 'Code split into modules (tasks and storage)', 'Tasks are saved to JSON'],
    },
  },
]

// Intereses (sin afirmar experiencia profesional)
export const interests = [
  { icon: 'code', es: ['Desarrollo de software', 'Me gusta convertir un problema en una aplicación que funcione y se pueda mantener.'], en: ['Software development', 'I like turning a problem into an application that works and can be maintained.'] },
  { icon: 'spark', es: ['Python', 'Mi lenguaje principal para aplicaciones, scripts y automatización.'], en: ['Python', 'My main language for applications, scripts and automation.'] },
  { icon: 'server', es: ['APIs', 'Estoy aprendiendo a diseñar APIs con Flask y FastAPI y a consumirlas desde el frontend.'], en: ['APIs', 'I am learning to design APIs with Flask and FastAPI and consume them from the frontend.'] },
  { icon: 'tool', es: ['Automatización', 'Me interesa automatizar tareas repetitivas para ahorrar tiempo.'], en: ['Automation', 'I am interested in automating repetitive tasks to save time.'] },
  { icon: 'bot', es: ['Inteligencia artificial', 'Un área que quiero explorar más a fondo y aplicar en proyectos propios.'], en: ['Artificial intelligence', 'An area I want to explore further and apply in my own projects.'] },
]
