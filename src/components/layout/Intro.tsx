import { useEffect } from 'preact/hooks'

/** Fim da animação em ms (igual à soma dos tempos em `index.css`, seção "Intro"). */
export const INTRO_DURATION = 1950

// Triângulo equilátero apontando para cima, centrado no viewBox 200×200.
const TRIANGLE = '100,28 172,152 28,152'

let endTimer: ReturnType<typeof setTimeout> | undefined

function skip() {
  clearTimeout(endTimer)
  document.documentElement.dataset.intro = 'off'
}

/**
 * Toca a intro de novo (atalho escondido no "TL" do rodapé).
 * Desligar e religar o `data-intro` reinicia as animações CSS do zero.
 */
export function playIntro() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const root = document.documentElement
  root.dataset.intro = 'off'
  void root.offsetWidth // força o navegador a aplicar o "off" antes de religar
  root.dataset.intro = 'on'
  clearTimeout(endTimer)
  endTimer = setTimeout(skip, INTRO_DURATION)
}

/**
 * Abertura de ~2s: o triângulo da bandeira de Minas se desenha, enche de vermelho,
 * "carimba" com sombra dura, ganha três adesivos e cresce até cobrir a tela,
 * que então se abre de cima para baixo revelando o site.
 *
 * Só CSS: começa no primeiro quadro do HTML pré-renderizado e some sozinha.
 * O script no `<head>` do `index.html` liga (`data-intro="on"`) só na primeira visita
 * a cada 30 dias e nunca com movimento reduzido. Clique ou Esc pulam.
 * O "TL" do rodapé chama `playIntro()` para ver de novo.
 */
export function Intro() {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && document.documentElement.dataset.intro === 'on') skip()
    }
    window.addEventListener('keydown', onKey)
    if (document.documentElement.dataset.intro === 'on') endTimer = setTimeout(skip, INTRO_DURATION)
    return () => {
      window.removeEventListener('keydown', onKey)
      clearTimeout(endTimer)
    }
  }, [])

  return (
    <div class="intro" aria-hidden="true" onClick={skip}>
      <svg class="intro-mark" viewBox="0 0 200 200" width="200" height="200">
        <defs>
          <clipPath id="intro-clip">
            <polygon points={TRIANGLE} />
          </clipPath>
        </defs>

        <g class="intro-stamp">
          <g class="intro-grow">
            <polygon class="intro-shadow" points={TRIANGLE} />
            <rect
              class="intro-fill"
              x="0"
              y="28"
              width="200"
              height="124"
              clip-path="url(#intro-clip)"
            />
            <polygon class="intro-outline" points={TRIANGLE} pathLength={1} />
          </g>
        </g>

        <rect class="intro-note intro-note-1" x="22" y="34" width="34" height="34" rx="3" />
        <rect class="intro-note intro-note-2" x="150" y="58" width="28" height="28" rx="3" />
        <rect class="intro-note intro-note-3" x="140" y="150" width="32" height="32" rx="3" />
      </svg>
    </div>
  )
}
