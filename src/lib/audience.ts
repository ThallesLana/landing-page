import { track } from '@vercel/analytics'
import { createContext } from 'preact'
import { useContext } from 'preact/hooks'
import { siteConfig } from '@/config'
import type { Audience } from '@/types/content'

const { param, storageKey } = siteConfig.audiences
const AUDIENCES: Audience[] = ['recrutar', 'projeto']

function isAudience(value: unknown): value is Audience {
  return AUDIENCES.includes(value as Audience)
}

export interface AudienceState {
  audience: Audience
  setAudience: (audience: Audience) => void
}

export const AudienceContext = createContext<AudienceState>({
  audience: siteConfig.audiences.default,
  setAudience: () => {},
})

export function useAudience() {
  return useContext(AudienceContext)
}

/**
 * Público pedido pelo link (`?para=`) ou escolhido numa visita anterior.
 * Só roda no navegador (dentro de `useEffect`), nunca no prerender.
 */
export function readStoredAudience(): Audience | null {
  const fromUrl = new URLSearchParams(window.location.search).get(param)
  if (isAudience(fromUrl)) return fromUrl
  try {
    const saved = window.localStorage.getItem(storageKey)
    if (isAudience(saved)) return saved
  } catch {
    // Armazenamento bloqueado (aba anônima, cookies desligados): fica no padrão.
  }
  return null
}

/** Grava a escolha na URL (link compartilhável), no navegador e no Vercel Analytics. */
export function persistAudience(audience: Audience) {
  const url = new URL(window.location.href)
  url.searchParams.set(param, audience)
  window.history.replaceState(null, '', url)
  try {
    window.localStorage.setItem(storageKey, audience)
  } catch {
    // Sem armazenamento a escolha vale só para esta visita.
  }
  track('publico', { para: audience })
}
