import type { ComoTrabalhoContent } from '@/types/content'

export const comoTrabalho: ComoTrabalhoContent = {
  title: 'Entendo o problema antes de abrir o editor.',
  paragraphs: [
    'Começo entendendo o problema e quem vai usar o sistema. Depois desenho as telas, modelo o banco de dados e construo o back-end e o front-end até a publicação.',
    'Uso IA no dia a dia, principalmente o Claude Code, para ganhar velocidade, e integro LLMs a produtos com a Claude API e servidores MCP. Tudo o que vai para produção passa pela minha revisão: tipagem, organização do código, desempenho e segurança.',
  ],
  values: [
    {
      title: 'Entender antes de construir',
      description:
        'Análise de requisitos e conversa com quem usa o sistema. A escolha de tecnologia vem depois.',
    },
    {
      title: 'Código que outra pessoa entende',
      description:
        'Tipagem em tudo, Clean Code, SOLID e uma estrutura de pastas clara. O sistema continua fácil de manter.',
    },
    {
      title: 'Desempenho desde o início',
      description:
        'Consultas SQL e NoSQL otimizadas, APIs sem chamadas repetidas e páginas que carregam rápido.',
    },
    {
      title: 'Segurança como padrão',
      description:
        'Senhas e chaves fora do código, permissões mínimas e validação de dados em toda entrada, desde o primeiro dia.',
    },
  ],
}
