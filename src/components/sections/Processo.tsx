import { ShieldCheck } from 'lucide-preact'
import { content } from '@/content'
import { Section, type Tone } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'

const { processo } = content

/** Prende o escudo à última palavra do título para ele nunca quebrar sozinho numa linha. */
function WithShield({ text }: { text: string }) {
  const split = text.lastIndexOf(' ')
  return (
    <>
      {text.slice(0, split + 1)}
      <span class="whitespace-nowrap">
        {text.slice(split + 1)}
        <ShieldCheck
          size={17}
          class="ml-1.5 inline-block align-[-3px] text-accent-deep"
          aria-hidden="true"
        />
      </span>
    </>
  )
}

/** Única lista numerada da página: as etapas acontecem nesta ordem. */
export function Processo({ tone }: { tone?: Tone }) {
  return (
    <Section id="processo" tone={tone}>
      <SectionHeader id="processo" title={processo.title} class="mb-12 md:mb-16" />

      <ol class="relative grid gap-8 lg:grid-cols-5 lg:gap-6">
        {/* Linha que conecta as etapas */}
        <span
          aria-hidden="true"
          class="absolute top-0 bottom-0 left-[21px] w-0.5 bg-line lg:top-[21px] lg:right-0 lg:bottom-auto lg:left-0 lg:h-0.5 lg:w-full"
        />
        {processo.steps.map((step, i) => (
          <li key={step.title} class="relative grid grid-cols-[44px_1fr] gap-x-5 lg:block">
            <span
              aria-hidden="true"
              class="relative z-10 flex size-11 items-center justify-center rounded-md border-[3px] border-ink bg-surface-2 text-base font-bold text-fg shadow-hard-sm lg:mb-6"
            >
              {i + 1}
            </span>
            <div class="pt-2 lg:pt-0">
              <h3 class="mb-2 text-lg leading-snug font-bold tracking-[-0.02em] text-fg">
                <span class="sr-only">
                  {processo.stepLabel} {i + 1}:{' '}
                </span>
                {step.security ? <WithShield text={step.title} /> : step.title}
              </h3>
              <p class="text-[15px] leading-relaxed text-muted">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
