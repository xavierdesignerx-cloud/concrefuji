// chrome.jsx — Header, Footer, Fab, common building blocks
// All components export to window for cross-script access.

const { useState, useEffect, useRef } = React;

// ──────────────────────────────────────────────────────────────────
// Shared image with placeholder fallback
function Fig({ src, alt, ratio, caption, meta, className = '', children, style }) {
  const [err, setErr] = useState(false);
  return (
    <figure className={className} style={style}>
      <div
        className={'fig' + (err ? ' placeholder' : '')}
        style={{ aspectRatio: ratio || '3 / 2' }}
      >
        {!err && src && <img src={src} alt={alt || ''} onError={() => setErr(true)} />}
        {err && (
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '.1em',
            color: 'rgba(255,255,255,.4)', textTransform: 'uppercase',
          }}>{alt || '[ FIG ]'}</div>
        )}
        {children}
      </div>
      {(caption || meta) && (
        <figcaption className="fig-cap">
          <span>{caption}</span>
          {meta && <span className="meta">{meta}</span>}
        </figcaption>
      )}
    </figure>
  );
}

// ──────────────────────────────────────────────────────────────────
// Brand mark (used in nav + footer)
function BrandMark({ size = 28 }) {
  return (
    <span className="brand-mark" style={{ width: size, height: size }} aria-hidden>
    </span>
  );
}

