import type { HeroContent } from '@/types/content'

export const hero: HeroContent = {
  name: 'Thalles Lana',
  role: 'Engenheiro de software full stack em Muriaé, MG',
  photoAlt: 'Foto de Thalles Fernandes de Lana',
  factsLabel: 'Em números',
  audienceLabel: 'Estou aqui para',
  audienceOptions: {
    recrutar: 'contratar',
    projeto: 'fazer um projeto',
  },
  variants: {
    recrutar: {
      badge: 'Aberto a vagas remotas',
      title: ['Sistemas que', 'aguentam', 'produção.'],
      subtitle:
        'Sou engenheiro de software full stack há mais de 5 anos. Construo back-end, front-end e banco de dados de ponta a ponta, e hoje me aprofundo em IA aplicada, integrando LLMs a produtos com a Claude API e servidores MCP.',
      primaryCta: 'Baixar currículo',
      secondaryCta: 'Ver experiência',
      facts: [
        { value: '5+ anos', label: 'como desenvolvedor, em TI desde 2019' },
        {
          value: 'Angola',
          label: 'sistema hospitalar de alcance nacional em que atuei por 2 anos',
        },
        { value: 'Claude API e MCP', label: '12 cursos da Anthropic em IA aplicada' },
        { value: 'até 40%', label: 'menos tempo de resposta nas aplicações' },
      ],
    },
    projeto: {
      badge: 'Disponível para novos projetos',
      title: ['Pedidos, agenda', 'e cobrança', 'no automático.'],
      subtitle:
        'Faço sistemas web sob medida para pequenos negócios: pedidos, agendamento e cobrança por Pix, boleto e cartão. Entendo como você trabalha, construo o sistema e continuo disponível depois da entrega.',
      primaryCta: 'Conversar pelo WhatsApp',
      secondaryCta: 'Ver projetos',
      facts: [
        { value: '5+ anos', label: 'construindo sistemas web' },
        { value: 'Lanchin', label: 'sistema de delivery com pedidos em tempo real, no ar' },
        { value: 'Mercado Pago e Asaas', label: 'cobrança automática em projetos freelance' },
        { value: 'Suporte', label: 'pelo WhatsApp depois da entrega' },
      ],
    },
  },
}
