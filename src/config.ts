import type { Audience, SectionId, ServiceId } from '@/types/content'

export const siteConfig = {
  url: 'https://thalles-lana.dev',
  name: 'Thalles Fernandes de Lana',

  /** Mostra o selo de disponibilidade no hero. */
  openToWork: true,

  email: 'contato@thalles-lana.dev',
  whatsappNumber: '5532999248356',

  links: {
    linkedin: 'https://www.linkedin.com/in/thalles-lana/',
    github: 'https://github.com/ThallesLana/',
    resume: '/curriculo.pdf',
  },

  lead: {
    endpoint: 'https://supabase.thalles-lana.dev/functions/v1/lead-webhook',
    /** Enviado como `source` no payload para identificar de onde veio o lead. */
    source: 'thalles-lana.dev',
  },

  /**
   * Seletor de público. `default` é o que o HTML pré-renderizado mostra e o que
   * aparece para quem chega sem `?para=` e sem escolha salva.
   * Links diretos: `/?para=recrutar` (LinkedIn, currículo) e `/?para=projeto` (propostas).
   */
  audiences: {
    default: 'recrutar' as Audience,
    param: 'para',
    storageKey: 'thalles-lana:para',
    /** Ordem das seções depois do hero. Lab e Depoimentos somem enquanto estiverem vazios. */
    sections: {
      recrutar: ['experiencia', 'como-trabalho', 'projetos', 'stack', 'sobre', 'lab', 'prova'],
      projeto: ['risco', 'servicos', 'processo', 'projetos', 'sobre', 'prova'],
    } satisfies Record<Audience, SectionId[]>,
    /** Seções ocultas temporariamente: somem da página, do menu e dos botões que apontam para elas. */
    hidden: ['projetos'] as SectionId[],
  },

  /** Ordem e visibilidade dos serviços. A copy fica em `src/content/<idioma>/servicos.ts`. */
  services: [
    { id: 'sistemas', enabled: true },
    { id: 'pagamentos', enabled: true },
    { id: 'manutencao', enabled: true },
  ] satisfies { id: ServiceId; enabled: boolean }[],
} as const

export function isSectionVisible(id: SectionId) {
  return !siteConfig.audiences.hidden.includes(id)
}

export function whatsappUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
}
