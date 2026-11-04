import { ArrowUpRight } from 'lucide-preact'
import { content } from '@/content'
import { Section, type Tone } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'

const { lab } = content

const dateFormat = new Intl.DateTimeFormat('pt-BR', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
})

export function Lab({ tone }: { tone?: Tone }) {
  if (lab.items.length === 0) return null

  return (
    <Section id="lab" tone={tone}>
      <SectionHeader id="lab" title={lab.title} description={lab.description} class="mb-10" />

      <ul class="divide-y-2 divide-faint border-y-[3px] border-ink">
        {lab.items.map((entry) => (
          <li key={entry.href}>
            <a
              href={entry.href}
              target="_blank"
              rel="noopener noreferrer"
              class="group flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:gap-6"
            >
              <time dateTime={entry.date} class="w-32 shrink-0 text-sm text-muted">
                {dateFormat.format(new Date(`${entry.date}T12:00:00`))}
              </time>
              <span class="flex-1 text-lg font-bold tracking-[-0.01em] text-fg transition-colors group-hover:text-accent-deep">
                {entry.title}
              </span>
              <span class="inline-flex items-center gap-1 text-sm text-muted">
                {entry.platform}
                <ArrowUpRight size={14} aria-hidden="true" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
