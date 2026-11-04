import { inject } from '@vercel/analytics'
import { hydrate, render } from 'preact'
import { App } from './App'
import './index.css'

if (typeof window !== 'undefined') {
  inject()

  const root = document.getElementById('app')
  if (!root) throw new Error('Elemento #app não encontrado')

  // No build o HTML já vem pré-renderizado e só precisa ser hidratado.
  // No `pnpm dev` o #app chega vazio, então renderiza do zero.
  if (root.hasChildNodes()) hydrate(<App />, root)
  else render(<App />, root)
}

/** Chamado pelo `@preact/preset-vite` no build para gerar o HTML estático. */
export async function prerender() {
  const { renderToStringAsync } = await import('preact-render-to-string')
  return { html: await renderToStringAsync(<App />) }
}
