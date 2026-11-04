import type { ComponentChildren } from 'preact'
import { cx } from '@/lib/cx'

export type Tone = 'canvas' | 'surface'

interface SectionProps {
  id: string
  tone?: Tone
  class?: string
  children: ComponentChildren
}

/** Wrapper padrão de seção: fundo, gutter e largura máxima. Seções `surface` ganham contorno. */
export function Section({ id, tone = 'canvas', class: className, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      class={cx(
        'relative overflow-hidden px-4 py-20 sm:px-6 md:py-28',
        tone === 'surface' ? 'border-y-[3px] border-ink bg-surface' : 'bg-canvas',
        className,
      )}
    >
      <div class="mx-auto max-w-[1200px]">{children}</div>
    </section>
  )
}
