# ConcreFuji — Site (Protótipo de Modernização)

Site estático modernizado da ConcreFuji Tecnologia, em estética editorial técnica.
Protótipo navegável com 6 páginas: Home, Controle Tecnológico, Ensaios de Materiais,
Engenharia Diagnóstica, Sobre e Contato.

## Como publicar (cPanel ou qualquer hosting estático)

1. Faça upload de **todos** os arquivos desta pasta para `public_html/` (ou raiz do site)
2. Acesse o domínio — `index.html` é a home

Não precisa de Node, banco de dados ou build server. É HTML, CSS e JS puro
(JSX compilado no navegador via Babel CDN).

## Estrutura

- `index.html` — entrada do site, carrega todos os scripts
- `styles.css` — design system editorial técnico (cores, tipografia, componentes)
- `chrome.jsx` — Header, Footer, FAB, CTA Strip, Accordion (componentes compartilhados)
- `home.jsx` — página inicial (hero editorial + stats + serviços + normas + clientes + form)
- `service-pages.jsx` — Controle Tecnológico, Ensaios e Engenharia Diagnóstica
- `sobre-contato.jsx` — páginas Sobre e Contato
- `app.jsx` — router por hash (#home, #controle, #ensaios, etc.)

## Stack técnico

- **HTML/CSS/JS** estático (sem build, sem Node)
- **React 18** via CDN
- **Babel Standalone** para compilar o JSX no navegador
- **Fontes:** Barlow Condensed (display), Barlow (corpo), JetBrains Mono (dados técnicos)

## Notas para produção

⚠️ **Babel no navegador**: o site compila o JSX em runtime. Para produção real,
o ideal é pré-compilar o JSX para JS puro (com esbuild ou similar) e remover o
script do Babel — isso elimina ~1–2s de carregamento inicial.

⚠️ **Imagens externas**: as fotos vêm do Unsplash via CDN. Para produção,
substitua por fotos reais da ConcreFuji hospedadas no próprio servidor.

## Estado do protótipo

- ✅ Navegação entre 6 páginas (hash router)
- ✅ Accordions de serviços com fichas técnicas (norma · prazo · entregável)
- ✅ Formulários de contato com validação básica e estado "enviado"
- ✅ WhatsApp FAB persistente
- ⏳ Versão mobile (otimizado para desktop no momento)
- ⏳ Página de cases/portfolio
- ⏳ Área de clientes (login)

---
© 2026 ConcreFuji Tecnologia
