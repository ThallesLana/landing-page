import type { ServicosContent } from '@/types/content'

export const servicos: ServicosContent = {
  title: 'Sistemas, pagamentos e manutenção.',
  description:
    'Atendo pequenos negócios e empresas de tecnologia. O orçamento sai depois de uma conversa para entender o que você precisa.',
  highlightLabel: 'Diferencial',
  cta: 'Conversar sobre um projeto',
  items: {
    sistemas: {
      title: 'Sistemas web sob medida',
      description:
        'Painéis administrativos, agendamento, pedidos e cadastros, integrados às ferramentas que o negócio já usa.',
      bullets: [
        'Análise de requisitos e desenho das telas',
        'Modelagem do banco de dados',
        'Back-end, front-end e publicação',
      ],
      highlight: 'Entrego documentado, para o sistema não depender só de mim.',
    },
    pagamentos: {
      title: 'Integração de pagamentos',
      description:
        'Cobranças avulsas e recorrentes, Pix, boleto e cartão integrados ao seu sistema, com confirmação automática do pagamento.',
      bullets: [
        'Cobrança recorrente e avulsa',
        'Confirmação automática e verificada do pagamento',
        'Tratamento de falhas e reenvios',
      ],
      highlight: 'Já integrei Mercado Pago e Asaas em projetos freelance que estão em produção.',
    },
    manutencao: {
      title: 'Melhoria e manutenção',
      description:
        'Para sistemas que ficaram lentos ou difíceis de mexer: otimizo, refatoro e migro código legado para uma base mais organizada.',
      bullets: [
        'Páginas e APIs mais rápidas',
        'Consultas SQL e NoSQL otimizadas',
        'Migração de sistema legado',
      ],
      highlight: 'Já migrei um sistema hospitalar de alcance nacional para uma nova arquitetura.',
    },
  },
}
