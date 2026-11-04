import { Mail } from 'lucide-preact'
import { siteConfig } from '@/config'
import { content } from '@/content'
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons'
import { Monogram } from '@/components/ui/Monogram'
import { playIntro } from '@/components/layout/Intro'

const { footer } = content

const links = [
  {
    label: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: <Mail size={15} aria-hidden="true" />,
  },
  { label: 'LinkedIn', href: siteConfig.links.linkedin, icon: <LinkedinIcon size={14} /> },
  { label: 'GitHub', href: siteConfig.links.github, icon: <GithubIcon size={14} /> },
]

export function Footer() {
  return (
    <footer class="border-t-[3px] border-ink bg-surface px-4 py-10 sm:px-6">
      <div class="mx-auto flex max-w-[1200px] flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div class="flex items-center gap-3">
          {/* Atalho escondido: o "TL" toca a intro de novo. */}
          <button
            type="button"
            onClick={playIntro}
            title={footer.replayIntro}
            aria-label={footer.replayIntro}
            class="group rounded-md"
          >
            <Monogram class="size-[30px] text-xs transition-[transform,box-shadow] duration-100 group-hover:translate-0.5 group-hover:shadow-none" />
          </button>
          <p class="text-sm text-muted">
            © {new Date().getFullYear()} {footer.copyright}
            <br />
            {footer.location}
          </p>
        </div>

        <ul class="flex flex-wrap gap-x-6 gap-y-3">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                {...(link.href.startsWith('http') && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
                class="inline-flex min-h-6 items-center gap-2 text-sm font-medium text-fg/80 transition-colors hover:text-accent-deep"
              >
                {link.icon}
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
