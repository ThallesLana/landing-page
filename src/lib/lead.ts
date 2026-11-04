import { siteConfig } from '@/config'

export interface LeadInput {
  name: string
  email: string
  phone: string
  message: string
}

/** Payload enviado ao webhook. `source` identifica de onde o lead veio. */
export interface LeadPayload extends LeadInput {
  source: string
}

export async function submitLead(input: LeadInput): Promise<void> {
  const payload: LeadPayload = {
    name: input.name.trim(),
    email: input.email.trim(),
    phone: input.phone.trim(),
    message: input.message.trim(),
    source: siteConfig.lead.source,
  }

  const response = await fetch(siteConfig.lead.endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!response.ok) throw new Error(`Lead webhook respondeu ${response.status}`)

  const body = (await response.json().catch(() => null)) as { success?: boolean } | null
  if (body?.success === false) throw new Error('Lead webhook recusou o envio')
}
