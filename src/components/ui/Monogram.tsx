import { cx } from '@/lib/cx'

export function Monogram({ class: className }: { class?: string }) {
  return (
    <span
      aria-hidden="true"
      class={cx(
        'flex size-[34px] items-center justify-center rounded-md border-[3px] border-ink bg-accent font-display text-[13px] font-extrabold tracking-[-0.04em] text-on-accent shadow-hard-sm',
        className,
      )}
    >
      TL
    </span>
  )
}
