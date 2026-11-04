import type { StackContent } from '@/types/content'

export const stack: StackContent = {
  title: 'Tecnologias que uso no dia a dia.',
  studyingLabel: 'estudando',
  groups: [
    {
      title: 'Backend',
      items: [
        'TypeScript',
        'Node.js',
        'NestJS',
        'Python',
        'FastAPI',
        'PHP',
        'Laravel',
        'Strapi',
        'APIs REST',
      ],
    },
    { title: 'Frontend', items: ['React', 'Angular', 'Tailwind CSS'] },
    { title: 'Dados', items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
    {
      title: 'Infra e cloud',
      items: ['Docker', 'Docker Compose', 'AWS (EC2, S3)', 'NGINX', 'Git'],
    },
    { title: 'Pagamentos', items: ['Mercado Pago', 'Asaas', 'Webhooks'] },
    {
      title: 'Arquitetura e qualidade',
      items: ['Microsserviços', 'Arquitetura em camadas', 'Clean Code', 'SOLID', 'Tipagem estrita'],
    },
    {
      title: 'IA',
      items: ['Claude API', 'MCP', 'Agentes', 'Claude Code', 'Cursor', 'Codex', 'Gemini'],
    },
    {
      title: 'Segurança',
      items: ['PortSwigger Web Security Academy', 'OWASP Top 10', 'OWASP Top 10 for LLM'],
      studying: true,
    },
  ],
}
