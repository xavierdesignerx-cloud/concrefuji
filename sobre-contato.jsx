// sobre-contato.jsx — Sobre + Contato pages

// ──────────────────────────────────────────────────────────────────
// SOBRE
function Sobre({ onNav }) {
  return (
    <main>
      {/* Page header — editorial split */}
      <section className="container-wide" style={{ paddingTop: 56, paddingBottom: 80 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 64, alignItems: 'end' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 24 }}>
              <span style={{ color: 'var(--cf-red)' }}>Sobre</span>
              <span style={{ color: 'var(--ink-4)', margin: '0 10px' }}>/</span>
              <span>Quem somos · ConcreFuji desde 2008</span>
            </div>
            <h1 className="h-display" style={{ marginBottom: 28 }}>
              Engenharia de<br/>
              <span style={{ color: 'var(--cf-red)' }}>precisão</span> em concreto.
            </h1>
            <p className="lede" style={{ maxWidth: 540 }}>
              A ConcreFuji nasceu da inquietação de tornar o controle tecnológico
              do concreto em Fortaleza tão sério quanto os centros mais avançados
              do país — e em dezoito anos virou referência no Nordeste.
            </p>
          </div>
          <div>
            <Fig src={IMG.team} alt="Equipe ConcreFuji em campo" ratio="4 / 5"
                 caption="FIG. 05 — Equipe técnica em vistoria, sede Fortaleza"
                 meta="01 / 2026" />
          </div>
        </div>
      </section>

      <div className="container-wide"><div className="rule-thick"></div></div>

      {/* 01 — História */}
      <section className="container-wide" style={{ padding: '80px 0 96px' }}>
        <SectionHead num="01 / 04" eyebrow="História" title="Dezoito anos de obra." />
        <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: 16 }}>
          <div></div>
          <div>
            {[
              { year: '2008', title: 'Fundação',
                body: 'Eng. Hiroshi Fujita constitui a ConcreFuji em Fortaleza com foco em controle de concreto para o boom imobiliário do Nordeste.' },
              { year: '2013', title: 'Laboratório próprio',
                body: 'Inauguração do laboratório-sede com prensa Emic 200tf e instrumentação para ensaios não-destrutivos.' },
              { year: '2017', title: 'Expansão regional',
                body: 'Primeiras filiais em Recife e Natal. Conquista do primeiro contrato com construtora listada em bolsa.' },
              { year: '2020', title: 'Engenharia diagnóstica',
                body: 'Criação da unidade dedicada a inspeção predial, perícia e recuperação estrutural — resposta ao envelhecimento do parque construído.' },
              { year: '2024', title: 'Acreditação',
                body: 'Conclusão do ciclo de adequação ao NBR ISO/IEC 17025 para ensaios de compressão e módulo de elasticidade.' },
              { year: '2026', title: 'Hoje',
                body: '42 profissionais, 5 cidades, 1.200+ obras no portfólio. Laudos assinados por engenheiros peritos.' },
            ].map((row, i, arr) => (
              <div key={row.year} style={{
                display: 'grid', gridTemplateColumns: '120px 1fr',
                gap: 32, padding: '28px 0',
                borderTop: '1px solid var(--hair-2)',
                borderBottom: i === arr.length - 1 ? '1px solid var(--hair-2)' : 'none',
              }}>
                <div>
                  <div className="mono" style={{ fontSize: 12, letterSpacing: '.12em', color: 'var(--cf-red)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="h-2" style={{ fontSize: 36, marginTop: 8 }}>{row.year}</div>
                </div>
                <div>
                  <div className="h-3" style={{ marginBottom: 8 }}>{row.title}</div>
                  <p className="body">{row.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 — Princípios */}
      <section className="bg-paper-2" style={{ padding: '96px 0' }}>
        <div className="container-wide">
          <SectionHead num="02 / 04" eyebrow="Princípios" title="Como pensamos um laudo." />
          <div style={{ display: 'grid', gridTemplateColumns: '60px repeat(3, 1fr)', gap: 32 }}>
            <div></div>
            {[
              { n: '01', t: 'Visita primeiro, proposta depois.',
                b: 'Não emitimos preço sem ver o canteiro. Cada obra tem uma realidade técnica que só se entende em campo.' },
              { n: '02', t: 'Norma é piso, não teto.',
                b: 'Cumprir a ABNT é o mínimo. Nosso compromisso é com a vida útil real da estrutura — não com a documentação.' },
              { n: '03', t: 'Quem assina, comparece.',
                b: 'Todo laudo é defendido pessoalmente pelo engenheiro responsável. Sem terceirização, sem subcontratação.' },
            ].map(p => (
              <div key={p.n}>
                <div className="mono" style={{ fontSize: 12, letterSpacing: '.12em', color: 'var(--cf-red)', marginBottom: 24 }}>{p.n}</div>
                <h3 className="h-3" style={{ marginBottom: 16 }}>{p.t}</h3>
                <p className="body">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — Equipamento / Laboratório */}
      <section className="container-wide" style={{ padding: '96px 0' }}>
        <SectionHead num="03 / 04" eyebrow="Laboratório" title="O equipamento que sustenta o parecer."
                     lead="Instrumentação calibrada, rastreabilidade metrológica e renovação periódica do parque tecnológico." />
        <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr 1fr', gap: 32, alignItems: 'start' }}>
          <div></div>
          <Fig src={IMG.lab} alt="Laboratório ConcreFuji" ratio="4 / 3"
               caption="FIG. 06 — Prensa Emic 200tf, sala de ruptura, sede Fortaleza" meta="2025" />
          <div>
            <ul style={{ listStyle: 'none' }}>
              {[
                ['Prensa hidráulica Emic',          '200 tf · digital'],
                ['Esclerômetro Schmidt',            '4 unidades · RBC'],
                ['Equipamento ultrassom PUNDIT',    'PL-200 · Proceq'],
                ['Pile Integrity Tester',           'PIT-X · PDI Inc.'],
                ['Pacômetro Profometer',            '650 AI · Proceq'],
                ['Câmaras de cura saturada',        '3 câmaras · 200 cp'],
                ['Peneirador eletromagnético',      'Bertel · ABNT'],
                ['Software de gestão',              'LIMS proprietário'],
              ].map(([label, spec]) => (
                <li key={label} style={{
                  display: 'flex', justifyContent: 'space-between',
                  padding: '14px 0', borderBottom: '1px solid var(--hair)',
                }}>
                  <span style={{ fontFamily: 'var(--f-body)', fontSize: 15, color: 'var(--ink)' }}>{label}</span>
                  <span className="mono" style={{ fontSize: 12, color: 'var(--ink-3)' }}>{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 04 — Stats */}
      <section className="bg-paper-2" style={{ padding: '96px 0' }}>
        <div className="container-wide">
          <SectionHead num="04 / 04" eyebrow="Em números" title="A ConcreFuji em dados." />
          <div style={{ display: 'grid', gridTemplateColumns: '60px repeat(4, 1fr)', gap: 32 }}>
            <div></div>
            {[
              { n: '18',     u: 'anos', l: 'no mercado de tecnologia em concreto desde 2008' },
              { n: '1.200+', u: '',     l: 'obras atendidas em todo o Nordeste brasileiro' },
              { n: '47k',    u: 'cps',  l: 'corpos-de-prova ensaiados em laboratório próprio' },
              { n: '42',     u: '',     l: 'profissionais entre engenheiros, técnicos e analistas' },
            ].map((s, i) => (
              <div key={i}>
                <div className="stat-num">{s.n}<span className="unit">{s.u}</span></div>
                <div className="stat-label">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// ──────────────────────────────────────────────────────────────────
// CONTATO
function Contato({ onNav }) {
  const [form, setForm] = React.useState({
    nome: '', empresa: '', email: '', telefone: '',
    servico: '', obra: '', prazo: '', mensagem: '',
  });
  const [sent, setSent] = React.useState(false);

  return (
    <main>
      {/* Header */}
      <section className="container-wide" style={{ paddingTop: 56, paddingBottom: 64 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 64, alignItems: 'end' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 24 }}>
              <span style={{ color: 'var(--cf-red)' }}>Contato</span>
              <span style={{ color: 'var(--ink-4)', margin: '0 10px' }}>/</span>
              <span>Resposta em até 24h úteis</span>
            </div>
            <h1 className="h-display" style={{ marginBottom: 24 }}>
              Vamos conversar<br/>
              sobre <span style={{ color: 'var(--cf-red)' }}>sua obra.</span>
            </h1>
            <p className="lede" style={{ maxWidth: 560 }}>
              Conte-nos o tipo de serviço, local e prazo — montamos uma proposta
              técnica em até 24h úteis. Para urgências, prefira o WhatsApp.
            </p>
          </div>
          <div className="caption" style={{ color: 'var(--ink-3)', paddingBottom: 8 }}>
            <div className="kicker" style={{ marginBottom: 12 }}>— Telefone direto</div>
            <div style={{ fontFamily: 'var(--f-display)', fontSize: 32, fontWeight: 700, color: 'var(--ink)', letterSpacing: 0, lineHeight: 1 }}>
              (85) 3333-0000
            </div>
            <p style={{ marginTop: 16, lineHeight: 1.6 }}>
              R. Nunes Valente, 3840 · Joaquim Távora<br/>
              Fortaleza · CE · 60120-295
            </p>
          </div>
        </div>
      </section>

      <div className="container-wide"><div className="rule-thick"></div></div>

      {/* Form + sidebar */}
      <section className="container-wide" style={{ padding: '64px 0 96px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 64, alignItems: 'start' }}>
          {/* Form */}
          <form onSubmit={e => { e.preventDefault(); setSent(true); }}
                style={{ background: 'var(--paper-card)', border: '1px solid var(--hair-2)', padding: 56 }}>
            {sent ? (
              <div style={{ padding: '24px 0' }}>
                <div className="eyebrow eyebrow-red" style={{ marginBottom: 20 }}>— Mensagem enviada</div>
                <h2 className="h-1" style={{ marginBottom: 20 }}>Recebemos sua solicitação.</h2>
                <p className="body" style={{ marginBottom: 28, maxWidth: 480 }}>
                  Nossa equipe entrará em contato em até <strong>24h úteis</strong> com
                  uma proposta técnica preliminar e indicará a próxima etapa —
                  via e-mail e telefone informados.
                </p>
                <p className="caption" style={{ marginBottom: 32 }}>
                  ↳ Para urgências, acione o WhatsApp pelo botão verde no canto inferior.
                </p>
                <button type="button" className="link link-red"
                        onClick={() => { setSent(false); setForm({ nome:'', empresa:'', email:'', telefone:'', servico:'', obra:'', prazo:'', mensagem:'' }); }}>
                  Enviar outra mensagem <span className="arrow">→</span>
                </button>
              </div>
            ) : (
              <>
                <div className="eyebrow eyebrow-red" style={{ marginBottom: 8 }}>— Formulário</div>
                <h2 className="h-2" style={{ marginBottom: 32 }}>Solicitação de orçamento.</h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                  <div className="form-field">
                    <label>Nome completo *</label>
                    <input required value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })} placeholder="Como devemos te chamar"/>
                  </div>
                  <div className="form-field">
                    <label>Empresa / Construtora</label>
                    <input value={form.empresa} onChange={e => setForm({ ...form, empresa: e.target.value })} placeholder="Razão social"/>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                  <div className="form-field">
                    <label>E-mail *</label>
                    <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="seu@email.com"/>
                  </div>
                  <div className="form-field">
                    <label>Telefone / WhatsApp</label>
                    <input value={form.telefone} onChange={e => setForm({ ...form, telefone: e.target.value })} placeholder="(85) 9 0000-0000"/>
                  </div>
                </div>

                <div className="form-field">
                  <label>Tipo de serviço *</label>
                  <select required value={form.servico} onChange={e => setForm({ ...form, servico: e.target.value })}
                          style={{ background: 'transparent', appearance: 'none', backgroundImage: 'linear-gradient(45deg, transparent 50%, var(--ink-3) 50%), linear-gradient(135deg, var(--ink-3) 50%, transparent 50%)', backgroundPosition: 'calc(100% - 14px) 18px, calc(100% - 8px) 18px', backgroundSize: '6px 6px, 6px 6px', backgroundRepeat: 'no-repeat' }}>
                    <option value="">Selecione…</option>
                    <option>Controle Tecnológico de Concreto</option>
                    <option>Ensaios de Materiais (NDT / destrutivo)</option>
                    <option>Engenharia Diagnóstica / Inspeção</option>
                    <option>Laudo de Vizinhança</option>
                    <option>Perícia / Assistência técnica</option>
                    <option>Outro / não tenho certeza</option>
                  </select>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 24 }}>
                  <div className="form-field">
                    <label>Local da obra</label>
                    <input value={form.obra} onChange={e => setForm({ ...form, obra: e.target.value })} placeholder="Cidade / Estado"/>
                  </div>
                  <div className="form-field">
                    <label>Prazo desejado</label>
                    <input value={form.prazo} onChange={e => setForm({ ...form, prazo: e.target.value })} placeholder="Urgente · 30d · 90d"/>
                  </div>
                </div>

                <div className="form-field">
                  <label>Descrição do escopo *</label>
                  <textarea required rows={5} value={form.mensagem} onChange={e => setForm({ ...form, mensagem: e.target.value })}
                            placeholder="Descreva o tipo da obra, número de pavimentos, idade da estrutura, sintomas observados ou normas específicas que precisa atender."></textarea>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 16, gap: 24 }}>
                  <p className="caption" style={{ flex: 1 }}>
                    ↳ Ao enviar, você concorda em ser contatado pela equipe ConcreFuji.<br/>
                    &nbsp;&nbsp;&nbsp;Seus dados não são compartilhados com terceiros.
                  </p>
                  <button type="submit" className="btn btn-primary btn-lg">
                    Enviar solicitação <span className="arrow">→</span>
                  </button>
                </div>
              </>
            )}
          </form>

          {/* Side info */}
          <aside>
            <div className="kicker" style={{ marginBottom: 16 }}>— Contato direto</div>
            <ul style={{ listStyle: 'none', marginBottom: 40 }}>
              {[
                ['Comercial',  '+55 (85) 3333-0000'],
                ['WhatsApp',   '+55 (85) 9 9999-0000'],
                ['Engenharia', 'tecnico@concrefuji.com.br'],
                ['Comercial',  'comercial@concrefuji.com.br'],
                ['Imprensa',   'comunicacao@concrefuji.com.br'],
              ].map(([k, v]) => (
                <li key={k + v} style={{
                  display: 'flex', justifyContent: 'space-between',
                  gap: 16, padding: '14px 0', borderBottom: '1px solid var(--hair)',
                }}>
                  <span className="mono" style={{ fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ink-4)' }}>{k}</span>
                  <span style={{ fontFamily: 'var(--f-body)', fontSize: 14, color: 'var(--ink)' }}>{v}</span>
                </li>
              ))}
            </ul>

            <div className="kicker" style={{ marginBottom: 16 }}>— Sede</div>
            <p className="body" style={{ marginBottom: 8, lineHeight: 1.6 }}>
              R. Nunes Valente, 3840<br/>
              Joaquim Távora<br/>
              Fortaleza · CE · 60120-295
            </p>
            <p className="caption" style={{ marginBottom: 24 }}>
              ↳ Estacionamento próprio · Acesso PCD
            </p>

            {/* "Map" placeholder */}
            <div style={{
              aspectRatio: '4 / 3',
              background:
                'repeating-linear-gradient(0deg, transparent 0, transparent 39px, var(--hair) 39px, var(--hair) 40px),' +
                'repeating-linear-gradient(90deg, transparent 0, transparent 39px, var(--hair) 39px, var(--hair) 40px),' +
                'var(--paper-2)',
              border: '1px solid var(--hair-2)',
              position: 'relative',
              marginBottom: 8,
            }}>
              <div style={{
                position: 'absolute', top: '46%', left: '52%',
                width: 14, height: 14, borderRadius: '50%',
                background: 'var(--cf-red)',
                boxShadow: '0 0 0 6px rgba(183,28,28,.2)',
              }}></div>
              <div className="mono" style={{
                position: 'absolute', top: '52%', left: '58%',
                fontSize: 10, letterSpacing: '.1em', color: 'var(--ink)',
                background: 'var(--paper-card)', padding: '4px 8px',
              }}>↳ CONCREFUJI</div>
              <div className="mono" style={{
                position: 'absolute', bottom: 12, right: 12,
                fontSize: 10, color: 'var(--ink-4)',
              }}>-3.737° / -38.530°</div>
            </div>
            <p className="caption">↳ Mapa interativo · clique para abrir no Google Maps</p>

            <div style={{ marginTop: 40 }}>
              <div className="kicker" style={{ marginBottom: 12 }}>— Horário</div>
              <p className="body">Seg. a Sex. · 8h às 18h<br/>Sáb. · 8h às 12h</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

window.Sobre = Sobre;
window.Contato = Contato;
