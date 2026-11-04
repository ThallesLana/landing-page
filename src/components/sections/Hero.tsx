import { Download, MessageCircle } from 'lucide-preact'
import { useEffect, useState } from 'preact/hooks'
import profile from '@/assets/profile.webp'
import { INTRO_DURATION } from '@/components/layout/Intro'
import { isSectionVisible, siteConfig, whatsappUrl } from '@/config'
import { content } from '@/content'
import { useAudience } from '@/lib/audience'
import { cx } from '@/lib/cx'
import type { Audience } from '@/types/content'

const { hero, contato } = content
const AUDIENCES = Object.keys(hero.audienceOptions) as Audience[]

interface StickerStyle {
  tilt: string
  class: string
  small?: boolean
}

// Cada adesivo do mural: inclinação e cores (vermelho, papel, papel, tinta). O 3º tem texto menor.
const stickers: [StickerStyle, ...StickerStyle[]] = [
  { tilt: '-2deg', class: 'bg-accent text-on-accent' },
  { tilt: '1.5deg', class: 'bg-surface-2 text-ink min-[421px]:mt-9' },
  { tilt: '-1deg', class: 'bg-surface-2 text-ink', small: true },
  { tilt: '2deg', class: 'bg-ink text-surface-2 min-[421px]:mt-6' },
]

export function Hero() {
  const { audience, setAudience } = useAudience()
  const variant = hero.variants[audience]
  const [title1, title2, tag] = variant.title

  // Os adesivos "colam" no mural um depois do outro, de novo a cada troca de público.
  // É a única animação automática da página.
  const [stuck, setStuck] = useState(0)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setStuck(variant.facts.length)
      return
    }
    setStuck(0)
    // Com a intro na tela, os adesivos esperam ela terminar para colar logo em seguida.
    const wait =
      document.documentElement.dataset.intro === 'on'
        ? Math.max(0, INTRO_DURATION - performance.now())
        : 0
    const timers = variant.facts.map((_, i) =>
      setTimeout(() => setStuck(i + 1), wait + 250 + i * 160),
    )
    return () => timers.forEach(clearTimeout)
  }, [audience, variant.facts])

  return (
    <section
      id="inicio"
      aria-labelledby="inicio-title"
      class="relative overflow-x-clip bg-canvas pt-28 lg:pt-32"
    >
      <div class="mx-auto grid max-w-[1200px] gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-10 lg:pb-24">
        <div>
          <div class="mb-8 flex items-center gap-4">
            <img
              src={profile}
              alt={hero.photoAlt}
              width={64}
              height={64}
              class="size-16 shrink-0 rounded-md border-[3px] border-ink object-cover shadow-hard-sm"
            />
            <div class="min-w-0">
              <p class="text-[17px] leading-tight font-bold text-fg">{hero.name}</p>
              <p class="mt-0.5 text-[15px] leading-snug text-muted">{hero.role}</p>
              {siteConfig.openToWork && (
                <p class="mt-1.5 inline-flex items-center gap-2 text-sm font-medium text-success">
                  <span aria-hidden="true" class="size-2 shrink-0 rounded-full bg-success" />
                  {variant.badge}
                </p>
              )}
            </div>
          </div>

          <div class="mb-8 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span id="publico-label" class="text-[15px] font-medium text-fg">
              {hero.audienceLabel}
            </span>
            <div
              role="group"
              aria-labelledby="publico-label"
              class="inline-flex overflow-hidden rounded-md border-[3px] border-ink shadow-hard-sm"
            >
              {AUDIENCES.map((id, i) => {
                const active = audience === id
                return (
                  <button
                    key={id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => !active && setAudience(id)}
                    class={cx(
                      'min-h-11 px-4 text-[15px] font-bold transition-colors duration-100',
                      i > 0 && 'border-l-[3px] border-ink',
                      active
                        ? 'bg-ink text-surface-2'
                        : 'on-light bg-surface-2 text-fg hover:text-accent-deep',
                    )}
                  >
                    {hero.audienceOptions[id]}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Tamanho calculado para cada linha caber inteira a partir de 320px (cabe até ~15 caracteres). */}
          <h1
            id="inicio-title"
            class="mb-8 font-display text-[min(80px,calc(12vw-4px))] leading-[0.95] font-extrabold tracking-[-0.035em] lg:text-[clamp(46px,6.1vw,80px)]"
          >
            <span class="block whitespace-nowrap">{title1}</span>{' '}
            <span class="block whitespace-nowrap">{title2}</span>{' '}
            <span class="my-[0.08em] inline-block rounded-md border-[3px] border-ink bg-accent px-[0.18em] whitespace-nowrap text-on-accent shadow-[6px_6px_0_var(--color-ink)]">
              {tag}
            </span>
          </h1>

          <p class="mb-9 max-w-[34em] text-[17px] leading-relaxed text-muted sm:text-[19px]">
            {variant.subtitle}
          </p>

          <div class="flex flex-wrap gap-4">
            {audience === 'recrutar' ? (
              <>
                <a
                  href={siteConfig.links.resume}
                  download
                  class="btn btn-primary btn-lg flex-[1_1_220px] sm:flex-none"
                >
                  <Download size={18} aria-hidden="true" />
                  {variant.primaryCta}
                </a>
                <a href="#experiencia" class="btn btn-outline btn-lg flex-[1_1_220px] sm:flex-none">
                  {variant.secondaryCta}
                </a>
              </>
            ) : (
              <>
                <a
                  href={whatsappUrl(contato.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-primary btn-lg flex-[1_1_220px] sm:flex-none"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  {variant.primaryCta}
                </a>
                {isSectionVisible('projetos') && (
                  <a href="#projetos" class="btn btn-outline btn-lg flex-[1_1_220px] sm:flex-none">
                    {variant.secondaryCta}
                  </a>
                )}
              </>
            )}
          </div>
        </div>

        <ul
          key={audience}
          aria-label={hero.factsLabel}
          class="grid grid-cols-1 gap-x-[18px] gap-y-[22px] p-2 min-[421px]:grid-cols-2"
        >
          {variant.facts.map((fact, i) => {
            const sticker = stickers[i % stickers.length] ?? stickers[0]
            return (
              <li
                key={fact.value}
                class={cx('sticker sticker-pop', sticker.class, i < stuck && 'on')}
                style={{ '--tilt': sticker.tilt }}
              >
                <strong
                  class={cx(
                    'mb-1.5 block font-display leading-none font-extrabold tracking-[-0.03em]',
                    sticker.small ? 'text-[clamp(22px,2.2vw,28px)]' : 'text-[clamp(28px,3vw,42px)]',
                  )}
                >
                  {fact.value}
                </strong>
                {fact.label}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
