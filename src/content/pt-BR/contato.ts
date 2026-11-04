import type { ContatoContent } from '@/types/content'

export const contato: ContatoContent = {
  title: 'Tem um projeto? Vamos conversar.',
  description:
    'Conte o que você precisa. Respondo em até 1 dia e passo o orçamento depois de entender o projeto.',
  whatsappCta: 'Conversar pelo WhatsApp',
  whatsappMessage: 'Olá, Thalles! Vim pelo seu site e gostaria de conversar sobre um projeto.',
  recruiter: {
    title: 'Recrutando para o seu time?',
    description:
      'Engenheiro de software full stack sênior, com mais de 5 anos em TypeScript, PHP e Python, do front-end ao banco de dados, e foco em IA aplicada. Disponível para vagas remotas.',
    resume: 'Baixar currículo',
    linkedin: 'LinkedIn',
    emailLabel: 'ou escreva para',
  },
  form: {
    title: 'Enviar mensagem',
    name: 'Nome',
    namePlaceholder: 'Seu nome',
    email: 'E-mail',
    emailPlaceholder: 'voce@email.com',
    phone: 'WhatsApp',
    phonePlaceholder: '(00) 00000-0000',
    optional: 'opcional',
    message: 'Como posso ajudar?',
    messagePlaceholder: 'Descreva brevemente o projeto ou a oportunidade.',
    submit: 'Enviar mensagem',
    sending: 'Enviando...',
    successTitle: 'Mensagem enviada.',
    successText: 'Recebi sua mensagem e retorno em breve.',
    sendAnother: 'Enviar outra mensagem',
    error: 'Não foi possível enviar agora. Tente novamente ou fale comigo pelo WhatsApp.',
  },
}
