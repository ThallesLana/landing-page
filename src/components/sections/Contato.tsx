import { CircleCheck, Download, Mail, MessageCircle } from 'lucide-preact'
import type { TargetedEvent } from 'preact'
import { useState } from 'preact/hooks'
import { siteConfig, whatsappUrl } from '@/config'
import { content } from '@/content'
import { useAudience } from '@/lib/audience'
import { LinkedinIcon } from '@/components/ui/BrandIcons'
import { submitLead, type LeadInput } from '@/lib/lead'

const { contato } = content
const { form: copy } = contato

const EMPTY: LeadInput = { name: '', email: '', phone: '', message: '' }

type Status = 'idle' | 'sending' | 'sent' | 'error'

const inputClass =
  'w-full rounded-md border-2 border-line bg-canvas px-4 py-3 text-[15px] text-fg placeholder:text-muted/70 transition-colors hover:border-muted focus:border-accent focus:outline-none focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-accent'
const labelClass = 'mb-1.5 block text-sm font-semibold text-fg'

const panelClass = 'rounded-lg border-[3px] border-ink p-6 shadow-hard-lg sm:p-8'

export function Contato() {
  const { audience } = useAudience()

  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      class="relative bg-canvas px-4 py-20 sm:px-6 md:py-28"
    >
      <div class="mx-auto grid max-w-[1200px] grid-cols-[minmax(0,1fr)] items-start gap-7 lg:grid-cols-2">
        {/* Cada público vê o seu painel ao lado do formulário. */}
        {audience === 'recrutar' ? (
          <div class={`on-light bg-surface-2 text-ink ${panelClass}`}>
            <RecruiterCard />
          </div>
        ) : (
          <div class={`bg-surface-2 text-fg ${panelClass}`}>
            <h2
              id="contato-title"
              class="mb-5 font-display text-[clamp(30px,4vw,46px)] leading-[1.02] font-extrabold tracking-[-0.035em] text-balance"
            >
              {contato.title}
            </h2>
            <p class="mb-8 max-w-[440px] text-base leading-relaxed text-muted">
              {contato.description}
            </p>
            <a
              href={whatsappUrl(contato.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary"
            >
              <MessageCircle size={18} aria-hidden="true" />
              {contato.whatsappCta}
            </a>
          </div>
        )}

        <div class={`bg-surface ${panelClass}`}>
          <LeadForm />
        </div>
      </div>
    </section>
  )
}

function RecruiterCard() {
  const { recruiter } = contato
  return (
    <>
      <h2
        id="contato-title"
        class="mb-3 font-display text-[clamp(30px,4vw,46px)] leading-[1.02] font-extrabold tracking-[-0.035em] text-balance"
      >
        {recruiter.title}
      </h2>
      <p class="mb-6 text-base leading-relaxed text-ink/75">{recruiter.description}</p>
      <div class="mb-6 grid gap-3 min-[400px]:grid-cols-2">
        <a href={siteConfig.links.resume} download class="btn btn-primary">
          <Download size={16} aria-hidden="true" />
          {recruiter.resume}
        </a>
        <a
          href={siteConfig.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-dark"
        >
          <LinkedinIcon size={15} />
          {recruiter.linkedin}
        </a>
      </div>
      <p class="flex flex-wrap items-center gap-x-2 text-sm text-ink/75">
        {recruiter.emailLabel}
        <a
          href={`mailto:${siteConfig.email}`}
          class="inline-flex min-h-6 items-center gap-1.5 font-bold text-ink underline decoration-2 underline-offset-4 hover:text-accent-deep"
        >
          <Mail size={15} aria-hidden="true" />
          {siteConfig.email}
        </a>
      </p>
    </>
  )
}

function LeadForm() {
  const [values, setValues] = useState<LeadInput>(EMPTY)
  const [status, setStatus] = useState<Status>('idle')

  const bind = (field: keyof LeadInput) => ({
    value: values[field],
    onInput: (e: TargetedEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValues((prev) => ({ ...prev, [field]: e.currentTarget.value })),
  })

  async function handleSubmit(e: TargetedEvent<HTMLFormElement>) {
    e.preventDefault()
    // Honeypot: robôs preenchem o campo escondido; pessoas não.
    const trap = new FormData(e.currentTarget).get('website')
    if (trap) {
      setStatus('sent')
      return
    }
    setStatus('sending')
    try {
      await submitLead(values)
      setValues(EMPTY)
      setStatus('sent')
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div role="status" class="flex flex-col items-center gap-4 py-10 text-center">
        <CircleCheck size={44} class="text-accent-deep" aria-hidden="true" />
        <h3 class="font-display text-2xl font-extrabold tracking-[-0.03em] text-fg">
          {copy.successTitle}
        </h3>
        <p class="max-w-[300px] text-[15px] leading-relaxed text-muted">{copy.successText}</p>
        <button type="button" class="btn btn-outline mt-2" onClick={() => setStatus('idle')}>
          {copy.sendAnother}
        </button>
      </div>
    )
  }

  const sending = status === 'sending'

  return (
    <form class="flex flex-col gap-4" onSubmit={handleSubmit}>
      <h3 class="mb-2 font-display text-2xl font-extrabold tracking-[-0.025em] text-fg">
        {copy.title}
      </h3>

      <div class="grid gap-4 sm:grid-cols-2">
        <div>
          <label for="lead-name" class={labelClass}>
            {copy.name}
          </label>
          <input
            id="lead-name"
            name="name"
            type="text"
            autocomplete="name"
            required
            maxLength={120}
            placeholder={copy.namePlaceholder}
            class={inputClass}
            {...bind('name')}
          />
        </div>
        <div>
          <label for="lead-email" class={labelClass}>
            {copy.email}
          </label>
          <input
            id="lead-email"
            name="email"
            type="email"
            autocomplete="email"
            required
            maxLength={160}
            placeholder={copy.emailPlaceholder}
            class={inputClass}
            {...bind('email')}
          />
        </div>
      </div>

      <div>
        <label for="lead-phone" class={labelClass}>
          {copy.phone} <span class="font-normal text-muted">({copy.optional})</span>
        </label>
        <input
          id="lead-phone"
          name="phone"
          type="tel"
          autocomplete="tel"
          inputMode="tel"
          maxLength={30}
          placeholder={copy.phonePlaceholder}
          class={inputClass}
          {...bind('phone')}
        />
      </div>

      <div>
        <label for="lead-message" class={labelClass}>
          {copy.message}
        </label>
        <textarea
          id="lead-message"
          name="message"
          required
          rows={4}
          maxLength={2000}
          placeholder={copy.messagePlaceholder}
          class={`${inputClass} resize-y`}
          {...bind('message')}
        />
      </div>

      {/* Honeypot */}
      <div aria-hidden="true" class="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label for="lead-website">Website</label>
        <input id="lead-website" name="website" type="text" tabIndex={-1} autocomplete="off" />
      </div>

      {status === 'error' && (
        <p
          role="alert"
          class="rounded-md border-2 border-danger bg-danger/10 px-4 py-3 text-sm text-fg"
        >
          {copy.error}
        </p>
      )}

      <button
        type="submit"
        class="btn btn-primary mt-1 w-full"
        disabled={sending}
        aria-busy={sending}
      >
        {sending ? copy.sending : copy.submit}
      </button>
    </form>
  )
}
