import { ProjectStatus, Project } from "@/types/project";
import { SOCIAL_MEDIA } from "./socialMedia";

export const PROJECTS: Project[] = [
  {
    title: 'Lanchin',
    description: 'Sistema completo para venda e delivery de comida, integrado ao WhatsApp.',
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'jQuery', 'FontAwesome', 'Chart.js'],
    status: ProjectStatus.COMPLETED,
    liveUrl: 'https://lanchin.com.br',
  },
  {
    title: 'Portfólio Responsivo',
    description: 'Portfólio moderno e responsivo para mostrar minhas habilidades em desenvolvimento.',
    technologies: ['React', 'TailwindCSS', 'TypeScript', 'React Hook Form', 'React Router'],
    status: ProjectStatus.COMPLETED,
    githubUrl: SOCIAL_MEDIA.github + 'LandingPage',
    liveUrl: 'https://thalles-lana.dev'
  },
  {
    title: 'Travel Costs',
    description: 'O Travel Costs foi criado para tornar o gerenciamento de despesas de viagem uma tarefa fácil e acessível. Com uma interface amigável e direta, nosso aplicativo destaca duas funcionalidades principais: uma calculadora integrada para estimar seus gastos totais e a exibição de custos por litro.',
    technologies: ['Kotlin', 'XML'],
    status: ProjectStatus.COMPLETED,
    liveUrl: SOCIAL_MEDIA.github + 'travel-costs/releases/tag/travel-costs-v1.3',
    githubUrl: SOCIAL_MEDIA.github + 'travel-costs',
  },
  {
    title: 'Bora Nutrir',
    description: 'Projeto feito para captação de leads de nutrição.',
    technologies: ['React', 'Typescript', 'Google Analytics', 'Recaptcha', 'Google Scripts', 'Google Spreed Sheets'],
    status: ProjectStatus.COMPLETED,
    githubUrl: SOCIAL_MEDIA.github + 'bora-nutrir',
    liveUrl: 'https://bora-nutrir.guiajuridica.com.br/'
  },
  {
    title: 'Harmonia Mental',
    description: 'Projeto feito para captação de leads de psicologia.',
    technologies: ['React', 'Typescript', 'Google Analytics', 'Recaptcha', 'Google Scripts', 'Google Spreed Sheets'],
    status: ProjectStatus.COMPLETED,
    githubUrl: SOCIAL_MEDIA.github + 'harmonia-mental',
    liveUrl: 'https://harmonia-mental.guiajuridica.com.br/'
  },
  {
    title: 'Viva Leve',
    description: 'Projeto feito para captação de leads de fisioterapia.',
    technologies: ['React', 'Typescript', 'Google Analytics', 'Recaptcha', 'Google Scripts', 'Google Spreed Sheets'],
    status: ProjectStatus.COMPLETED,
    githubUrl: SOCIAL_MEDIA.github + 'viva-leve',
    liveUrl: 'https://viva-leve.guiajuridica.com.br/'
  },
  {
    title: 'Linktree simples',
    description: 'Um projeto rápido inspirado no linktree.',
    technologies: ['React', 'Typescript'],
    status: ProjectStatus.COMPLETED,
    githubUrl: SOCIAL_MEDIA.github + 'linktree',
    liveUrl: 'https://linktree.guiajuridica.com.br/'
  },
  {
    title: 'Economiza Ai',
    description: 'É uma API REST desenvolvida com NestJS e TypeORM, que tem como objetivo ajudar usuários a controlarem suas finanças pessoais de forma simples, eficiente e segura.',
    status: ProjectStatus.IN_PROGRESS,
    technologies: ['NestJS', 'TypeORM', 'PostgreSQL'],
    githubUrl: SOCIAL_MEDIA.github + 'economiza-ai'
  },
  {
    title: 'Health Leek',
    description: 'Freelancer feito para um TCC que explica os tipos de lesões em pacientes de doenças crônicas e principais orientações e tratamentos.',
    status: ProjectStatus.COMPLETED,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: SOCIAL_MEDIA.github + 'health-leek',
    liveUrl: 'https://health-leek.thalles-lana.dev/'
  },
  {
    title: 'Github Explorer',
    description: 'Um projeto simples que consume a API do Github para mostrar as informações de um usuário.',
    status: ProjectStatus.COMPLETED,
    technologies: ['React', 'Typescript', 'Styled Components'],
    githubUrl: SOCIAL_MEDIA.github + 'github-explorer',
    liveUrl: 'https://github-explorer.thalles-lana.dev/'
  }
];