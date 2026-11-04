import type { SiteContent } from '@/types/content'
import { comoTrabalho } from './como-trabalho'
import { contato } from './contato'
import { dor } from './dor'
import { experiencia } from './experiencia'
import { hero } from './hero'
import { lab } from './lab'
import { floatingWhatsApp, footer, skipLink } from './misc'
import { nav } from './nav'
import { processo } from './processo'
import { projetos } from './projetos'
import { prova } from './prova'
import { servicos } from './servicos'
import { sobre } from './sobre'
import { stack } from './stack'

export const ptBR: SiteContent = {
  nav,
  hero,
  dor,
  comoTrabalho,
  servicos,
  processo,
  experiencia,
  stack,
  projetos,
  lab,
  sobre,
  prova,
  contato,
  footer,
  floatingWhatsApp,
  skipLink,
}
