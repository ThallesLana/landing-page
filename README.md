# thalles-lana.dev

Landing page pessoal de **Thalles Fernandes de Lana**, desenvolvedor full stack: sistemas web completos, da ideia ao sistema em produção.

Página única, pré-renderizada no build e hidratada no navegador.

## Stack

Preact 10 · Vite 8 · TypeScript · Tailwind CSS 4 · ESLint + Prettier · pnpm · Vercel

## Rodando

```bash
pnpm install
pnpm dev        # http://localhost:8080
pnpm build      # gera dist/ com HTML pré-renderizado
pnpm preview
pnpm check      # typecheck + lint + formatação
```

## Onde mexer

| Quero mudar…                             | Arquivo                  |
| ---------------------------------------- | ------------------------ |
| Textos, experiência, projetos, stack     | `src/content/pt-BR/*.ts` |
| WhatsApp, e-mail, links, flags, serviços | `src/config.ts`          |
| Cores, fontes, botões                    | `src/index.css`          |
| Currículo                                | `public/curriculo.pdf`   |
| SEO, Open Graph, Schema.org              | `index.html`             |

Detalhes de arquitetura e design system em [`CLAUDE.md`](./CLAUDE.md).
