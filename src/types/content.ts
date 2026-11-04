/** Quem está visitando: decide o hero, o menu e quais seções aparecem. */
export type Audience = 'recrutar' | 'projeto'

/** Seções que podem entrar na página. A ordem de cada público fica em `config.ts`. */
export type SectionId =
  | 'risco'
  | 'como-trabalho'
  | 'servicos'
  | 'processo'
  | 'experiencia'
  | 'stack'
  | 'projetos'
  | 'lab'
  | 'sobre'
  | 'prova'

export interface SectionIntro {
  title: string
  description?: string
}

export interface NavLink {
  label: string
  href: string
}

export interface NavContent {
  ariaLabel: string
  brand: string
  links: Record<Audience, NavLink[]>
  resume: string
  cta: string
  openMenu: string
  closeMenu: string
}

/** Adesivo do mural do hero: um fato real, curto. */
export interface HeroFact {
  value: string
  label: string
}

/** O que muda no hero conforme o público. */
export interface HeroVariant {
  badge: string
  /** Três linhas; a última vira a tarja lime. Cada linha cabe em ~15 caracteres. */
  title: [string, string, string]
  subtitle: string
  primaryCta: string
  secondaryCta: string
  /** Até 4 fatos. O 3º usa texto menor (cabe um nome mais longo). */
  facts: HeroFact[]
}

export interface HeroContent {
  name: string
  role: string
  photoAlt: string
  factsLabel: string
  /** Rótulo do seletor de público, seguido das opções: "Estou aqui para contratar". */
  audienceLabel: string
  audienceOptions: Record<Audience, string>
  variants: Record<Audience, HeroVariant>
}

export interface NumberedItem {
  title: string
  description: string
}

export interface DorContent extends SectionIntro {
  items: NumberedItem[]
}

export interface ComoTrabalhoContent extends SectionIntro {
  paragraphs: string[]
  values: NumberedItem[]
}

export type ServiceId = 'sistemas' | 'pagamentos' | 'manutencao'

export interface Service {
  title: string
  description: string
  bullets: string[]
  highlight: string
}

export interface ServicosContent extends SectionIntro {
  items: Record<ServiceId, Service>
  highlightLabel: string
  cta: string
}

export interface ProcessoContent extends SectionIntro {
  stepLabel: string
  steps: (NumberedItem & { security?: boolean })[]
}

export interface Job {
  role: string
  company: string
  location: string
  period: string
  current?: boolean
  bullets: string[]
  stack: string[]
}

export interface Education {
  title: string
  institution: string
  period: string
  minor?: boolean
}

export interface ExperienciaContent extends SectionIntro {
  currentLabel: string
  jobs: Job[]
  educationTitle: string
  education: Education[]
  languagesTitle: string
  languages: string[]
  downloadResume: string
  linkedin: string
}

export interface StackGroup {
  title: string
  items: string[]
  studying?: boolean
}

export interface StackContent extends SectionIntro {
  studyingLabel: string
  groups: StackGroup[]
}

export type ProjectCategory = 'ia' | 'pagamentos' | 'web' | 'mobile'
export type ProjectStatus = 'done' | 'in-progress'

export interface ProjectLink {
  label: string
  href: string
  kind: 'live' | 'code'
}

export interface Project {
  title: string
  description: string
  categories: ProjectCategory[]
  status: ProjectStatus
  stack: string[]
  links: ProjectLink[]
  featured?: boolean
}

export interface ProjetosContent extends SectionIntro {
  allLabel: string
  filterLabel: string
  featuredLabel: string
  /** Botão que mostra a lista inteira; os primeiros projetos aparecem sempre. */
  showAllLabel: string
  categoryLabels: Record<ProjectCategory, string>
  statusLabels: Record<ProjectStatus, string>
  items: Project[]
}

export interface LabEntry {
  title: string
  date: string
  href: string
  platform: string
}

export interface LabContent extends SectionIntro {
  items: LabEntry[]
}

export interface SobreContent extends SectionIntro {
  photoAlt: string
  paragraphs: string[]
  factsTitle: string
  facts: string[]
}

export interface Testimonial {
  quote: string
  name: string
  role: string
}

export interface ProvaContent extends SectionIntro {
  items: Testimonial[]
}

export interface ContatoContent {
  /** Título e texto do painel de quem tem um projeto. */
  title: string
  description: string
  whatsappCta: string
  whatsappMessage: string
  /** Painel de quem está recrutando. */
  recruiter: {
    title: string
    description: string
    resume: string
    linkedin: string
    emailLabel: string
  }
  form: {
    title: string
    name: string
    namePlaceholder: string
    email: string
    emailPlaceholder: string
    phone: string
    phonePlaceholder: string
    optional: string
    message: string
    messagePlaceholder: string
    submit: string
    sending: string
    successTitle: string
    successText: string
    sendAnother: string
    error: string
  }
}

export interface FooterContent {
  copyright: string
  location: string
  /** Dica do atalho escondido: o "TL" do rodapé toca a intro de novo. */
  replayIntro: string
}

export interface FloatingWhatsAppContent {
  message: string
  ariaLabel: string
}

export interface SiteContent {
  nav: NavContent
  hero: HeroContent
  dor: DorContent
  comoTrabalho: ComoTrabalhoContent
  servicos: ServicosContent
  processo: ProcessoContent
  experiencia: ExperienciaContent
  stack: StackContent
  projetos: ProjetosContent
  lab: LabContent
  sobre: SobreContent
  prova: ProvaContent
  contato: ContatoContent
  footer: FooterContent
  floatingWhatsApp: FloatingWhatsAppContent
  skipLink: string
}
