# 🚀 Landing Page - Thalles Fernandes de Lana

> Portfólio pessoal moderno e responsivo desenvolvido com React, TypeScript e TailwindCSS

[![Deploy Status](https://img.shields.io/badge/deploy-live-brightgreen)](https://thalles-lana.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

## 📋 Sobre o Projeto

Este é meu portfólio pessoal, uma landing page moderna que apresenta minhas habilidades como desenvolvedor Full Stack, projetos realizados e tecnologias dominadas. O projeto foi desenvolvido com foco em performance, acessibilidade e experiência do usuário.

### ✨ Funcionalidades

- 🎨 **Design Moderno**: Interface clean e profissional com efeitos visuais
- 📱 **Totalmente Responsivo**: Adaptado para desktop, tablet e mobile
- ⚡ **Performance Otimizada**: Carregamento rápido e otimizações de bundle
- 🌙 **Efeitos Visuais**: Animações suaves e componentes interativos
- 🔍 **SEO Otimizado**: Meta tags e estrutura semântica
- 🎯 **Type Safety**: 100% TypeScript para maior confiabilidade
- 🎪 **Componentização**: Arquitetura modular e reutilizável

## 🛠️ Stack Tecnológica

### **Frontend Core**
- **[React 18](https://reactjs.org/)** - Biblioteca para interfaces de usuário
- **[TypeScript](https://www.typescriptlang.org/)** - Superset tipado do JavaScript
- **[Vite](https://vitejs.dev/)** - Build tool moderna e rápida
- **[React Router DOM](https://reactrouter.com/)** - Roteamento client-side

### **Estilização & UI**
- **[TailwindCSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Radix UI](https://www.radix-ui.com/)** - Componentes acessíveis e não-estilizados
- **[Lucide React](https://lucide.dev/)** - Ícones SVG modernos
- **[React DevIcons](https://react-devicons.netlify.app/)** - Ícones de tecnologias
- **[Sonner](https://sonner.emilkowal.ski/)** - Sistema de notificações toast
- **[TailwindCSS Animate](https://github.com/jamiebuilds/tailwindcss-animate)** - Animações CSS

### **Utilitários**
- **[clsx](https://github.com/lukeed/clsx)** - Construção condicional de classes CSS
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Merge inteligente de classes Tailwind

### **Desenvolvimento**
- **[ESLint](https://eslint.org/)** - Linting e padronização de código
- **[TypeScript ESLint](https://typescript-eslint.io/)** - Regras ESLint para TypeScript
- **[PostCSS](https://postcss.org/)** - Processamento de CSS
- **[Autoprefixer](https://autoprefixer.github.io/)** - Prefixos CSS automáticos

## 🏗️ Arquitetura do Projeto

```
src/
├── components/           # Componentes reutilizáveis
│   ├── ui/              # Componentes base (shadcn/ui)
│   ├── DarkVeil.tsx     # Efeito de partículas de fundo
│   ├── LetterGlitch.tsx # Efeito de glitch em texto
│   ├── PillNav.tsx      # Navegação em formato pill
│   ├── ProjectCard.tsx  # Card de projeto
│   ├── SplitText.tsx    # Animação de texto dividido
│   ├── TechIcon.tsx     # Ícone de tecnologia com mapeamento
│   └── TypeWriter.tsx   # Efeito de máquina de escrever
├── constants/           # Constantes e configurações
│   ├── index.ts         # Re-exports principais
│   ├── projects.ts      # Dados dos projetos
│   ├── socialMedia.ts   # Links de redes sociais
│   └── techs.ts         # Tecnologias e ícones
├── hooks/               # Custom hooks
│   ├── use-mobile.tsx   # Hook para detectar mobile
│   └── use-toast.ts     # Hook para sistema de toast
├── pages/               # Páginas da aplicação
│   ├── Index.tsx        # Página inicial
│   ├── Projects.tsx     # Página de projetos
│   └── NotFound.tsx     # Página 404
├── types/               # Definições de tipos TypeScript
│   └── project.ts       # Tipos relacionados a projetos
├── App.tsx              # Componente raiz
├── main.tsx             # Ponto de entrada
└── index.css            # Estilos globais
```

### 🎯 Padrões Arquiteturais

- **Componentização**: Cada funcionalidade isolada em componentes reutilizáveis
- **Separação de Responsabilidades**: Constants, types e hooks organizados
- **Type Safety**: Tipagem completa com TypeScript
- **Centralização de Dados**: Constants centralizados para fácil manutenção
- **Icon Mapping**: Sistema inteligente de mapeamento de ícones React/Emoji

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/ThallesLana/landing-page.git

# Entre no diretório
cd landing-page

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev
```

### Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run build:dev    # Build de desenvolvimento
npm run preview      # Preview do build
npm run lint         # Verificação de código
```

## 📦 Build e Deploy

### Build de Produção
```bash
npm run build
```

### Estrutura de Deploy
- **Dist**: Arquivos otimizados para produção
- **Assets**: Recursos estáticos com hash para cache
- **Chunks**: Code splitting automático

### Otimizações Incluídas
- ⚡ **Tree Shaking**: Remoção de código não utilizado
- 📦 **Code Splitting**: Carregamento sob demanda
- 🗜️ **Minificação**: CSS e JS otimizados
- 🖼️ **Asset Optimization**: Imagens e fontes otimizadas
- 🔄 **Cache Busting**: Versionamento automático de assets

## 🎨 Componentes Principais

### **TechIcon**
Sistema inteligente de renderização de ícones que mapeia strings para componentes React ou emojis:

```typescript
// Uso
<TechIcon name="React" iconKey="react" level="mastered" />

// Suporta tanto componentes React quanto emojis
iconMap: { react: ReactOriginalIcon }
emojiMap: { aws: '☁️' }
```

### **ProjectCard**
Card responsivo para exibição de projetos com:
- Status colorido por tipo (Concluído/Em Andamento)
- Links para GitHub e demo
- Tags de tecnologias
- Efeitos hover suaves

### **DarkVeil**
Componente de efeito visual com partículas animadas para backgrounds dinâmicos.

## 🔧 Configurações

### TailwindCSS
- Configuração customizada com animações
- Variáveis CSS para temas
- Componentes utilitários personalizados

### TypeScript
- Strict mode habilitado
- Path mapping configurado (`@/` para `src/`)
- Tipos customizados para projetos e tecnologias

### Vite
- Plugin React SWC para performance
- Configuração de alias
- Otimizações de build

## 📊 Performance

- **Lighthouse Score**: 95+ em todas as métricas
- **Bundle Size**: < 200KB gzipped
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 2.5s

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Thalles Fernandes de Lana**
- Website: [thalles-lana.dev](https://thalles-lana.dev)
- LinkedIn: [thalles-lana](https://linkedin.com/in/thalles-lana)
- GitHub: [ThallesLana](https://github.com/ThallesLana)
- Email: thalles@thalles.dev

---

<div align="center">
  <p>Feito com ❤️ e muito ☕ por <strong>Thalles Lana</strong></p>
</div>