// ──────────────────────────────────────────────────────────────────
// Top utility bar
function TopBar() {
  return (
    <div className="topbar">
      <div>
        <span className="dot"></span>
        ConcreFuji Tecnologia · Eng. de Concreto desde 2008
      </div>
      <div>
        <a href="#contato">+55 (85) 3333-0000</a>
        <span className="sep">/</span>
        <a href="#contato">contato@concrefuji.com.br</a>
        <span className="sep">/</span>
        <a href="#area-clientes">Área Clientes</a>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────
// Main nav
function Nav({ current, onNav }) {
  const links = [
    { id: 'home',         label: 'Início' },
    { id: 'controle',     label: 'Controle Tecnológico' },
    { id: 'ensaios',      label: 'Ensaios de Materiais' },
    { id: 'diagnostica',  label: 'Engenharia Diagnóstica' },
    { id: 'sobre',        label: 'Sobre' },
    { id: 'contato',      label: 'Contato' },
  ];
  return (
    <nav className="nav">
      <a href="#home" className="brand" onClick={(e) => { e.preventDefault(); onNav('home'); }}>
        <BrandMark />
        <span className="brand-gray">Concre</span>
        <span className="brand-red">Fuji</span>
      </a>
      <div className="nav-links">
        {links.slice(1).map(l => (
          <a key={l.id} href={'#' + l.id}
             className={'nav-link ' + (current === l.id ? 'active' : '')}
             onClick={(e) => { e.preventDefault(); onNav(l.id); }}>
            {l.label}
          </a>
        ))}
      </div>
      <div className="nav-cta">
        <button className="btn btn-primary btn-sm" onClick={() => onNav('contato')}>
          Solicitar orçamento
        </button>
      </div>
    </nav>
  );
}

// ──────────────────────────────────────────────────────────────────
// Footer
function Footer({ onNav }) {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">
            <span className="gray">Concre</span><span className="red">Fuji</span>
          </div>
          <div style={{ color: 'rgba(255,255,255,.65)', fontSize: 14, lineHeight: 1.65, maxWidth: 280 }}>
            Tecnologia em concreto, engenharia diagnóstica e ensaios de materiais.
            Atendemos obras em todo o Nordeste com rigor técnico e atendimento personalizado.
          </div>
          <div className="row" style={{ gap: 8, marginTop: 24 }}>
            <button className="btn btn-outline-white btn-sm" onClick={() => onNav('contato')}>WhatsApp</button>
            <button className="btn btn-outline-white btn-sm" onClick={() => onNav('contato')}>Fale conosco</button>
          </div>
        </div>

        <div>
          <div className="footer-heading">Serviços</div>
          <a className="footer-link" href="#controle" onClick={e => { e.preventDefault(); onNav('controle'); }}>Controle Tecnológico</a>
          <a className="footer-link" href="#ensaios" onClick={e => { e.preventDefault(); onNav('ensaios'); }}>Ensaios de Materiais</a>
          <a className="footer-link" href="#diagnostica" onClick={e => { e.preventDefault(); onNav('diagnostica'); }}>Engenharia Diagnóstica</a>
          <a className="footer-link" href="#">Treinamento de equipes</a>
          <a className="footer-link" href="#">Laboratório no canteiro</a>
        </div>

        <div>
          <div className="footer-heading">Empresa</div>
          <a className="footer-link" href="#sobre" onClick={e => { e.preventDefault(); onNav('sobre'); }}>Sobre</a>
          <a className="footer-link" href="#">Equipe</a>
          <a className="footer-link" href="#">Cases</a>
          <a className="footer-link" href="#">Normas técnicas</a>
          <a className="footer-link" href="#">Área de clientes</a>
        </div>

        <div>
          <div className="footer-heading">Contato</div>
          <div style={{ fontSize: 14, color: 'rgba(255,255,255,.85)', lineHeight: 1.85 }}>
            R. Nunes Valente, 3840<br/>
            Joaquim Távora<br/>
            Fortaleza · CE · 60120-295
          </div>
          <div style={{ marginTop: 16, fontFamily: 'var(--f-mono)', fontSize: 13, color: '#fff', letterSpacing: '.02em' }}>
            +55 (85) 3333-0000<br/>
            +55 (85) 9 9999-0000
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2008–2026 ConcreFuji Tecnologia LTDA · CNPJ 00.000.000/0001-00</span>
        <span>Fortaleza · Recife · Natal · João Pessoa · Teresina</span>
      </div>
    </footer>
  );
}

// ──────────────────────────────────────────────────────────────────
// WhatsApp FAB
function Fab() {
  return (
    <a href="#contato" className="fab" aria-label="WhatsApp">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.04 2.003c-5.46 0-9.9 4.43-9.9 9.88 0 1.74.45 3.43 1.32 4.93l-1.4 5.13 5.27-1.38c1.45.79 3.08 1.2 4.71 1.2 5.46 0 9.9-4.43 9.9-9.88 0-2.64-1.03-5.12-2.9-6.98a9.83 9.83 0 0 0-7-2.9zm0 18.05a8.18 8.18 0 0 1-4.17-1.14l-.3-.18-3.13.82.83-3.05-.2-.31a8.16 8.16 0 0 1-1.25-4.31c0-4.53 3.7-8.21 8.22-8.21 2.2 0 4.26.86 5.81 2.41a8.17 8.17 0 0 1 2.41 5.8c-.01 4.54-3.7 8.17-8.22 8.17zm4.5-6.13c-.25-.12-1.47-.72-1.69-.8-.23-.08-.39-.12-.55.13-.16.24-.63.8-.78.96-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.14.16-.24.24-.4.08-.16.04-.31-.02-.43-.06-.13-.55-1.33-.76-1.83-.2-.48-.4-.41-.55-.42l-.47-.01c-.16 0-.42.06-.65.31-.22.25-.85.83-.85 2.02 0 1.19.87 2.34.99 2.5.13.16 1.72 2.62 4.17 3.67.58.25 1.04.4 1.39.51.58.18 1.11.16 1.53.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.1-.22-.17-.47-.29z"/>
      </svg>
    </a>
  );
}

// ──────────────────────────────────────────────────────────────────
// CTA Strip — used on every inner page
function CtaStrip({ onNav }) {
  return (
    <section className="cta-strip">
      <div className="cta-strip-inner">
        <div>
          <div className="eyebrow" style={{ color: 'rgba(255,255,255,.55)', marginBottom: 20 }}>
            — Próximo passo
          </div>
          <h2>
            Garantir a segurança<br/>
            de sua obra <span className="red">nos motiva.</span>
          </h2>
        </div>
        <div>
          <p style={{ color: 'rgba(255,255,255,.75)', fontSize: 16, lineHeight: 1.6, marginBottom: 28 }}>
            Conversamos sobre seu projeto, visitamos o local quando necessário e
            entregamos uma proposta técnica clara — sem letras miúdas.
          </p>
          <div className="actions">
            <button className="btn btn-primary btn-lg" onClick={() => onNav('contato')}>
              Solicitar orçamento
              <span className="arrow">→</span>
            </button>
            <button className="btn btn-outline-white btn-lg">WhatsApp</button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────
// Section header with number + eyebrow + title
function SectionHead({ num, eyebrow, title, lead }) {
  return (
    <div className="section-head">
      <div className="num">{num}</div>
      <div className="titles">
        {eyebrow && <div className="eyebrow eyebrow-red">— {eyebrow}</div>}
        <h2 className="h-1" style={{ marginTop: 4 }}>{title}</h2>
        {lead && <p className="lede" style={{ marginTop: 16, maxWidth: 720 }}>{lead}</p>}
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────
// Accordion (single-open)
function Accordion({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="acc">
      {items.map((it, i) => (
        <div key={i} className={'acc-item ' + (open === i ? 'open' : '')}>
          <button className="acc-trigger" onClick={() => setOpen(open === i ? -1 : i)}>
            <span className="num">E.{String(i + 1).padStart(2, '0')}</span>
            <span className="title">{it.title}</span>
            <span className="plus" aria-hidden></span>
          </button>
          <div className="acc-body">
            <div className="num-spacer"></div>
            <p>{it.body}</p>
            <dl className="meta">
              {it.meta && it.meta.map((m, k) => (
                <React.Fragment key={k}>
                  <dt>{m.label}</dt>
                  <dd>{m.value}</dd>
                </React.Fragment>
              ))}
            </dl>
          </div>
        </div>
      ))}
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────
// Page chrome wrapper
function PageChrome({ current, onNav, children, cta = true }) {
  return (
    <>
      <TopBar />
      <Nav current={current} onNav={onNav} />
      {children}
      {cta && <CtaStrip onNav={onNav} />}
      <Footer onNav={onNav} />
      <Fab />
    </>
  );
}

Object.assign(window, {
  Fig, BrandMark, TopBar, Nav, Footer, Fab, CtaStrip,
  SectionHead, Accordion, PageChrome,
});
