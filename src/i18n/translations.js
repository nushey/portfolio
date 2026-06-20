// Single source of truth for every visible string, keyed by language.
// `es` is verbatim from intake.md (confirmed copy); `en` is a faithful translation.
// Structural project data (urls, tech lists, ids) lives in the `projects` array, not here.

export const translations = {
  es: {
    nav: {
      inicio: 'Inicio',
      bio: 'Bio',
      experiencia: 'Experiencia',
      proyectos: 'Proyectos',
      agentsMdGenerator: 'agents-md-generator',
      contextManager: 'context-manager',
      sddFlow: 'sdd-flow',
      contacto: 'Contacto',
    },
    languageToggle: {
      ariaLabel: 'Cambiar idioma',
    },
    menu: {
      primary: 'Navegación principal',
      open: 'Abrir menú',
      close: 'Cerrar menú',
    },
    sectionNav: {
      label: 'Navegación por secciones',
      previous: 'Sección anterior',
      next: 'Sección siguiente',
    },
    hero: {
      title: 'Nahuel Zeballos',
      subtitle: 'Fullstack Developer & AI Practitioner',
      tagline:
        'Desarrollando infraestructura, servidores MCP y herramientas avanzadas de contexto para la era de la Inteligencia Artificial Agéntica.',
    },
    bio: {
      paragraphs: [
        [
          'Estudiante de Ingeniería en Sistemas con experiencia práctica en desarrollo full-stack, diseño de APIs, ',
          { em: 'testing unitario' },
          ' e ',
          { em: 'integración continua' },
          '. Manejo C#/.NET, EF Core, frameworks modernos de JavaScript, Docker, Vercel y ',
          { em: 'arquitecturas orientadas a eventos' },
          ' con Kafka.',
        ],
        [
          'Trabajo en equipos Scrum aplicando principios de arquitectura (',
          { em: 'SOLID, GRASP' },
          '), con pensamiento analítico y resolución de problemas mediante ',
          { em: 'patrones de diseño' },
          '. Mi foco reciente está en fundamentos de Machine Learning e ',
          { em: 'IA Generativa (GenAI)' },
          '.',
        ],
      ],
      stackLabel: 'Stack',
      stack: ['C#', '.NET', 'EF Core', 'React', 'Node.js', 'Electron', 'Python', 'Kafka', 'Docker', 'PostgreSQL', 'SQL', 'MCP', 'AI Agents'],
    },
    experience: {
      kicker: 'Trayectoria',
      title: 'Experiencia',
      intro:
        'Trayectoria profesional entre ingeniería de software a gran escala, desarrollo freelance y docencia universitaria.',
      zureo: {
        role: 'Desarrollador Fullstack Junior',
        bullets: [
          'Desarrollo nuevas soluciones y features e implemento fixes sobre un proyecto de gran escala que exige alto nivel de debugging e ingeniería inversa.',
          'Construyo soluciones backend con .NET Framework y frontends con AngularJS.',
          'Manejo APIs, escribo y optimizo consultas SQL, y pruebo endpoints con Postman.',
          'Aplico IA agéntica integrada con herramientas propias para acelerar el desarrollo del día a día.',
        ],
      },
      ukg: {
        role: 'Pasantía de Ingeniería de Software',
        bullets: [
          'Contribuí al desarrollo backend y full-stack en un entorno de ingeniería a gran escala.',
          'Diseñé y extendí micro-servicios orientados a eventos.',
          'Construí métricas de consumer-lag de Kafka, integradas con Prometheus y Grafana; habilité el escalado horizontal con Kubernetes.',
          'Trabajé con pipelines de CI/CD, integraciones de servicios, desarrollo de APIs y pruebas automatizadas.',
          'Practiqué Scrum (dailies, planning, reviews, retros) y colaboré con ingenieros senior mediante code review y estándares de calidad.',
        ],
      },
      maquilift: {
        role: 'Ingeniero de Software Freelance',
        bullets: [
          'Construí un ERP de escritorio a medida en Electron/React que reemplazó un flujo legacy en Excel, resolviendo inconsistencias y previniendo pérdida crítica de datos.',
          'Diseñé un backend centralizado en la nube con Node.js y Supabase (PostgreSQL), asegurando persistencia e integridad de los datos.',
          'Implementé un pipeline de distribución con CI/CD y actualizaciones OTA vía GitHub Releases para que el equipo de operaciones siempre use la última versión.',
        ],
      },
      ort: {
        role: 'Profesor Adjunto de Diseño de Aplicaciones 1',
        bullets: [
          'Dicto el currículo práctico: .NET, C#, diseño orientado a objetos, clean code, SOLID, TDD, patrones de diseño, inyección de dependencias, GRASP y principios de arquitectura.',
          'Preparo y dicto ejemplos, guío laboratorios, evalúo entregas y doy feedback técnico y conceptual.',
          'Guío a los estudiantes en flujos de trabajo modernos: GitFlow, EF Core, Blazor, arquitectura en capas, refactoring y TDD.',
        ],
      },
    },
    projectsSection: {
      kicker: 'Proyectos',
      title: 'Lo que construyo',
      intro:
        'Infraestructura, servidores MCP y herramientas de contexto para agentes de IA. Tocá un proyecto para saltar a su detalle.',
      quickNavLabel: 'Navegación de proyectos',
    },
    project: {
      solutionLabel: 'Solución',
      problemLabel: 'Problema',
      howLabel: 'Cómo funciona',
    },
    projects: {
      agentsMdGenerator: {
        solution: 'Servidor MCP para automatizar archivos de contexto en Markdown (AGENTS.md).',
        problem: 'Mantener el contexto para agentes de IA manualmente es lento y propenso a desactualizarse.',
        how: 'Escaneo local automático del AST con Tree-sitter, empaquetado eficiente de tokens e integración nativa con clientes MCP (Claude Desktop).',
      },
      contextManager: {
        solution: 'Servidor MCP para la administración dinámica de la memoria de contexto en LLMs y la navegación de código.',
        problem: 'El historial largo acumula ruido, degrada las respuestas y dispara el costo de tokens.',
        how: 'Análisis de C# con Roslyn, grafo de conocimiento dirigido de la solución y extracción de tipos y dependencias para que los agentes naveguen antes de leer.',
      },
      sddFlow: {
        solution: 'Paquete modular de skills y subagentes para Desarrollo Dirigido por Especificación (SDD) por agentes autónomos.',
        problem: 'Los LLMs carecen de flujos deterministas secuenciales, provocando alucinaciones en tareas lógicas complejas.',
        how: 'Fases atómicas (init → diseño y tareas → implementar → verificar), handoffs estrictos basados en archivos, cuatro subagentes especializados y AGENTS.md como ley.',
      },
    },
    contact: {
      heading: 'Contacto',
      intro: '¿Hablamos? Encontrame en estos canales.',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
      emailLabel: 'Email',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      builtWith: 'Hecho con React, Vite y Tailwind CSS.',
    },
  },
  en: {
    nav: {
      inicio: 'Home',
      bio: 'Bio',
      experiencia: 'Experience',
      proyectos: 'Projects',
      agentsMdGenerator: 'agents-md-generator',
      contextManager: 'context-manager',
      sddFlow: 'sdd-flow',
      contacto: 'Contact',
    },
    languageToggle: {
      ariaLabel: 'Switch language',
    },
    menu: {
      primary: 'Main navigation',
      open: 'Open menu',
      close: 'Close menu',
    },
    sectionNav: {
      label: 'Section navigation',
      previous: 'Previous section',
      next: 'Next section',
    },
    hero: {
      title: 'Nahuel Zeballos',
      subtitle: 'Fullstack Developer & AI Practitioner',
      tagline:
        'Building infrastructure, MCP servers and advanced context tooling for the era of Agentic Artificial Intelligence.',
    },
    bio: {
      paragraphs: [
        [
          'Systems Engineering student with hands-on experience in full-stack development, API design, ',
          { em: 'unit testing' },
          ' and ',
          { em: 'continuous integration' },
          '. Skilled in C#/.NET, EF Core, modern JavaScript frameworks, Docker, Vercel and ',
          { em: 'event-driven architectures' },
          ' with Kafka.',
        ],
        [
          'I work in Scrum teams applying architectural principles (',
          { em: 'SOLID, GRASP' },
          ') with strong analytical thinking and problem-solving through ',
          { em: 'design patterns' },
          '. My recent focus is on Machine Learning and ',
          { em: 'Generative AI (GenAI)' },
          ' fundamentals.',
        ],
      ],
      stackLabel: 'Stack',
      stack: ['C#', '.NET', 'EF Core', 'React', 'Node.js', 'Electron', 'Python', 'Kafka', 'Docker', 'PostgreSQL', 'SQL', 'MCP', 'AI Agents'],
    },
    experience: {
      kicker: 'Career',
      title: 'Experience',
      intro:
        'A professional journey spanning large-scale software engineering, freelance development and university teaching.',
      zureo: {
        role: 'Junior Fullstack Developer',
        bullets: [
          'Develop new solutions and features and ship fixes across a large-scale project that demands strong debugging and reverse-engineering skills.',
          'Build backend solutions with .NET Framework and AngularJS frontends.',
          'Manage APIs, write and optimize SQL queries, and test endpoints with Postman.',
          'Apply agentic AI integrated with my own custom tooling to speed up day-to-day development.',
        ],
      },
      ukg: {
        role: 'Software Engineering Internship',
        bullets: [
          'Contributed to backend and full-stack development in a large-scale engineering environment.',
          'Designed and extended event-driven micro-services.',
          'Built Kafka consumer-lag metrics, integrated with Prometheus and Grafana; enabled horizontal scaling with Kubernetes.',
          'Worked with CI/CD pipelines, service integrations, API development and automated testing.',
          'Practiced Scrum (stand-ups, planning, reviews, retros) and collaborated with senior engineers through code review and quality standards.',
        ],
      },
      maquilift: {
        role: 'Freelance Software Engineer',
        bullets: [
          'Built a custom Electron/React desktop ERP that replaced a legacy Excel workflow, resolving data inconsistencies and preventing critical data loss.',
          'Architected a centralized cloud backend with Node.js and Supabase (PostgreSQL), ensuring data persistence and integrity.',
          'Engineered a distribution pipeline with CI/CD and OTA updates via GitHub Releases so the operations team always runs the latest version.',
        ],
      },
      ort: {
        role: 'Adjunct Professor of Applications Design 1',
        bullets: [
          'I teach the practical curriculum: .NET, C#, object-oriented design, clean code, SOLID, TDD, design patterns, dependency injection, GRASP and architecture principles.',
          'I prepare and deliver examples, guide labs, evaluate assignments and provide technical and conceptual feedback.',
          'I lead students through modern workflows: GitFlow, EF Core, Blazor, layered architecture, refactoring and TDD.',
        ],
      },
    },
    projectsSection: {
      kicker: 'Projects',
      title: 'What I build',
      intro:
        'Infrastructure, MCP servers and context tooling for AI agents. Tap a project to jump to its details.',
      quickNavLabel: 'Projects navigation',
    },
    project: {
      solutionLabel: 'Solution',
      problemLabel: 'Problem',
      howLabel: 'How it works',
    },
    projects: {
      agentsMdGenerator: {
        solution: 'MCP server to automate Markdown context files (AGENTS.md).',
        problem: 'Maintaining AI-agent context manually is slow and quickly goes stale.',
        how: 'Automatic local Tree-sitter AST scan, token-efficient packaging and native MCP client integration (Claude Desktop).',
      },
      contextManager: {
        solution: 'MCP server for dynamic management of LLM context memory and code navigation.',
        problem: 'Long history accumulates noise, degrades answers and raises token cost.',
        how: 'Roslyn-based C# analysis, a directed knowledge graph of the solution, and type and dependency extraction so agents navigate before reading.',
      },
      sddFlow: {
        solution: 'Modular skill package and subagents for Spec-Driven Development (SDD) by autonomous agents.',
        problem: 'LLMs lack deterministic sequential flows, causing hallucinations on complex logical tasks.',
        how: 'Atomic phases (init → design and tasks → implement → verify), strict file-based handoffs, four specialized subagents and AGENTS.md as law.',
      },
    },
    contact: {
      heading: 'Contact',
      intro: 'Want to talk? Find me on these channels.',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
      emailLabel: 'Email',
    },
    footer: {
      rights: 'All rights reserved.',
      builtWith: 'Built with React, Vite and Tailwind CSS.',
    },
  },
}

export const DEFAULT_LANGUAGE = 'es'

export const SUPPORTED_LANGUAGES = ['es', 'en']
