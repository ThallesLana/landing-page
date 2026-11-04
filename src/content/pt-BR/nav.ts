import type { NavContent } from '@/types/content'

export const nav: NavContent = {
  ariaLabel: 'Principal',
  brand: 'Thalles Lana',
  links: {
    recrutar: [
      { label: 'Experiência', href: '#experiencia' },
      { label: 'Projetos', href: '#projetos' },
      { label: 'Stack', href: '#stack' },
      { label: 'Sobre', href: '#sobre' },
    ],
    projeto: [
      { label: 'Serviços', href: '#servicos' },
      { label: 'Processo', href: '#processo' },
      { label: 'Projetos', href: '#projetos' },
      { label: 'Sobre', href: '#sobre' },
    ],
  },
  resume: 'Currículo',
  cta: 'Falar comigo',
  openMenu: 'Abrir menu',
  closeMenu: 'Fechar menu',
}
