import type { ComponentType } from 'preact'
import { useEffect, useMemo, useState } from 'preact/hooks'
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp'
import { Footer } from '@/components/layout/Footer'
import { Intro } from '@/components/layout/Intro'
import { Navbar } from '@/components/layout/Navbar'
import { ComoTrabalho } from '@/components/sections/ComoTrabalho'
import { Contato } from '@/components/sections/Contato'
import { Dor } from '@/components/sections/Dor'
import { Experiencia } from '@/components/sections/Experiencia'
import { Hero } from '@/components/sections/Hero'
import { Lab } from '@/components/sections/Lab'
import { Processo } from '@/components/sections/Processo'
import { Projetos } from '@/components/sections/Projetos'
import { Prova } from '@/components/sections/Prova'
import { Servicos } from '@/components/sections/Servicos'
import { Sobre } from '@/components/sections/Sobre'
import { Stack } from '@/components/sections/Stack'
import type { Tone } from '@/components/ui/Section'
import { isSectionVisible, siteConfig } from '@/config'
import { content } from '@/content'
import { AudienceContext, persistAudience, readStoredAudience } from '@/lib/audience'
import type { Audience, SectionId } from '@/types/content'

const SECTIONS: Record<SectionId, ComponentType<{ tone: Tone }>> = {
  risco: Dor,
  'como-trabalho': ComoTrabalho,
  servicos: Servicos,
  processo: Processo,
  experiencia: Experiencia,
  stack: Stack,
  projetos: Projetos,
  lab: Lab,
  sobre: Sobre,
  prova: Prova,
}

// Seções que somem enquanto não têm conteúdo (não entram na alternância de fundo).
const isEmpty: Partial<Record<SectionId, boolean>> = {
  lab: content.lab.items.length === 0,
  prova: content.prova.items.length === 0,
}

export function App({
  initialAudience = siteConfig.audiences.default,
}: {
  initialAudience?: Audience
}) {
  const [audience, setAudienceState] = useState<Audience>(initialAudience)

  // O HTML pré-renderizado vem no público padrão; o link ou a última escolha ajustam depois.
  useEffect(() => {
    const stored = readStoredAudience()
    if (stored) setAudienceState(stored)
  }, [])

  const state = useMemo(
    () => ({
      audience,
      setAudience: (next: Audience) => {
        setAudienceState(next)
        persistAudience(next)
      },
    }),
    [audience],
  )

  const order = siteConfig.audiences.sections[audience].filter(
    (id) => !isEmpty[id] && isSectionVisible(id),
  )

  return (
    <AudienceContext.Provider value={state}>
      <Intro />
      <a
        href="#conteudo"
        class="sr-only z-[60] rounded-md bg-accent px-4 py-2 font-semibold text-on-accent focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        {content.skipLink}
      </a>
      <Navbar />
      <main id="conteudo">
        <Hero />
        {/* Fundos alternados: a primeira seção depois do hero é `surface`. */}
        {order.map((id, i) => {
          const Section = SECTIONS[id]
          return <Section key={id} tone={i % 2 === 0 ? 'surface' : 'canvas'} />
        })}
        <Contato />
      </main>
      <Footer />
      {audience === 'projeto' && <FloatingWhatsApp />}
    </AudienceContext.Provider>
  )
}
