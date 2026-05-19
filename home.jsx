// home.jsx — ConcreFuji Home (editorial técnico, contact-led)

const IMG = {
  hero:        'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1600&q=80&auto=format&fit=crop',
  controle:    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80&auto=format&fit=crop',
  ensaios:     'https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?w=1200&q=80&auto=format&fit=crop',
  diagnostica: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80&auto=format&fit=crop',
  team:        'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?w=1200&q=80&auto=format&fit=crop',
  lab:         'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&q=80&auto=format&fit=crop',
  process:     'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80&auto=format&fit=crop',
};

function Home({ onNav }) {
  const [contact, setContact] = React.useState({ nome: '', email: '', telefone: '', obra: '', mensagem: '' });
  const [sent, setSent] = React.useState(false);

  return (
    <main>

      {/* ───── HERO ───── */}
      <section className="container-wide" style={{ paddingTop: 56, paddingBottom: 56 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 64, alignItems: 'end' }}>
          {/* Left — editorial type */}
          <div style={{ paddingBottom: 16 }}>
            <div className="eyebrow" style={{ marginBottom: 28 }}>
              Est. 2008 · Fortaleza / NE Brasil
            </div>
            <h1 className="h-mega" style={{ marginBottom: 32 }}>
              Concreto<br/>
              com&nbsp;critério<br/>
              <span style={{ color: 'var(--cf-red)' }}>técnico.</span>
            </h1>
            <p className="lede" style={{ maxWidth: 460, marginBottom: 36 }}>
              Controle tecnológico, ensaios de materiais e engenharia diagnóstica
              para obras que não admitem improviso.
            </p>
            <div style={{ display: 'flex', gap: 12, marginBottom: 32 }}>
              <button className="btn btn-primary btn-lg" onClick={() => onNav('contato')}>
                Solicitar orçamento <span className="arrow">→</span>
              </button>
              <button className="btn btn-outline btn-lg" onClick={() => onNav('controle')}>
                Nossos serviços
              </button>
            </div>
            <div className="caption" style={{ display: 'flex', gap: 24, paddingTop: 24, borderTop: '1px solid var(--hair)' }}>
              <span>↳ NBR 6118 · 12655 · 5739 · 8522</span>
              <span style={{ color: 'var(--ink-4)' }}>conformidade integral</span>
            </div>
          </div>

          {/* Right — figure */}
          <div>
            <Fig
              src={IMG.hero}
              alt="Estrutura de concreto armado em obra"
              ratio="4 / 5"
              caption="FIG. 01 — Inspeção de pilares estruturais, Edifício Sextante, Fortaleza/CE"
              meta="03 / 2026"
            />
          </div>
        </div>
      </section>

      {/* ───── STATS BAND ───── */}
      <section className="container-wide" style={{ paddingTop: 24, paddingBottom: 80 }}>
        <div className="rule-thick" style={{ marginBottom: 40 }}></div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
          {[
            { n: '18', u: 'anos', l: 'no mercado de tecnologia em concreto' },
            { n: '1.200+', u: '',  l: 'obras atendidas no Nordeste' },
            { n: '47k', u: 'cps', l: 'corpos-de-prova ensaiados em laboratório' },
            { n: '24', u: 'h',   l: 'tempo médio de resposta a chamado' },
          ].map((s, i) => (
            <div key={i}>
              <div className="serial" style={{ marginBottom: 12 }}>0{i + 1} / 04</div>
              <div className="stat-num">{s.n}<span className="unit">{s.u}</span></div>
              <div className="stat-label" style={{ maxWidth: 200 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ───── 01 — QUEM SOMOS ───── */}
      <section className="container-wide" style={{ paddingBottom: 96 }}>
        <SectionHead
          num="01 / 05"
          eyebrow="Quem somos"
          title="Laboratório de engenharia, não fábrica de laudo."
        />
        <div style={{ display: 'grid', gridTemplateColumns: '60px 1.6fr 1fr', gap: 16, alignItems: 'start' }}>
          <div></div>
          <div>
            <p className="lede" style={{ marginBottom: 28 }}>
              A ConcreFuji acompanha o concreto desde a dosagem até a vida útil da estrutura.
              Treinamos a equipe de betoneiros, montamos laboratório no próprio canteiro
              quando necessário e entregamos cada parecer com método científico
              — não com modelo padronizado.
            </p>
            <p className="body" style={{ marginBottom: 20 }}>
              Atendemos construtoras, incorporadoras, escritórios de projeto e gestores
              públicos em todo o Nordeste. Nosso quadro técnico combina engenheiros
              civis, tecnologistas e mestres de obra com experiência de campo — uma
              composição rara no setor e fundamental para diagnósticos confiáveis.
            </p>
            <a href="#sobre" onClick={e => { e.preventDefault(); onNav('sobre'); }} className="link link-red" style={{ marginTop: 8 }}>
              Conheça nossa metodologia
              <span className="arrow">→</span>
            </a>
          </div>
          {/* Marginalia */}
          <aside style={{ borderLeft: '1px solid var(--hair-2)', paddingLeft: 24 }}>
            <div className="kicker" style={{ marginBottom: 16 }}>— Ficha técnica</div>
            <dl style={{ fontFamily: 'var(--f-mono)', fontSize: 12, lineHeight: 1.65 }}>
              {[
                ['Fundação', '2008'],
                ['Sede',     'Fortaleza / CE'],
                ['Filiais',  'Recife, Natal, Teresina'],
                ['Equipe',   '42 profissionais'],
                ['Frota',    '11 veículos técnicos'],
                ['Laudos/ano', '~ 380 pareceres'],
                ['ABNT',     'Conforme NBR 6118'],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid var(--hair)' }}>
                  <dt style={{ color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.1em', fontSize: 10 }}>{k}</dt>
                  <dd style={{ color: 'var(--ink)' }}>{v}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      {/* ───── 02 — SERVIÇOS ───── */}
      <section className="bg-paper-2" style={{ padding: '96px 0' }}>
        <div className="container-wide">
          <SectionHead
            num="02 / 05"
            eyebrow="Áreas de atuação"
            title="Três frentes, um único método."
            lead="Cada serviço é planejado em visita prévia, conduzido por engenheiro responsável e documentado segundo as normas vigentes."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {[
              {
                num: 'A',
                img: IMG.controle,
                title: 'Controle Tecnológico de Concreto',
                body: 'Acompanhamento integral da concretagem — da dosagem racional ao ensaio de ruptura. Treinamento de equipe e laboratório no canteiro quando o ritmo da obra exige.',
                items: ['Dosagem de Concreto', 'Parede de Concreto', 'Alvenaria Industrial', 'Argamassa', 'Dosagem Racional'],
                key: 'controle',
              },
              {
                num: 'B',
                img: IMG.ensaios,
                title: 'Ensaios de Materiais',
                body: 'Avaliação mecânica e física não-destrutiva ou semidestrutiva, com equipamento calibrado e relatório técnico assinado por responsável técnico.',
                items: ['Esclerometria', 'PIT (Pile Integrity)', 'Ultrassom', 'Granulometria', 'Extração de Testemunho', 'Módulo de Elasticidade'],
                key: 'ensaios',
              },
              {
                num: 'C',
                img: IMG.diagnostica,
                title: 'Engenharia Diagnóstica',
                body: 'Investigação de manifestações patológicas, inspeção predial e perícia técnica em parceria com os melhores nomes locais e nacionais do setor.',
                items: ['Análise Estrutural', 'Inspeção Predial', 'Laudo de Vizinhança', 'Perícia Técnica', 'Recuperação Estrutural'],
                key: 'diagnostica',
              },
            ].map(s => (
              <article key={s.key} style={{ display: 'flex', flexDirection: 'column' }}>
                <Fig src={s.img} alt={s.title} ratio="4 / 3" />
                <div style={{ paddingTop: 24 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 14 }}>
                    <span className="mono" style={{ fontSize: 11, letterSpacing: '.12em', color: 'var(--cf-red)' }}>SERVIÇO {s.num}</span>
                    <span style={{ flex: 1, height: 1, background: 'var(--hair-2)' }}></span>
                  </div>
                  <h3 className="h-2" style={{ marginBottom: 14, color: 'var(--ink)' }}>{s.title}</h3>
                  <p className="body" style={{ marginBottom: 16 }}>{s.body}</p>
                  <ul style={{ listStyle: 'none', marginBottom: 20, borderTop: '1px solid var(--hair)' }}>
                    {s.items.map((it, i) => (
                      <li key={i} className="mono" style={{
                        fontSize: 12, letterSpacing: '.04em', color: 'var(--ink-2)',
                        padding: '8px 0', borderBottom: '1px solid var(--hair)',
                        display: 'flex', justifyContent: 'space-between'
                      }}>
                        <span>{it}</span>
                        <span style={{ color: 'var(--ink-4)' }}>{String(i + 1).padStart(2, '0')}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={'#' + s.key} onClick={e => { e.preventDefault(); onNav(s.key); }} className="link link-red">
                    Ver detalhes
                    <span className="arrow">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 03 — NORMAS ───── */}
      <section className="container-wide" style={{ padding: '96px 0' }}>
        <SectionHead
          num="03 / 05"
          eyebrow="Normas técnicas"
          title="Conformidade integral com a ABNT."
          lead="Todos os serviços são executados em estrita observância às normas brasileiras vigentes. Abaixo, as principais referências aplicáveis ao nosso escopo."
        />
        <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: 16 }}>
          <div></div>
          <div>
            <ul className="norm-list" style={{ listStyle: 'none' }}>
              {[
                ['NBR 6118',  'Projeto de estruturas de concreto'],
                ['NBR 12655', 'Concreto — Preparo, controle e recebimento'],
                ['NBR 5739',  'Ensaio de compressão de corpos-de-prova cilíndricos'],
                ['NBR 8522',  'Determinação do módulo estático de elasticidade'],
                ['NBR 7584',  'Esclerometria — Avaliação da dureza superficial'],
                ['NBR 8802',  'Ultrassom — Velocidade de propagação em concreto'],
                ['NBR 13860', 'Argamassa para alvenaria e revestimento'],
                ['NBR 16722', 'Estacas — Ensaio de integridade (PIT)'],
                ['NBR 9575',  'Impermeabilização — Projeto'],
                ['NBR 5674',  'Manutenção de edificações — Procedimento'],
                ['NBR 15575', 'Edificações habitacionais — Desempenho'],
                ['NBR 16747', 'Inspeção predial — Diretrizes'],
              ].map(([code, desc]) => (
                <li key={code} className="norm-item">
                  <span className="code">{code}</span>
                  <span className="desc">{desc}</span>
                </li>
              ))}
            </ul>
            <p className="caption" style={{ marginTop: 24, color: 'var(--ink-4)' }}>
              ↳ Acervo técnico revisado anualmente. Lista parcial — solicite a íntegra com nosso comercial.
            </p>
          </div>
        </div>
      </section>

      {/* ───── 04 — CLIENTES ───── */}
      <section className="bg-paper-2" style={{ padding: '96px 0' }}>
        <div className="container-wide">
          <SectionHead
            num="04 / 05"
            eyebrow="Confiança técnica"
            title="Quem entrega obras conosco."
            lead="Construtoras, incorporadoras, escritórios de projeto e órgãos públicos que escolheram a ConcreFuji para os ensaios e o diagnóstico de suas estruturas."
          />
          <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: 16 }}>
            <div></div>
            <div>
              <div className="logo-wall">
                {[
                  'COLMEIA', 'DIAGONAL', 'MARQUISE', 'C. ROLIM',
                  'FUJITA', 'BS DESIGN', 'PORTO FREIRE', 'MOURA DUBEUX',
                  'CONSTRUFORT', 'TUPINAMBÁ', 'MFL ENG.', 'CIDADE 2000',
                ].map(name => (
                  <div key={name} className="logo-cell">{name}</div>
                ))}
              </div>
              <p className="caption" style={{ marginTop: 24, color: 'var(--ink-4)' }}>
                ↳ 1.200+ obras atendidas desde 2008. Lista parcial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── 05 — INLINE CONTACT (the primary CTA on the home) ───── */}
      <section className="container-wide" style={{ padding: '96px 0' }}>
        <SectionHead
          num="05 / 05"
          eyebrow="Falar conosco"
          title="Nos conte sobre sua obra."
        />
        <div style={{ display: 'grid', gridTemplateColumns: '60px 1.1fr 1fr', gap: 16, alignItems: 'start' }}>
          <div></div>

          {/* Form */}
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            style={{
              background: 'var(--paper-card)',
              border: '1px solid var(--hair-2)',
              padding: 48,
            }}
          >
            {sent ? (
              <div style={{ padding: '40px 0', textAlign: 'left' }}>
                <div className="eyebrow eyebrow-red" style={{ marginBottom: 16 }}>— Mensagem enviada</div>
                <h3 className="h-2" style={{ marginBottom: 16 }}>Recebemos seu contato.</h3>
                <p className="body" style={{ marginBottom: 28, maxWidth: 460 }}>
                  Nossa equipe comercial entrará em contato em até <strong>24h úteis</strong>.
                  Para urgências, acione o WhatsApp pelo botão verde.
                </p>
                <button type="button" className="link link-red" onClick={() => { setSent(false); setContact({ nome:'', email:'', telefone:'', obra:'', mensagem:'' }); }}>
                  Enviar outra mensagem
                  <span className="arrow">→</span>
                </button>
              </div>
            ) : (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                  <div className="form-field">
                    <label>Nome completo *</label>
                    <input required value={contact.nome} onChange={e => setContact({ ...contact, nome: e.target.value })} placeholder="Como devemos te chamar"/>
                  </div>
                  <div className="form-field">
                    <label>Empresa / Obra</label>
                    <input value={contact.obra} onChange={e => setContact({ ...contact, obra: e.target.value })} placeholder="Construtora ou nome do projeto"/>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                  <div className="form-field">
                    <label>E-mail *</label>
                    <input required type="email" value={contact.email} onChange={e => setContact({ ...contact, email: e.target.value })} placeholder="seu@email.com"/>
                  </div>
                  <div className="form-field">
                    <label>Telefone</label>
                    <input value={contact.telefone} onChange={e => setContact({ ...contact, telefone: e.target.value })} placeholder="(85) 9 0000-0000"/>
                  </div>
                </div>
                <div className="form-field">
                  <label>Como podemos ajudar? *</label>
                  <textarea required value={contact.mensagem} onChange={e => setContact({ ...contact, mensagem: e.target.value })} placeholder="Descreva brevemente o tipo de serviço, prazo e local da obra"></textarea>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12, gap: 16 }}>
                  <p className="caption" style={{ flex: 1 }}>
                    ↳ Resposta em até 24h úteis. Seus dados não são compartilhados.
                  </p>
                  <button type="submit" className="btn btn-primary btn-lg">
                    Enviar mensagem
                    <span className="arrow">→</span>
                  </button>
                </div>
              </>
            )}
          </form>

          {/* Contact metadata */}
          <aside style={{ paddingLeft: 24, borderLeft: '1px solid var(--hair-2)' }}>
            <div className="kicker" style={{ marginBottom: 12 }}>— Endereço</div>
            <p className="body" style={{ marginBottom: 28, lineHeight: 1.6 }}>
              R. Nunes Valente, 3840<br/>
              Joaquim Távora<br/>
              Fortaleza · CE · 60120-295
            </p>

            <div className="kicker" style={{ marginBottom: 12 }}>— Atendimento</div>
            <p className="body" style={{ marginBottom: 6 }}>+55 (85) 3333-0000</p>
            <p className="body" style={{ marginBottom: 28 }}>+55 (85) 9 9999-0000</p>

            <div className="kicker" style={{ marginBottom: 12 }}>— Horário</div>
            <p className="body" style={{ marginBottom: 28 }}>
              Seg. a Sex. · 8h às 18h<br/>
              Sáb. · 8h às 12h
            </p>

            <div className="kicker" style={{ marginBottom: 12 }}>— Cobertura</div>
            <p className="body">
              CE · PE · RN · PI · PB · MA · AL · SE · BA
            </p>
          </aside>
        </div>
      </section>

    </main>
  );
}

window.Home = Home;
window.IMG = IMG;
