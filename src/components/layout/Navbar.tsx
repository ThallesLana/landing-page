import { Download, Menu, X } from 'lucide-preact'
import { useEffect, useState } from 'preact/hooks'
import { isSectionVisible, siteConfig } from '@/config'
import { content } from '@/content'
import { useAudience } from '@/lib/audience'
import { cx } from '@/lib/cx'
import type { SectionId } from '@/types/content'

const { nav } = content

// "Thalles Lana" → "Thalles" + tarja lime com "Lana".
const brandSplit = nav.brand.lastIndexOf(' ')
const brandFirst = nav.brand.slice(0, brandSplit)
const brandLast = nav.brand.slice(brandSplit + 1)

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { audience } = useAudience()
  const links = nav.links[audience].filter(
    (link) => !link.href.startsWith('#') || isSectionVisible(link.href.slice(1) as SectionId),
  )

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      setScrolled(window.scrollY > 40)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)
  const solid = scrolled || open

  return (
    <header
      class={cx(
        'fixed inset-x-0 top-0 z-50 border-b-[3px] transition-[background-color,border-color] duration-200',
        solid ? 'border-ink bg-canvas/95 backdrop-blur-md' : 'border-transparent bg-transparent',
      )}
    >
      <nav
        aria-label={nav.ariaLabel}
        class="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between gap-6 px-4 sm:px-6"
      >
        <a
          href="#inicio"
          class="font-display text-xl font-extrabold tracking-[-0.03em] text-fg no-underline"
          onClick={close}
        >
          {brandFirst}
          <span class="ml-1 inline-block rounded-sm bg-accent px-1.5 py-0.5 text-on-accent">
            {brandLast}
          </span>
        </a>

        <ul class="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                class="relative inline-flex items-center pb-0.5 text-[15px] font-medium text-fg/80 transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-right after:scale-x-0 after:bg-accent after:transition-transform after:duration-200 hover:text-fg hover:after:origin-left hover:after:scale-x-100"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={siteConfig.links.resume}
              download
              class="inline-flex items-center gap-1.5 pb-0.5 text-[15px] font-medium text-fg/80 transition-colors hover:text-accent-deep"
            >
              <Download size={14} aria-hidden="true" />
              {nav.resume}
            </a>
          </li>
        </ul>

        <a
          href="#contato"
          class="btn btn-primary hidden !min-h-[44px] !px-4 !py-2 !text-sm md:inline-flex"
        >
          {nav.cta}
        </a>

        <button
          type="button"
          class="-mr-2 flex size-11 items-center justify-center text-fg md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? nav.closeMenu : nav.openMenu}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" class="border-t-[3px] border-ink bg-surface px-4 pt-2 pb-6 md:hidden">
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  class="block border-b-2 border-faint py-3.5 text-base font-semibold text-fg hover:text-accent-deep"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div class="mt-4 grid grid-cols-2 gap-3">
            <a href={siteConfig.links.resume} download class="btn btn-outline" onClick={close}>
              <Download size={16} aria-hidden="true" />
              {nav.resume}
            </a>
            <a href="#contato" class="btn btn-primary" onClick={close}>
              {nav.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
