// app.jsx — main router for the ConcreFuji SPA

const { useState, useEffect } = React;

function App() {
  const initial = (window.location.hash || '#home').slice(1) || 'home';
  const [page, setPage] = useState(initial);

  useEffect(() => {
    const handler = () => {
      const h = (window.location.hash || '#home').slice(1) || 'home';
      setPage(h);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  const onNav = (id) => {
    window.location.hash = id;
    setPage(id);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  let body, hasCta = true;
  switch (page) {
    case 'controle':
      body = <ServicePage cfg={CFG_CONTROLE} onNav={onNav} current={page} />;
      break;
    case 'ensaios':
      body = <ServicePage cfg={CFG_ENSAIOS} onNav={onNav} current={page} />;
      break;
    case 'diagnostica':
      body = <ServicePage cfg={CFG_DIAGNOSTICA} onNav={onNav} current={page} />;
      break;
    case 'sobre':
      body = <Sobre onNav={onNav} />;
      break;
    case 'contato':
      body = <Contato onNav={onNav} />;
      hasCta = false; // contato is itself the CTA
      break;
    case 'home':
    default:
      body = <Home onNav={onNav} />;
      hasCta = false; // home has inline contact section as primary CTA
  }

  return (
    <PageChrome current={page} onNav={onNav} cta={hasCta}>
      {body}
    </PageChrome>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
