// Single source of truth for the three project blocks.
// Holds ONLY language-agnostic structural data: the anchor `id`, the i18n key
// under `translations.projects.*` for the Solution/Problem/How copy, the
// non-translatable `tech` stack, and the ordered external `links`.
// Visible copy is resolved by `ProjectSection` through the translations dictionary.

export const projects = [
  {
    id: 'agents-md-generator',
    translationKey: 'agentsMdGenerator',
    tech: ['Python', 'MCP SDK', 'Pydantic', 'Tree-sitter', 'uv'],
    links: [
      { label: 'GitHub', url: 'https://github.com/nushey/agents-md-generator' },
      { label: 'Smithery', url: 'https://smithery.ai/servers/nushey/agents-md-generator' },
      { label: 'LobeHub', url: 'https://lobehub.com/mcp/nushey-agents-md-generator' },
    ],
  },
  {
    id: 'context-manager',
    translationKey: 'contextManager',
    tech: ['C#', '.NET 10', 'Roslyn', 'QuikGraph', 'ModelContextProtocol SDK'],
    links: [{ label: 'GitHub', url: 'https://github.com/nushey/ContextManager' }],
  },
  {
    id: 'sdd-flow',
    translationKey: 'sddFlow',
    tech: ['Claude Code plugin', 'Gemini extension', 'Skills + subagents', 'agents-md MCP'],
    links: [{ label: 'GitHub', url: 'https://github.com/nushey/sdd-flow' }],
  },
]
