import type { ProcessoContent } from '@/types/content'

export const processo: ProcessoContent = {
  stepLabel: 'Etapa',
  title: 'Como um projeto anda comigo.',
  steps: [
    {
      title: 'Conversa',
      description: 'Entendo o negócio, o problema e o que precisa acontecer.',
    },
    {
      title: 'Requisitos e orçamento',
      description:
        'Levanto os requisitos, desenho as telas principais e passo prazo e valor antes de começar.',
    },
    {
      title: 'Desenvolvimento',
      description: 'Entregas curtas, com você acompanhando cada etapa.',
    },
    {
      title: 'Revisão antes de publicar',
      description: 'Reviso desempenho, segurança e qualidade do código antes de ir para produção.',
      security: true,
    },
    {
      title: 'Entrega e suporte',
      description:
        'Sistema publicado e documentado. Depois da entrega, continuo disponível pelo WhatsApp para dúvidas e ajustes.',
    },
  ],
}
