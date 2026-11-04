import type { Project, ProjetosContent } from '@/types/content'

const github = (repo: string) => `https://github.com/ThallesLana/${repo}`

const items: Project[] = [
  {
    title: 'Lanchin',
    featured: true,
    description:
      'Sistema de venda e delivery de comida com cardápio interativo, captura de pedidos e integração com WhatsApp.',
    categories: ['web'],
    status: 'done',
    stack: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'Chart.js'],
    links: [{ label: 'Ver site', href: 'https://lanchin.com.br', kind: 'live' }],
  },
  {
    title: 'Pizza Hot',
    description:
      'Site multi-cliente para pizzaria com cardápio interativo, avaliações, contato por WhatsApp e SEO com Schema.org.',
    categories: ['web'],
    status: 'done',
    stack: ['Supabase', 'WhatsApp'],
    links: [{ label: 'Ver site', href: 'https://pizzahot.thalles-lana.dev', kind: 'live' }],
  },
  {
    title: 'Barbearia do Moreira',
    description:
      'Site com catálogo de serviços, horários, avaliações, mapa do Google e contato flutuante.',
    categories: ['web'],
    status: 'done',
    stack: ['Supabase', 'Google Maps'],
    links: [
      { label: 'Ver site', href: 'https://barbeariadomoreira.thalles-lana.dev', kind: 'live' },
    ],
  },
  {
    title: 'Gabriel Silva ADV',
    description:
      'Site para advogado com feature flags por cliente, especialidades jurídicas, avaliações e SEO com Schema.org.',
    categories: ['web'],
    status: 'done',
    stack: ['Supabase', 'Feature flags'],
    links: [
      { label: 'Ver site', href: 'https://gabriel-silva-adv.thalles-lana.dev', kind: 'live' },
    ],
  },
  {
    title: 'Todo Uai',
    featured: true,
    description:
      'Produto completo de lista de tarefas: API REST com OAuth2, app web em React e landing page.',
    categories: ['web'],
    status: 'done',
    stack: ['Node.js', 'Express', 'MongoDB', 'OAuth2', 'React', 'TypeScript'],
    links: [
      { label: 'App', href: 'https://app-todo-uai.thalles-lana.dev/', kind: 'live' },
      { label: 'API', href: 'https://api-todo-uai.thalles-lana.dev/', kind: 'live' },
      { label: 'Landing', href: 'https://todo-uai.thalles-lana.dev/', kind: 'live' },
      { label: 'Código da API', href: github('api-todo-uai'), kind: 'code' },
      { label: 'Código do app', href: github('app-todo-uai'), kind: 'code' },
    ],
  },
  {
    title: 'Economiza Aí',
    description:
      'API REST para controle de finanças pessoais, com autenticação, categorização de gastos e relatórios.',
    categories: ['web'],
    status: 'in-progress',
    stack: ['NestJS', 'TypeORM', 'PostgreSQL'],
    links: [
      { label: 'Ver projeto', href: 'https://economiza-ai.thalles-lana.dev/', kind: 'live' },
      { label: 'Código', href: github('economiza-ai'), kind: 'code' },
    ],
  },
  {
    title: 'Landing ADV',
    description:
      'Landing pages para escritórios de advocacia, com foco em conversão e captação de clientes.',
    categories: ['web'],
    status: 'done',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    links: [
      { label: 'Ver site', href: 'https://lp-advocacia.thalles-lana.dev/', kind: 'live' },
      { label: 'Código', href: github('landing-adv'), kind: 'code' },
    ],
  },
  {
    title: 'Bora Nutrir',
    description:
      'Página de captação de leads para nutrição, com reCAPTCHA, Google Analytics e envio automático para Google Sheets.',
    categories: ['web'],
    status: 'done',
    stack: ['React', 'TypeScript', 'Google Apps Script', 'reCAPTCHA'],
    links: [
      { label: 'Ver site', href: 'https://bora-nutrir.guiajuridica.com.br/', kind: 'live' },
      { label: 'Código', href: github('bora-nutrir'), kind: 'code' },
    ],
  },
  {
    title: 'Harmonia Mental',
    description:
      'Página de captação de leads para psicologia, com formulário de qualificação, reCAPTCHA e envio para Google Sheets.',
    categories: ['web'],
    status: 'done',
    stack: ['React', 'TypeScript', 'Google Apps Script', 'reCAPTCHA'],
    links: [
      { label: 'Ver site', href: 'https://harmonia-mental.guiajuridica.com.br/', kind: 'live' },
      { label: 'Código', href: github('harmonia-mental'), kind: 'code' },
    ],
  },
  {
    title: 'Viva Leve',
    description:
      'Página de captação de leads para fisioterapia, com automação via Google Apps Script e qualificação de contatos.',
    categories: ['web'],
    status: 'done',
    stack: ['React', 'TypeScript', 'Google Apps Script', 'reCAPTCHA'],
    links: [
      { label: 'Ver site', href: 'https://viva-leve.guiajuridica.com.br/', kind: 'live' },
      { label: 'Código', href: github('viva-leve'), kind: 'code' },
    ],
  },
  {
    title: 'Health Leek',
    description:
      'Site educativo feito sob encomenda para um TCC: tipos de lesão em pacientes com doenças crônicas, orientações e tratamentos.',
    categories: ['web'],
    status: 'done',
    stack: ['HTML', 'CSS', 'JavaScript'],
    links: [
      { label: 'Ver site', href: 'https://healthleek.thalles-lana.dev/', kind: 'live' },
      { label: 'Código', href: github('health-leek'), kind: 'code' },
    ],
  },
  {
    title: 'Travel Costs',
    description:
      'App Android para calcular e acompanhar despesas de viagem, com calculadora integrada e custo por litro.',
    categories: ['mobile'],
    status: 'done',
    stack: ['Kotlin', 'Android'],
    links: [
      {
        label: 'Release',
        href: github('travel-costs/releases/tag/travel-costs-v1.3'),
        kind: 'live',
      },
      { label: 'Código', href: github('travel-costs'), kind: 'code' },
    ],
  },
  {
    title: 'Github Explorer',
    description: 'Consome a API do GitHub para buscar e exibir as informações de um usuário.',
    categories: ['web'],
    status: 'done',
    stack: ['React', 'TypeScript', 'Styled Components'],
    links: [
      { label: 'Ver site', href: 'https://github-explorer.thalles-lana.dev/', kind: 'live' },
      { label: 'Código', href: github('github-explorer'), kind: 'code' },
    ],
  },
]

export const projetos: ProjetosContent = {
  title: 'Projetos que desenvolvi.',
  allLabel: 'Todos',
  filterLabel: 'Filtrar projetos por categoria',
  featuredLabel: 'Destaque',
  showAllLabel: 'Mostrar todos os projetos',
  categoryLabels: {
    ia: 'IA',
    pagamentos: 'Pagamentos',
    web: 'Web',
    mobile: 'Mobile',
  },
  statusLabels: {
    done: 'Concluído',
    'in-progress': 'Em andamento',
  },
  items,
}
