import { ShieldCheck } from 'lucide-preact'
import { content } from '@/content'
import { Section, type Tone } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { cx } from '@/lib/cx'

const { comoTrabalho } = content

export function ComoTrabalho({ tone }: { tone?: Tone }) {
  const last = comoTrabalho.values.length - 1

  return (
    <Section id="como-trabalho" tone={tone}>
      <div class="grid items-start gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <SectionHeader id="como-trabalho" title={comoTrabalho.title} />
          <div class="mt-7 flex flex-col gap-4 text-base leading-[1.75] text-muted">
            {comoTrabalho.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        {/* Princípios, sem ordem: lista com divisórias. Segurança leva o escudo. */}
        <ul class="flex flex-col">
          {comoTrabalho.values.map((value, i) => (
            <li
              key={value.title}
              class={cx('py-6 first:pt-0 last:pb-0', i < last && 'border-b-2 border-faint')}
            >
              <h3 class="mb-2 flex items-center gap-2 text-lg leading-snug font-bold tracking-[-0.02em] text-fg">
                {value.title}
                {i === last && (
                  <ShieldCheck size={18} class="text-accent-deep" aria-hidden="true" />
                )}
              </h3>
              <p class="text-[15px] leading-relaxed text-muted">{value.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
