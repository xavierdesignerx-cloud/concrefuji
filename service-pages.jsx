// service-pages.jsx — Controle Tecnológico, Ensaios de Materiais, Engenharia Diagnóstica

// ──────────────────────────────────────────────────────────────────
// Generic Service Page — pages config below
function ServicePage({ cfg, onNav, current }) {
  const otherServices = [
    { id: 'controle',    label: 'Controle Tecnológico',     code: 'A' },
    { id: 'ensaios',     label: 'Ensaios de Materiais',     code: 'B' },
    { id: 'diagnostica', label: 'Engenharia Diagnóstica',   code: 'C' },
  ].filter(s => s.id !== cfg.id);

  return (
    <main>
      {/* ───── PAGE HEADER ───── */}
      <section className="container-wide" style={{ paddingTop: 56, paddingBottom: 80 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 64, alignItems: 'end' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 24 }}>
              <span style={{ color: 'var(--cf-red)' }}>{cfg.code}</span>
              <span style={{ color: 'var(--ink-4)', margin: '0 10px' }}>/</span>
              <span>Áreas de atuação · serviço {cfg.code} de C</span>
            </div>
            <h1 className="h-display" style={{ marginBottom: 28 }}>
              {cfg.titleTop}<br/>
              <span style={{ color: 'var(--cf-red)' }}>{cfg.titleBottom}</span>
            </h1>
            <p className="lede" style={{ maxWidth: 540, marginBottom: 32 }}>{cfg.lede}</p>
            <div style={{ display: 'flex', gap: 12 }}>
              <button className="btn btn-primary btn-lg" onClick={() => onNav('contato')}>
                Solicitar este serviço <span className="arrow">→</span>
              </button>
              <a href="#solucoes" className="btn btn-outline btn-lg">Ver soluções abaixo</a>
            </div>
          </div>
          <div>
            <Fig src={cfg.heroImg} alt={cfg.titleTop + ' ' + cfg.titleBottom}
                 ratio="4 / 5"
                 caption={cfg.heroCaption}
                 meta={cfg.heroMeta} />
          </div>
        </div>
      </section>

      <div className="container-wide"><div className="rule-thick"></div></div>

      {/* ───── 01 — INTRO / METODOLOGIA ───── */}
      <section className="container-wide" style={{ padding: '80px 0 96px' }}>
        <SectionHead
          num="01 / 03"
          eyebrow="Metodologia"
          title={cfg.section01Title}
        />
        <div style={{ display: 'grid', gridTemplateColumns: '60px 1.5fr 1fr', gap: 16, alignItems: 'start' }}>
          <div></div>
          <div>
            {cfg.intro.map((p, i) => (
              <p key={i} className={i === 0 ? 'lede' : 'body'} style={{ marginBottom: 22 }}>{p}</p>
            ))}
          </div>
          <aside style={{ borderLeft: '1px solid var(--hair-2)', paddingLeft: 24 }}>
            <div className="kicker" style={{ marginBottom: 16 }}>— Ficha técnica</div>
            <dl style={{ fontFamily: 'var(--f-mono)', fontSize: 12, lineHeight: 1.6 }}>
              {cfg.fichaTecnica.map(([k, v]) => (
                <div key={k} style={{ padding: '8px 0', borderBottom: '1px solid var(--hair)' }}>
                  <dt style={{ color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.1em', fontSize: 10, marginBottom: 4 }}>{k}</dt>
                  <dd style={{ color: 'var(--ink)' }}>{v}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      {/* ───── 02 — SOLUÇÕES (accordion) ───── */}
      <section id="solucoes" className="bg-paper-2" style={{ padding: '96px 0' }}>
        <div className="container-wide">
          <SectionHead
            num="02 / 03"
            eyebrow="Soluções"
            title={cfg.section02Title}
            lead={cfg.section02Lead}
          />
          <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: 16 }}>
            <div></div>
            <Accordion items={cfg.accordion} />
          </div>
        </div>
      </section>

      {/* ───── 03 — NORMAS APLICÁVEIS ───── */}
      <section className="container-wide" style={{ padding: '96px 0' }}>
        <SectionHead
          num="03 / 03"
          eyebrow="Normativa"
          title="Normas técnicas aplicáveis."
          lead="Todos os procedimentos seguem rigorosamente as normas brasileiras vigentes."
        />
        <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: 16 }}>
          <div></div>
          <ul className="norm-list" style={{ listStyle: 'none' }}>
            {cfg.norms.map(([code, desc]) => (
              <li key={code} className="norm-item">
                <span className="code">{code}</span>
                <span className="desc">{desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───── CROSS-LINKS to other services ───── */}
      <section className="container-wide" style={{ paddingBottom: 96 }}>
        <div className="rule-thick" style={{ marginBottom: 48 }}></div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          <div>
            <div className="kicker" style={{ marginBottom: 12 }}>— Continuar lendo</div>
            <h3 className="h-2">Outras frentes da ConcreFuji.</h3>
          </div>
          <div></div>
          {otherServices.map(s => (
            <a key={s.id} href={'#' + s.id} onClick={e => { e.preventDefault(); onNav(s.id); }}
               style={{
                 borderTop: '1px solid var(--rule)',
                 padding: '28px 0',
                 display: 'grid',
                 gridTemplateColumns: '40px 1fr 28px',
                 gap: 16,
                 alignItems: 'center',
                 transition: 'padding .15s, color .15s',
                 textDecoration: 'none',
               }}
               className="hover-cross">
              <span className="mono" style={{ fontSize: 11, letterSpacing: '.12em', color: 'var(--cf-red)' }}>{s.code} →</span>
              <span className="h-3" style={{ color: 'var(--ink)' }}>{s.label}</span>
              <span className="mono" style={{ fontSize: 16, color: 'var(--ink-3)' }}>↗</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

// ──────────────────────────────────────────────────────────────────
// CONTROLE TECNOLÓGICO
const CFG_CONTROLE = {
  id: 'controle',
  code: 'A',
  titleTop: 'Controle tecnológico',
  titleBottom: 'do concreto.',
  lede: 'Da dosagem racional ao ensaio de ruptura — acompanhamos o concreto em cada estágio da obra, com método científico e equipe própria.',
  heroImg: IMG.controle,
  heroCaption: 'FIG. 02 — Concretagem monitorada em laje pré-moldada, Edifício Aurora',
  heroMeta: '12 / 2025',
  section01Title: 'O concreto não pode falhar — e isso se prova em laboratório.',
  intro: [
    'A durabilidade de toda obra está diretamente relacionada à qualidade do concreto. Mais que cumprir o protocolo de ensaio, nosso papel é antecipar não-conformidades antes que elas cheguem à estrutura final.',
    'Treinamos a equipe de betoneiros da sua obra para padronizar a moldagem e o adensamento, fazemos a checagem da dosagem informada pela central e, quando o ritmo de concretagem justifica, montamos laboratório no próprio canteiro — reduzindo o tempo de resposta de 28 dias para horas.',
    'Cada lote é documentado em relatório técnico assinado por responsável, com gráficos de evolução e indicação clara de aprovação ou rejeição. Sem subjetividade.',
  ],
  fichaTecnica: [
    ['Modalidade',    'Presencial / canteiro'],
    ['Resp. técnico', 'Eng. CREA-CE'],
    ['Prazo laudo',   '3 dias úteis'],
    ['Frequência',    'Diária / semanal'],
    ['Cobertura',     'CE · PE · RN · PI'],
    ['Normas',        'NBR 12655 · 5739'],
  ],
  section02Title: 'Soluções em controle tecnológico.',
  section02Lead: 'Selecione cada serviço para ver escopo, prazo e norma aplicável.',
  accordion: [
    {
      title: 'Dosagem de Concreto',
      body: 'Definição da proporção ideal de cimento, agregados, água e aditivos para atender ao fck especificado em projeto. Inclui ensaios prévios em laboratório, ajuste do traço em obra e relatório com curva de Abrams.',
      meta: [
        { label: 'Norma',      value: 'NBR 12655' },
        { label: 'Prazo',      value: '7 dias úteis' },
        { label: 'Entregável', value: 'Memorial de dosagem + traço aprovado' },
      ],
    },
    {
      title: 'Parede de Concreto',
      body: 'Acompanhamento de obras executadas em parede de concreto (sistema Walmaster, fôrma metálica). Controle da mistura, slump-test no recebimento e moldagem de corpos-de-prova por torre concretada.',
      meta: [
        { label: 'Norma',      value: 'NBR 16055' },
        { label: 'Prazo',      value: 'Contínuo' },
        { label: 'Entregável', value: 'Relatório semanal de produção' },
      ],
    },
    {
      title: 'Alvenaria Industrial',
      body: 'Controle de blocos cerâmicos e de concreto: resistência à compressão, absorção d\u2019água, dimensões e desvio de esquadro. Aplicável a edifícios em alvenaria estrutural.',
      meta: [
        { label: 'Norma',      value: 'NBR 15270 / 6136' },
        { label: 'Prazo',      value: '5 dias úteis' },
        { label: 'Entregável', value: 'Laudo de conformidade do lote' },
      ],
    },
    {
      title: 'Argamassa de Assentamento e Revestimento',
      body: 'Avaliação da argamassa industrializada ou produzida em obra — densidade, retenção de água, resistência à tração na flexão e à compressão.',
      meta: [
        { label: 'Norma',      value: 'NBR 13281 / 13860' },
        { label: 'Prazo',      value: '14 dias úteis' },
        { label: 'Entregável', value: 'Boletim de ensaio' },
      ],
    },
    {
      title: 'Dosagem Racional do Concreto',
      body: 'Otimização do consumo de cimento mantendo as propriedades mecânicas e a durabilidade — economia direta na obra e redução de pegada de carbono.',
      meta: [
        { label: 'Norma',      value: 'NBR 6118 / 12655' },
        { label: 'Prazo',      value: '21 dias úteis' },
        { label: 'Entregável', value: 'Estudo de traço otimizado + simulação' },
      ],
    },
  ],
  norms: [
    ['NBR 12655', 'Concreto — Preparo, controle, recebimento e aceitação'],
    ['NBR 5739',  'Ensaio de compressão de corpos-de-prova cilíndricos'],
    ['NBR 5738',  'Procedimento para moldagem e cura de corpos-de-prova'],
    ['NBR 8522',  'Determinação do módulo estático de elasticidade'],
    ['NBR 6118',  'Projeto de estruturas de concreto'],
    ['NBR 16055', 'Parede de concreto moldada no local'],
    ['NBR 13281', 'Argamassa para revestimento — Requisitos'],
    ['NBR 15270', 'Blocos cerâmicos para alvenaria estrutural'],
  ],
};

// ──────────────────────────────────────────────────────────────────
// ENSAIOS DE MATERIAIS
const CFG_ENSAIOS = {
  id: 'ensaios',
  code: 'B',
  titleTop: 'Ensaios',
  titleBottom: 'de materiais.',
  lede: 'A durabilidade da obra começa no comportamento mecânico dos seus materiais. Ensaios destrutivos e não-destrutivos com método e laudo de responsável técnico.',
  heroImg: IMG.ensaios,
  heroCaption: 'FIG. 03 — Ensaio de arrancamento em laje de fundação, canteiro Fortaleza Norte',
  heroMeta: '08 / 2025',
  section01Title: 'O ensaio certo, no momento certo, com a leitura correta.',
  intro: [
    'A durabilidade de toda obra de engenharia está diretamente relacionada à qualidade dos insumos utilizados e ao conhecimento de suas propriedades físicas e mecânicas. Conhecer é a primeira condição para garantir.',
    'Nesse contexto, a realização de ensaios para compreender o comportamento mecânico do material e suas características físicas são fundamentais para o atendimento da vida útil prevista em projeto. Cada ensaio é definido em conversa prévia, com visita ao local e indicação do procedimento mais adequado.',
    'Atendemos todas as normas técnicas vigentes e buscamos sempre a utilização racional de insumos. A escolha do ensaio respeita o orçamento da obra sem comprometer a confiabilidade do resultado.',
  ],
  fichaTecnica: [
    ['Modalidade',    'In loco + laboratório'],
    ['Tipo',          'Destrutivo / NDT'],
    ['Prazo laudo',   '3 a 14 dias úteis'],
    ['Equipamento',   'Calibrado · RBC'],
    ['Cobertura',     'CE · PE · RN · PI · MA'],
    ['Normas',        'NBR 5739 · 8522 · 7584'],
  ],
  section02Title: 'Soluções em ensaios de materiais.',
  section02Lead: 'Toque em cada ensaio para ver descrição, norma e prazo de entrega.',
  accordion: [
    {
      title: 'Ensaio de Arrancamento',
      body: 'Avalia a resistência de aderência de revestimentos, argamassas e elementos fixados em superfícies de concreto ou alvenaria. Indicado em recebimento de fachadas e revestimentos cerâmicos.',
      meta: [
        { label: 'Norma',      value: 'NBR 13528 / 13755' },
        { label: 'Prazo',      value: '5 dias úteis' },
        { label: 'Entregável', value: 'Relatório com 6 leituras por painel' },
      ],
    },
    {
      title: 'Ensaio PIT (Pile Integrity Test)',
      body: 'Avalia a integridade de estacas sem necessidade de escavação, utilizando ondas de impacto. Detecta variações de seção, fissuras transversais e descontinuidades ao longo do fuste.',
      meta: [
        { label: 'Norma',      value: 'NBR 16722 / ASTM D5882' },
        { label: 'Prazo',      value: '7 dias úteis' },
        { label: 'Entregável', value: 'Laudo + reflectograma por estaca' },
      ],
    },
    {
      title: 'Módulo de Elasticidade',
      body: 'Determina a rigidez do concreto endurecido — parâmetro essencial para análise estrutural, flechas e projetos de estruturas esbeltas.',
      meta: [
        { label: 'Norma',      value: 'NBR 8522' },
        { label: 'Prazo',      value: '7 dias úteis após 28 dias' },
        { label: 'Entregável', value: 'Boletim com Eci e Ecs por idade' },
      ],
    },
    {
      title: 'Ensaio de Esclerometria',
      body: 'Avaliação da dureza superficial do concreto por impacto — método não-destrutivo, rápido e ideal para mapear heterogeneidades em grandes áreas.',
      meta: [
        { label: 'Norma',      value: 'NBR 7584' },
        { label: 'Prazo',      value: '3 dias úteis' },
        { label: 'Entregável', value: 'Mapa de leituras + estimativa de fck' },
      ],
    },
    {
      title: 'Ensaio de Ultrassom',
      body: 'Mede a velocidade de propagação de ondas ultrassônicas — indica homogeneidade, presença de vazios, fissuras internas e estima módulo dinâmico.',
      meta: [
        { label: 'Norma',      value: 'NBR 8802' },
        { label: 'Prazo',      value: '5 dias úteis' },
        { label: 'Entregável', value: 'Relatório por elemento + mapa de defeitos' },
      ],
    },
    {
      title: 'Granulometria',
      body: 'Análise da distribuição de tamanhos das partículas de agregado miúdo e graúdo — controle de qualidade de recebimento na central e na obra.',
      meta: [
        { label: 'Norma',      value: 'NBR NM 248' },
        { label: 'Prazo',      value: '5 dias úteis' },
        { label: 'Entregável', value: 'Curva granulométrica + módulo de finura' },
      ],
    },
    {
      title: 'Extração de Testemunho de Concreto',
      body: 'Retirada de corpo-de-prova por sondagem rotativa para ensaios de resistência à compressão em estruturas já executadas — único método de aferição direta de fck efetivo.',
      meta: [
        { label: 'Norma',      value: 'NBR 7680' },
        { label: 'Prazo',      value: '10 dias úteis' },
        { label: 'Entregável', value: 'Laudo com fck estimado por região' },
      ],
    },
    {
      title: 'Controle Tecnológico de Pavers',
      body: 'Ensaios de resistência à compressão, absorção e abrasão para peças intertravadas de concreto — recebimento em obras de pavimentação.',
      meta: [
        { label: 'Norma',      value: 'NBR 9781' },
        { label: 'Prazo',      value: '14 dias úteis' },
        { label: 'Entregável', value: 'Laudo de conformidade do lote' },
      ],
    },
    {
      title: 'Monitoramento da Temperatura de Blocos de Fundação',
      body: 'Acompanhamento térmico em blocos de grande volume — controle do gradiente para prevenir fissuração de origem térmica em concreto massa.',
      meta: [
        { label: 'Norma',      value: 'ACI 207 / NBR 12655' },
        { label: 'Prazo',      value: 'Tempo real' },
        { label: 'Entregável', value: 'Painel de monitoramento + alertas' },
      ],
    },
  ],
  norms: [
    ['NBR 5739',  'Ensaio de compressão de corpos-de-prova cilíndricos'],
    ['NBR 8522',  'Módulo estático de elasticidade do concreto'],
    ['NBR 7584',  'Esclerometria — Dureza superficial'],
    ['NBR 8802',  'Ultrassom — Velocidade de propagação'],
    ['NBR 7680',  'Extração de testemunhos'],
    ['NBR 16722', 'Ensaio de integridade em estacas (PIT)'],
    ['NBR 13528', 'Resistência de aderência à tração'],
    ['NBR NM 248','Determinação da composição granulométrica'],
    ['NBR 9781',  'Peças de concreto para pavimentação'],
    ['NBR 13755', 'Revestimentos cerâmicos de fachadas'],
  ],
};

// ──────────────────────────────────────────────────────────────────
// ENGENHARIA DIAGNÓSTICA
const CFG_DIAGNOSTICA = {
  id: 'diagnostica',
  code: 'C',
  titleTop: 'Engenharia',
  titleBottom: 'diagnóstica.',
  lede: 'Quando a estrutura dá sinais — fissura, recalque, manifestação patológica — investigamos a causa, dimensionamos o risco e propomos a intervenção correta.',
  heroImg: IMG.diagnostica,
  heroCaption: 'FIG. 04 — Inspeção predial periódica, Edifício Residencial Atlântico Sul',
  heroMeta: '11 / 2025',
  section01Title: 'Diagnóstico antes da intervenção.',
  intro: [
    'Analisamos e diagnosticamos possíveis danos estruturais tendo sempre em mente a segurança da edificação e de seus usuários. Trabalhamos lado a lado com escritórios de cálculo, projetistas e o próprio proprietário para chegar à raiz da manifestação.',
    'Para a execução, contamos com a parceria dos melhores nomes locais e nacionais em recuperação estrutural, reforço com fibras de carbono, injeção de fissuras e tratamento de armaduras corroídas.',
    'Cada laudo inclui ensaios complementares quando necessários, parecer técnico fundamentado em norma e — sempre que aplicável — projeto de reparo com memorial e detalhamento executivo.',
  ],
  fichaTecnica: [
    ['Modalidade',    'Vistoria + ensaios'],
    ['Resp. técnico', 'Eng. perito CREA'],
    ['Prazo laudo',   '15 dias úteis'],
    ['Aplicação',     'Predial / vizinhança'],
    ['Cobertura',     'Nordeste'],
    ['Normas',        'NBR 16747 · 15575'],
  ],
  section02Title: 'Soluções em engenharia diagnóstica.',
  section02Lead: 'Selecione cada serviço para detalhes de escopo, prazo e norma aplicável.',
  accordion: [
    {
      title: 'Análise Estrutural',
      body: 'Avaliação da integridade de elementos estruturais — pilares, vigas, lajes e fundações — combinando inspeção visual, ensaios não-destrutivos e revisão de projeto original. Indicado em casos de fissuração, deslocamento ou mudança de uso.',
      meta: [
        { label: 'Norma',      value: 'NBR 6118 / 15575' },
        { label: 'Prazo',      value: '15 dias úteis' },
        { label: 'Entregável', value: 'Laudo + recomendações de reforço' },
      ],
    },
    {
      title: 'Inspeção Predial',
      body: 'Diagnóstico das condições técnicas, de uso e de manutenção da edificação. Pré-requisito da Lei de Inspeção Predial em diversos municípios — atende a NBR 16747 e a NBR 5674.',
      meta: [
        { label: 'Norma',      value: 'NBR 16747 / 5674' },
        { label: 'Prazo',      value: '20 dias úteis' },
        { label: 'Entregável', value: 'Laudo técnico nível 1, 2 ou 3' },
      ],
    },
    {
      title: 'Laudo de Vizinhança',
      body: 'Vistoria cautelar nos imóveis confrontantes antes do início de uma obra — protege construtor e vizinhos, registra o estado de conservação prévio e evita litígios futuros.',
      meta: [
        { label: 'Norma',      value: 'NBR 13752' },
        { label: 'Prazo',      value: '10 dias úteis' },
        { label: 'Entregável', value: 'Relatório fotográfico + laudo cautelar' },
      ],
    },
    {
      title: 'Perícia Técnica',
      body: 'Atuação como assistente técnico em processos judiciais ou extrajudiciais relacionados a defeitos construtivos, danos a terceiros e disputas contratuais. Pareceres fundamentados, com método científico.',
      meta: [
        { label: 'Norma',      value: 'NBR 13752 / CPC' },
        { label: 'Prazo',      value: 'Sob demanda' },
        { label: 'Entregável', value: 'Parecer técnico / assistência técnica' },
      ],
    },
    {
      title: 'Recuperação Estrutural',
      body: 'Projeto e acompanhamento de intervenções em estruturas degradadas: tratamento de armadura corroída, injeção de fissuras, reforço com fibra de carbono ou chapa colada.',
      meta: [
        { label: 'Norma',      value: 'NBR 16230 / ACI 364' },
        { label: 'Prazo',      value: '30 dias (projeto)' },
        { label: 'Entregável', value: 'Projeto executivo + ART' },
      ],
    },
  ],
  norms: [
    ['NBR 16747', 'Inspeção predial — Diretrizes, conceitos e procedimentos'],
    ['NBR 5674',  'Manutenção de edificações — Procedimento'],
    ['NBR 15575', 'Edificações habitacionais — Desempenho'],
    ['NBR 6118',  'Projeto de estruturas de concreto'],
    ['NBR 13752', 'Perícias de engenharia na construção civil'],
    ['NBR 9050',  'Acessibilidade a edificações, mobiliário, espaços'],
    ['NBR 16230', 'Sistemas de reforço com fibra de carbono'],
    ['NBR 5462',  'Confiabilidade e mantenabilidade'],
  ],
};

window.ServicePage = ServicePage;
window.CFG_CONTROLE = CFG_CONTROLE;
window.CFG_ENSAIOS = CFG_ENSAIOS;
window.CFG_DIAGNOSTICA = CFG_DIAGNOSTICA;
