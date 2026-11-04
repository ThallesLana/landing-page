import { ArrowUpRight } from 'lucide-preact'
import { useMemo, useState } from 'preact/hooks'
import { content } from '@/content'
import { GithubIcon } from '@/components/ui/BrandIcons'
import { Section, type Tone } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { cx } from '@/lib/cx'
import type { Project, ProjectCategory } from '@/types/content'

const { projetos } = content

const CATEGORY_ORDER: ProjectCategory[] = ['ia', 'pagamentos', 'web', 'mobile']

type Filter = ProjectCategory | 'all'

/**
 * Quantos projetos aparecem antes de "Mostrar todos" (com o filtro em "Todos").
 * 2 destaques (2 colunas cada) + 5 comuns fecham 3 linhas de 3 no desktop.
 */
const INITIAL = 7

// Destaques primeiro, cada um seguido de um projeto comum: o destaque ocupa 2 colunas
// e o comum fecha a linha de 3, sem deixar buraco no grid. O resto mantém a ordem do arquivo.
function arrange(items: Project[]) {
  const featured = items.filter((p) => p.featured)
  const regular = items.filter((p) => !p.featured)
  return [...featured.flatMap((f) => [f, ...regular.splice(0, 1)]), ...regular]
}

const sorted = arrange(projetos.items)

// Só mostra filtros que têm projeto.
const available = CATEGORY_ORDER.filter((cat) => sorted.some((p) => p.categories.includes(cat)))

export function Projetos({ tone }: { tone?: Tone }) {
  const [filter, setFilter] = useState<Filter>('all')
  const [expanded, setExpanded] = useState(false)

  const filtered = useMemo(
    () =>
      filter === 'all'
        ? sorted
        : arrange(projetos.items.filter((p) => p.categories.includes(filter))),
    [filter],
  )
  const collapsed = filter === 'all' && !expanded && filtered.length > INITIAL
  const visible = collapsed ? filtered.slice(0, INITIAL) : filtered

  const filters: { id: Filter; label: string }[] = [
    { id: 'all', label: projetos.allLabel },
    ...available.map((id) => ({ id, label: projetos.categoryLabels[id] })),
  ]

  return (
    <Section id="projetos" tone={tone}>
      <div class="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeader id="projetos" title={projetos.title} />

        {filters.length > 2 && (
          <div role="group" aria-label={projetos.filterLabel} class="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                aria-pressed={filter === f.id}
                onClick={() => setFilter(f.id)}
                class={cx(
                  'min-h-10 rounded-md border-[3px] border-ink px-4 text-sm font-bold shadow-hard-sm transition-[transform,box-shadow,color] duration-100',
                  filter === f.id
                    ? 'translate-0.5 bg-accent text-on-accent shadow-none'
                    : 'bg-surface-2 text-fg hover:text-accent-deep',
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <ul id="lista-projetos" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </ul>

      {collapsed && (
        <button
          type="button"
          aria-controls="lista-projetos"
          aria-expanded={false}
          onClick={() => setExpanded(true)}
          class="btn btn-outline mt-10"
        >
          {projetos.showAllLabel} ({filtered.length})
        </button>
      )}
    </Section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const inProgress = project.status === 'in-progress'

  return (
    <li
      class={cx(
        'card card-hover flex flex-col p-5 sm:p-6',
        project.featured && 'border-accent sm:col-span-2',
      )}
    >
      <div class="mb-3 flex flex-wrap items-center gap-2">
        {project.featured && (
          <span class="chip chip-accent !py-0.5 !text-[10.5px]">{projetos.featuredLabel}</span>
        )}
        {project.categories.map((cat) => (
          <span key={cat} class="text-[13px] font-semibold text-muted">
            {projetos.categoryLabels[cat]}
          </span>
        ))}
        <span
          class={cx(
            'ml-auto inline-flex items-center gap-1.5 text-[13px] font-semibold',
            inProgress ? 'text-warning' : 'text-success',
          )}
        >
          <span
            aria-hidden="true"
            class={cx('size-2 rounded-full', inProgress ? 'bg-warning' : 'bg-success')}
          />
          {projetos.statusLabels[project.status]}
        </span>
      </div>

      <h3 class="mb-2 font-display text-[22px] leading-tight font-extrabold tracking-[-0.025em] text-fg">
        {project.title}
      </h3>
      <p class="mb-5 text-[15px] leading-relaxed text-muted">{project.description}</p>

      <ul class="mb-5 flex flex-wrap gap-1.5" aria-label="Stack">
        {project.stack.map((tech) => (
          <li key={tech} class="chip">
            {tech}
          </li>
        ))}
      </ul>

      <ul class="mt-auto flex flex-wrap gap-x-5 gap-y-2 border-t-2 border-faint pt-4">
        {project.links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex min-h-6 items-center gap-1.5 text-sm font-semibold text-fg underline decoration-line decoration-2 underline-offset-4 transition-colors hover:text-accent-deep hover:decoration-accent"
            >
              {link.kind === 'code' ? (
                <GithubIcon size={13} />
              ) : (
                <ArrowUpRight size={14} aria-hidden="true" />
              )}
              {link.label}
              <span class="sr-only"> de {project.title} (abre em nova aba)</span>
            </a>
          </li>
        ))}
      </ul>
    </li>
  )
}
