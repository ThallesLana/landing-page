import { content } from '@/content'
import { Section, type Tone } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'

const { prova } = content

export function Prova({ tone }: { tone?: Tone }) {
  if (prova.items.length === 0) return null

  return (
    <Section id="depoimentos" tone={tone}>
      <SectionHeader id="depoimentos" title={prova.title} class="mb-12" />

      <ul class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {prova.items.map((t) => (
          <li key={t.name}>
            <figure class="card flex h-full flex-col bg-canvas p-6">
              <blockquote class="mb-6 flex-1 text-base leading-relaxed text-fg">
                <p>“{t.quote}”</p>
              </blockquote>
              <figcaption>
                <p class="text-[15px] font-bold text-accent-deep">{t.name}</p>
                <p class="text-[13px] text-muted">{t.role}</p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Section>
  )
}
