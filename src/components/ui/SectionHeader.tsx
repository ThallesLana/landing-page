interface SectionHeaderProps {
  id: string
  title: string
  description?: string
  class?: string
}

/** Título da seção (`h2` com `id="{id}-title"`) e descrição opcional. */
export function SectionHeader({ id, title, description, class: className }: SectionHeaderProps) {
  return (
    <div class={className}>
      <h2
        id={`${id}-title`}
        class="max-w-[22ch] text-[clamp(32px,4.4vw,54px)] leading-[1.04] font-extrabold tracking-[-0.035em] text-balance text-fg"
      >
        {title}
      </h2>
      {description && (
        <p class="mt-6 max-w-[580px] text-[17px] leading-relaxed text-muted">{description}</p>
      )}
    </div>
  )
}
