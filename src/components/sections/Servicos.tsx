import { Check, ShieldCheck } from 'lucide-preact'
import { siteConfig } from '@/config'
import { content } from '@/content'
import { Section, type Tone } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { cx } from '@/lib/cx'

const { servicos } = content

export function Servicos({ tone }: { tone?: Tone }) {
  const enabled = siteConfig.services.filter((s) => s.enabled)
  if (enabled.length === 0) return null

  return (
    <Section id="servicos" tone={tone}>
      <SectionHeader
        id="servicos"
        title={servicos.title}
        description={servicos.description}
        class="mb-12 md:mb-16"
      />

      <ul
        class={cx(
          'grid gap-7',
          enabled.length > 1 && 'md:grid-cols-2',
          enabled.length > 2 && 'lg:grid-cols-3',
        )}
      >
        {enabled.map(({ id }) => {
          const service = servicos.items[id]
          return (
            <li key={id} class="card flex flex-col p-6 sm:p-8">
              <h3 class="mb-3 font-display text-[26px] leading-tight font-extrabold tracking-[-0.03em] text-fg">
                {service.title}
              </h3>
              <p class="mb-6 text-[15px] leading-relaxed text-muted">{service.description}</p>

              <ul class="mb-7 flex flex-col gap-3">
                {service.bullets.map((bullet) => (
                  <li key={bullet} class="flex gap-2.5 text-[15px] leading-snug text-fg">
                    <Check
                      size={17}
                      strokeWidth={3}
                      class="mt-px shrink-0 text-accent-deep"
                      aria-hidden="true"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div class="mt-auto flex gap-3 border-t-2 border-faint pt-5 text-fg">
                <ShieldCheck size={18} class="mt-px shrink-0 text-accent-deep" aria-hidden="true" />
                <p class="text-sm leading-snug font-medium">
                  <span class="sr-only">{servicos.highlightLabel}: </span>
                  {service.highlight}
                </p>
              </div>
            </li>
          )
        })}
      </ul>

      <a href="#contato" class="link-accent mt-12">
        {servicos.cta}
      </a>
    </Section>
  )
}
