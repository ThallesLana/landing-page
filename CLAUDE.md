# CLAUDE.md

Guia para o Claude Code trabalhar neste repositório: a landing page pessoal de Thalles Fernandes de Lana (thalles-lana.dev).

## Comandos

```bash
pnpm dev           # dev server (Vite, porta 8080)
pnpm build         # tsc -b + vite build + prerender do HTML. Rodar antes de commitar.
pnpm preview       # serve o dist/ (já com o HTML pré-renderizado)
pnpm check         # typecheck + eslint + prettier --check
pnpm lint:fix      # eslint --fix
pnpm format        # prettier --write
```

Não há testes automatizados.

## Stack

| Ferramenta          | Versão | Observação                                                       |
| ------------------- | ------ | ---------------------------------------------------------------- |
| Preact              | `^10`  | **Nunca React.** Hooks de `preact/hooks`. JSX usa `class`, `for` |
| Vite                | `^8`   | `@preact/preset-vite` com prerender ligado                       |
| TypeScript          | `~6.0` | `typescript-eslint` ainda não suporta TS 7                       |
| Tailwind CSS        | `^4`   | Plugin `@tailwindcss/vite`, tokens em `@theme` no `index.css`    |
| ESLint + Prettier   | —      | Flat config em `eslint.config.js`; `.prettierrc.json`            |
| Ícones              | —      | `lucide-preact`; logos de marca em `ui/BrandIcons.tsx`           |
| Analytics           | —      | `@vercel/analytics` (`inject()` em `main.tsx`)                   |
| Gerenciador de pkgs | `pnpm` | Não usar npm/yarn (o lockfile é `pnpm-lock.yaml`)                |

Alias `@/` → `src/`.

## Arquitetura

Página única, estática, **pré-renderizada no build**: `main.tsx` exporta `prerender()` (usa `preact-render-to-string`) e, no navegador, faz `hydrate()`. Por isso nada pode depender de `window`/`document` durante o render; use `useEffect`.

```
src/
├── main.tsx                # hydrate + prerender
├── App.tsx                 # estado do público + intro + ordem das seções + skip link
├── config.ts               # WhatsApp, e-mail, links, lead, flags, seções por público
├── index.css               # design system (tokens + classes globais)
├── content/
│   ├── index.ts            # exporta o idioma ativo (`content`)
│   └── pt-BR/*.ts          # TODA a copy, separada por seção
├── types/content.ts        # contrato `SiteContent` que todo idioma implementa
├── lib/
│   ├── audience.ts         # contexto do público, leitura/gravação de ?para= e localStorage
│   ├── lead.ts             # POST do formulário
│   └── cx.ts               # junta classes condicionais
└── components/
    ├── layout/             # Intro, Navbar, Footer, FloatingWhatsApp
    ├── sections/           # uma seção por arquivo
    └── ui/                 # Section, SectionHeader, Monogram, BrandIcons
```

### Seletor de público

O hero tem um seletor "Estou aqui para **contratar** / **fazer um projeto**". O público muda o hero (título, adesivos, botões), o menu, as seções e o painel do contato.

| Público    | Seções depois do hero (`siteConfig.audiences.sections`)                            |
| ---------- | ---------------------------------------------------------------------------------- |
| `recrutar` | Experiência → Como trabalho → Projetos → Stack → Sobre → (Lab) → (Prova) → Contato |
| `projeto`  | Dor (`#risco`) → Serviços → Processo → Projetos → Sobre → (Prova) → Contato        |

- **Padrão:** `recrutar`. É o que o HTML pré-renderizado (e o Google) mostra.
- **Link direto:** `/?para=recrutar` (LinkedIn, currículo) e `/?para=projeto` (propostas para clientes).
- Ao trocar, a escolha vai para a URL (`replaceState`), para o `localStorage` e para o Vercel Analytics como o evento `publico`.
- No primeiro carregamento, `?para=` vence a escolha salva. A leitura acontece em `useEffect`, depois da hidratação.
- Os fundos alternam sozinhos (`App.tsx` passa `tone` para cada seção); a primeira depois do hero é `surface`.
- O botão flutuante do WhatsApp só aparece para `projeto`.

### Regras de conteúdo

