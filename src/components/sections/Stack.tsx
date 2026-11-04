import { content } from '@/content'
import { Section, type Tone } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { cx } from '@/lib/cx'

const { stack } = content

// O último grupo estica para preencher a linha e não deixar células vazias no grid.
const count = stack.groups.length
const lastSpan = cx(
  count % 2 === 1 && 'sm:col-span-2',
  count % 3 === 1 && 'lg:col-span-3',
  count % 3 === 2 && 'lg:col-span-2',
  count % 2 === 1 && count % 3 === 0 && 'lg:col-span-1',
)

export function Stack({ tone }: { tone?: Tone }) {
  return (
    <Section id="stack" tone={tone}>
      <SectionHeader id="stack" title={stack.title} class="mb-12" />

      {/* Tabela com divisórias grossas: o fundo ink aparece no `gap`. */}
      <ul class="grid gap-[3px] overflow-hidden rounded-lg border-[3px] border-ink bg-ink shadow-hard sm:grid-cols-2 lg:grid-cols-3">
        {stack.groups.map((group, i) => (
          <li
            key={group.title}
            class={cx(
              'p-6',
              group.studying ? 'bg-surface-2' : 'bg-canvas',
              i === stack.groups.length - 1 && lastSpan,
            )}
          >
            <h3 class="mb-4 flex items-baseline gap-2 text-base font-bold tracking-[-0.01em] text-fg">
              {group.title}
              {group.studying && (
                <span class="text-sm font-medium text-muted">({stack.studyingLabel})</span>
              )}
            </h3>
            <ul class="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li key={item} class={cx('chip', group.studying && 'border-dashed')}>
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  )
}
