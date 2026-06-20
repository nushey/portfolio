// Single source of truth for every visible string, keyed by language.
// `es` is verbatim from intake.md (confirmed copy); `en` is a faithful translation.
// Structural project data (urls, tech lists, ids) lives in the `projects` array, not here.

export const translations = {
  es: {
    nav: {
      inicio: 'Inicio',
      bio: 'Bio',
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
        'Perfil enfocado en rendimiento, optimización de flujos de trabajo y arquitectura. Mi rol docente en Diseño de Aplicaciones es una garantía de buenas prácticas, rigurosidad y calidad de código.',
      stackLabel: 'Stack',
      stack: ['C++', 'C#', 'TypeScript', 'JavaScript', '.NET', 'Node.js', 'MCP', 'Zsh'],
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
        'A profile focused on performance, workflow optimization and architecture. My teaching role in Software Design (Diseño de Aplicaciones) is a guarantee of best practices, rigor and code quality.',
      stackLabel: 'Stack',
      stack: ['C++', 'C#', 'TypeScript', 'JavaScript', '.NET', 'Node.js', 'MCP', 'Zsh'],
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