- **Nenhum texto visível em componente.** Copy vai em `src/content/pt-BR/`. Para inglês, criar `src/content/en/` implementando `SiteContent` e trocar em `content/index.ts`.
- **Nada inventado**: sem depoimentos, métricas, clientes ou certificações que não existam. Dado faltando vira `[[PREENCHER: ...]]` visível.
- Segurança aparece como **"estudando"**, nunca como especialidade ou certificação.
- Primeira pessoa do singular. Nada de "nós", "equipe", "Bússola".

### Flags e seções condicionais

| O quê                       | Onde                                         |
| --------------------------- | -------------------------------------------- |
| Selo de disponibilidade     | `siteConfig.openToWork` (texto por público)  |
| Ocultar seção (temporário)  | `siteConfig.audiences.hidden` (some do menu) |
| Serviços visíveis e ordem   | `siteConfig.services[].enabled`              |
| Lab (estudando em público)  | some se `lab.items` estiver vazio            |
| Depoimentos                 | some se `prova.items` estiver vazio          |
| Destaque em projetos        | `featured: true` (topo, 2 colunas)           |
| Projetos visíveis de início | `INITIAL` em `Projetos.tsx` (resto no botão) |
| Filtros de projetos         | só aparecem categorias que têm projeto       |

### Formulário de contato

`lib/lead.ts` faz `POST siteConfig.lead.endpoint` com:

```json
{ "name": "", "email": "", "phone": "", "message": "", "source": "thalles-lana.dev" }
```

`source` identifica a origem do lead. Sucesso = HTTP 2xx e corpo sem `success: false`. Há um honeypot (`website`) que descarta envios de robôs no cliente.

### Movimento

Há dois momentos de movimento, um depois do outro:

1. **Intro** (`layout/Intro.tsx`, estilos na seção "Intro" do `index.css`, ~2s): o triângulo da bandeira de Minas se desenha, enche de vermelho, carimba, cresce até cobrir a tela e se abre revelando o site. É só CSS, já vem no HTML pré-renderizado. O script no `<head>` do `index.html` liga `data-intro="on"` só na primeira visita a cada 30 dias (chave `thalles-lana:intro` no `localStorage`) e nunca com movimento reduzido ou sem JS. Clique ou Esc pulam. Se mudar os tempos, atualize `INTRO_DURATION`.
2. **Adesivos do hero** "colando" logo depois da intro (e de novo a cada troca de público). Não há entrada de seção, faixa rolando nem card que levanta no hover. Com `prefers-reduced-motion` os adesivos aparecem direto; sem JS, um `<noscript>` no `index.html` mostra os adesivos.

## Design system

Brutalismo sóbrio em fundo claro, com a **paleta Minas**: pedra-sabão, tinta preta e o vermelho da bandeira de Minas. Contornos grossos em `ink`, sombras duras sem desfoque, cantos de 4 a 8px. A única coisa inclinada são os adesivos do hero. Sem gradiente, glow ou glassmorphism. Evitar fundo creme com terracota (clichê de página gerada por IA).

### Cores (`@theme` → utilitários `bg-*`, `text-*`, `border-*`)

| Token         | Hex       | Uso                                                                |
| ------------- | --------- | ------------------------------------------------------------------ |
| `accent`      | `#D21F2F` | Vermelho da bandeira: CTA principal, tarja do H1, 1º adesivo, foco |
| `accent-deep` | `#A8121F` | Vermelho como **texto** e ícone (5.4:1 na pedra)                   |
| `on-accent`   | `#FFFFFF` | Texto sobre o vermelho (5.3:1)                                     |
| `canvas`      | `#DADBD4` | Fundo principal (pedra-sabão)                                      |
| `surface`     | `#E8E9E3` | Seções alternadas, cards e painéis                                 |
| `surface-2`   | `#F5F5F1` | Papel: cards claros, adesivos, botão secundário                    |
| `ink`         | `#151614` | Contornos, sombras duras, adesivo preto, botão escuro              |
| `line`        | `#6A6D66` | Borda de card, chip e campo (3.8:1)                                |
| `fg`          | `#151614` | Texto principal                                                    |
| `muted`       | `#4B4E48` | Texto secundário (6:1 na pedra)                                    |
| `subtle`      | `#6A6D66` | **Só texto grande** (≥ 24px)                                       |
| `faint`       | `#B9BBB3` | **Só decorativo** (divisórias), não passa AA para texto            |
| `success`     | `#1E6E35` | Disponibilidade, projeto concluído                                 |
| `warning`     | `#9A4A06` | Projeto em andamento                                               |
| `danger`      | `#B42318` | Erros do formulário                                                |
| `whatsapp`    | `#25D366` | Botão flutuante                                                    |

