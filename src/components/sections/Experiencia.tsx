import { Download } from 'lucide-preact'
import { siteConfig } from '@/config'
import { content } from '@/content'
import { LinkedinIcon } from '@/components/ui/BrandIcons'
import { Section, type Tone } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { cx } from '@/lib/cx'

const { experiencia } = content

export function Experiencia({ tone }: { tone?: Tone }) {
  return (
    <Section id="experiencia" tone={tone}>
      <SectionHeader
        id="experiencia"
        title={experiencia.title}
        description={experiencia.description}
        class="mb-12 md:mb-16"
      />

      <div class="grid items-start gap-12 lg:grid-cols-[1fr_300px] lg:gap-12">
        {/* O emprego atual vem em card claro com sombra lime; os anteriores em grafite. */}
        <ol class="flex flex-col gap-6">
          {experiencia.jobs.map((job) => (
            <li key={`${job.company}-${job.period}`}>
              <article
                class={cx(
                  'grid gap-x-7 gap-y-3 rounded-lg border-[3px] p-5 sm:p-6 md:grid-cols-[170px_1fr]',
                  job.current
                    ? 'on-light border-ink bg-surface-2 text-ink shadow-[6px_6px_0_var(--color-accent)] sm:shadow-[10px_10px_0_var(--color-accent)]'
                    : 'border-line bg-surface shadow-hard',
                )}
              >
                <p
                  class={cx(
                    'text-sm leading-relaxed font-semibold',
                    job.current ? 'text-accent-deep' : 'text-accent-deep',
                  )}
                >
                  {job.period}
                  <br />
                  <span class={job.current ? 'text-ink/70' : 'text-muted'}>{job.location}</span>
                </p>

                <div>
                  <header class="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 class="font-display text-[22px] leading-tight font-extrabold tracking-[-0.025em]">
                      {job.company}
                      <span
                        class={cx(
                          'mt-1 block font-sans text-[15px] font-medium tracking-normal',
                          job.current ? 'text-ink/75' : 'text-muted',
                        )}
                      >
                        {job.role}
                      </span>
                    </h3>
                    {job.current && (
                      <span class="self-start rounded-sm bg-ink px-2 py-1 text-xs font-bold text-surface-2">
                        {experiencia.currentLabel}
                      </span>
                    )}
                  </header>
                  <ul class="mb-4 flex flex-col gap-2">
                    {job.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        class={cx(
                          'relative pl-4 text-[15px] leading-relaxed before:absolute before:top-[0.65em] before:left-0 before:size-1.5 before:rounded-[1px]',
                          job.current ? 'text-ink/85 before:bg-ink' : 'text-fg/85 before:bg-accent',
                        )}
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <ul class="flex flex-wrap gap-1.5" aria-label="Stack">
                    {job.stack.map((tech) => (
                      <li key={tech} class="chip">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          ))}
        </ol>

        <aside class="card flex flex-col gap-8 p-6 lg:sticky lg:top-28">
          <div>
            <h3 class="section-label mb-4">{experiencia.educationTitle}</h3>
            <ul class="flex flex-col gap-4">
              {experiencia.education.map((edu) => (
                <li key={edu.title}>
                  <p
                    class={cx(
                      'leading-snug font-semibold',
                      edu.minor ? 'text-sm text-muted' : 'text-[15px] text-fg',
                    )}
                  >
                    {edu.title}
                  </p>
                  <p class="mt-1 text-[13px] text-muted">
                    {edu.institution}, {edu.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 class="section-label mb-4">{experiencia.languagesTitle}</h3>
            <ul class="flex flex-col gap-1.5 text-[15px] text-fg">
              {experiencia.languages.map((lang) => (
                <li key={lang}>{lang}</li>
              ))}
            </ul>
          </div>

          <div class="flex flex-col gap-3">
            <a href={siteConfig.links.resume} download class="btn btn-primary">
              <Download size={17} aria-hidden="true" />
              {experiencia.downloadResume}
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-outline"
            >
              <LinkedinIcon size={15} />
              {experiencia.linkedin}
            </a>
          </div>
        </aside>
      </div>
    </Section>
  )
}
