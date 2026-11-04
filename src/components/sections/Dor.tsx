import { content } from '@/content'
import { Section, type Tone } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'

const { dor } = content

export function Dor({ tone }: { tone?: Tone }) {
  return (
    <Section id="risco" tone={tone}>
      <div class="grid items-start gap-12 md:grid-cols-2 md:gap-16">
        <SectionHeader
          id="risco"
          title={dor.title}
          description={dor.description}
          class="md:sticky md:top-32"
        />

        {/* Os problemas não têm ordem: lista simples, com a borda vermelha marcando o risco. */}
        <ul class="flex flex-col gap-6">
          {dor.items.map((item) => (
            <li key={item.title} class="card border-l-[6px] border-l-accent p-6 sm:p-7">
              <h3 class="mb-3 text-xl leading-snug font-bold tracking-[-0.02em] text-fg">
                {item.title}
              </h3>
              <p class="text-[15px] leading-relaxed text-muted">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