- Vermelho como preenchimento leva `text-on-accent`. Vermelho como texto ou ícone usa **`text-accent-deep`**, nunca `text-accent` (não passa AA).
- `.on-accent` (anel de foco preto) em fundo vermelho; `.on-light` (anel vermelho escuro) em fundo de papel.

### Tipografia

- Tudo em **Schibsted Grotesk** (`font-display` = `font-sans`). Títulos em `font-extrabold` com tracking negativo (`-0.035em`); nada condensado.
- **Martian Mono** (`font-mono`) só onde o conteúdo é código ou nome de tecnologia: os chips. Rótulos, datas e status ficam na fonte principal, sem caixa alta.
- Fontes do Google com `display=swap`, carregadas sem bloquear (preload + onload).
- O H1 tem 3 linhas `nowrap` (a última vira a tarja vermelha) e usa `min(80px, 12vw - 4px)`: cabe linha de até ~15 caracteres a partir de 320px.

### Raio e sombra

`rounded-sm` 4px (chips) · `rounded-md` 6px (botões, inputs) · `rounded-lg` 8px (cards). Sombras: `shadow-hard-sm` (3px), `shadow-hard` (5px), `shadow-hard-lg` (8px). Sombra vermelha só no card do emprego atual e na foto do Sobre.

### Classes globais (`index.css`, `@layer components`)

- `.btn` + `.btn-primary` (vermelho) / `.btn-outline` (papel) / `.btn-dark` (tinta) / `.btn-whatsapp`; `.btn-lg` só nos CTAs do hero. Sempre usar `.btn` junto.
- `.section-label`: subtítulo de bloco dentro de uma seção (ex.: "Formação e cursos"), na fonte principal
- `.card`: card com contorno e sombra dura; `.card-hover` só acende a borda vermelha
- `.chip` (mono) e `.chip-accent` (vermelho, usado no selo "Destaque")
- `.link-accent`: link vermelho-escuro sublinhado, sem seta
- `.sticker` + `.sticker-pop`: adesivos do hero (inclinação via `--tilt`, ganham `.on` ao "colar")
- `.on-accent` / `.on-light`: anel de foco em fundo vermelho / de papel

### Padrões de layout

- Use `<Section id tone>` + `<SectionHeader id title>`; o `h2` recebe `id="{id}-title"` e a seção usa `aria-labelledby`. `tone="surface"` adiciona contorno `ink` em cima e embaixo. Toda seção recebe `tone` do `App`.
- Títulos de seção são uma frase só, na cor do texto: **sem** trecho final colorido e **sem** rótulo em caixa alta acima.
- Numeração (1, 2, 3) só em sequência de verdade (o Processo). Listas sem ordem não levam número.
- Vermelho fica para o que importa: botão principal, tarja do H1, 1º adesivo, filtro ativo, destaque de projeto e a sombra do emprego atual.
- Gutter: `px-4` (16px) no mobile, `sm:px-6`. Largura máxima `1200px`.
- Mobile-first; conferir 320px, 375px, 768px e 1280px sem scroll horizontal.
- Estilo com utilitários Tailwind. Evitar `style={{}}`, exceto valores dinâmicos (ex.: `animationDelay`, `--tilt`).

## Deploy (Vercel)

`vercel.json` define install/build com pnpm, cache imutável em `/assets`, headers de segurança e o redirect `/projetos` → `/#projetos`. Arquivos estáticos ficam em `public/` (`curriculo.pdf`, `og-image.png`, `icon.svg`, `sitemap.xml`, `robots.txt`). Ao mudar conteúdo relevante, atualizar `lastmod` no `sitemap.xml`.
