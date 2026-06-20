// Single source of truth for every visible string, keyed by language.
// `es` is verbatim from intake.md (confirmed copy); `en` is a faithful translation.
// Structural project data (urls, tech lists, ids) lives in the `projects` array, not here.

export const translations = {
  es: {
    nav: {
      inicio: 'Inicio',
      bio: 'Bio',
      experiencia: 'Experiencia',
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
    hero: {
      title: 'Nahuel Zeballos',
      subtitle: 'Junior Fullstack Developer & Docente de Diseño de Aplicaciones',
      tagline:
        'Desarrollando infraestructura, servidores MCP y herramientas avanzadas de contexto para la era de la Inteligencia Artificial Agéntica.',
    },
    bio: {
      profile:
        'Estudiante de Ingeniería en Sistemas en la Universidad ORT (Montevideo), con un promedio de 91 y Beca de Excelencia Académica. Desarrollador full-stack con C#/.NET y EF Core, arquitecturas orientadas a eventos con Kafka y frameworks modernos de JavaScript. Trabajo en equipos Scrum aplicando SOLID/GRASP y patrones de diseño, con foco reciente en fundamentos de Machine Learning e IA Generativa. Mi rol docente en Diseño de Aplicaciones es una garantía de buenas prácticas, rigurosidad y calidad de código.',
      stackLabel: 'Stack',
      stack: ['C#', '.NET', 'EF Core', 'React', 'Node.js', 'Kafka', 'Docker', 'PostgreSQL', 'MCP'],
    },
    experience: {
      kicker: 'Trayectoria',
      title: 'Experiencia',
      intro:
        'Trayectoria profesional entre ingeniería de software a gran escala, desarrollo freelance y docencia universitaria.',
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
    hero: {
      title: 'Nahuel Zeballos',
      subtitle: 'Junior Fullstack Developer & Software Design Lecturer',
      tagline:
        'Building infrastructure, MCP servers and advanced context tooling for the era of Agentic Artificial Intelligence.',
    },
    bio: {
      profile:
        'A Systems Engineering student at ORT University (Montevideo) with a 91 GPA and an Academic Excellence Scholarship. A full-stack developer working with C#/.NET and EF Core, event-driven architectures with Kafka and modern JavaScript frameworks. I work in Scrum teams applying SOLID/GRASP and design patterns, with a recent focus on Machine Learning and Generative AI fundamentals. My teaching role in Software Design (Diseño de Aplicaciones) is a guarantee of best practices, rigor and code quality.',
      stackLabel: 'Stack',
      stack: ['C#', '.NET', 'EF Core', 'React', 'Node.js', 'Kafka', 'Docker', 'PostgreSQL', 'MCP'],
    },
    experience: {
      kicker: 'Career',
      title: 'Experience',
      intro:
        'A professional journey spanning large-scale software engineering, freelance development and university teaching.',
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
