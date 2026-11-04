import { Check } from 'lucide-preact'
import profile from '@/assets/profile.webp'
import { content } from '@/content'
import { Section, type Tone } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'

const { sobre } = content

export function Sobre({ tone }: { tone?: Tone }) {
  return (
    <Section id="sobre" tone={tone}>
      <div class="grid items-center gap-12 md:grid-cols-[minmax(0,360px)_1fr] md:gap-16">
        <div class="relative mx-auto w-full max-w-[320px] md:max-w-none">
          <img
            src={profile}
            alt={sobre.photoAlt}
            width={480}
            height={480}
            loading="lazy"
            decoding="async"
            class="relative aspect-square w-full -rotate-2 rounded-lg border-[3px] border-ink object-cover shadow-[10px_10px_0_var(--color-accent)]"
          />
        </div>

        <div>
          <SectionHeader id="sobre" title={sobre.title} />
          <div class="mt-6 flex flex-col gap-4 text-base leading-[1.75] text-muted">
            {sobre.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <h3 class="section-label mt-8 mb-4">{sobre.factsTitle}</h3>
          <ul class="grid gap-2.5 sm:grid-cols-2">
            {sobre.facts.map((fact) => (
              <li key={fact} class="flex gap-2.5 text-[15px] leading-snug text-fg">
                <Check
                  size={17}
                  strokeWidth={3}
                  class="mt-px shrink-0 text-accent-deep"
                  aria-hidden="true"
                />
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
