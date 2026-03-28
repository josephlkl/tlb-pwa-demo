import { useEffect, useState } from 'react';
import { ProductDetail } from './components/ProductDetail';
import { ProductCatalog } from './components/ProductCatalog';
import { products, solutionFamilies } from './data/products';

const baseUrl = import.meta.env.BASE_URL;

type Route =
  | { kind: 'catalog' }
  | { kind: 'product'; slug: string };

function getRoute(): Route {
  const hash = window.location.hash.replace(/^#/, '');

  if (!hash || hash === '/' || hash === '/products') {
    return { kind: 'catalog' };
  }

  const match = hash.match(/^\/product\/([^/]+)$/);
  if (match) {
    return { kind: 'product', slug: decodeURIComponent(match[1]) };
  }

  return { kind: 'catalog' };
}

function App() {
  const [route, setRoute] = useState<Route>(() => getRoute());

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const activeProduct =
    route.kind === 'product'
      ? products.find((product) => product.slug === route.slug) ?? null
      : null;

  return (
    <div className="app-shell">
      <header className="hero">
        <div className="hero__content">
          <p className="eyebrow">TLB Product App</p>
          <h1>
            {activeProduct
              ? activeProduct.name
              : 'Browse TLB insurance solutions in one focused product app.'}
          </h1>
          <p className="hero__summary">
            {activeProduct
              ? activeProduct.summary
              : 'Explore solution families, compare product summaries, and open TLB product details without any installation messaging inside the app experience.'}
          </p>
          <div className="hero__actions">
            {activeProduct ? (
              <>
                <a className="button button--primary" href="#/products">
                  Back to Catalog
                </a>
              </>
            ) : (
              <>
                <a className="button button--primary" href="#products">
                  Browse Products
                </a>
                <a className="button button--secondary" href={baseUrl}>
                  Install Page
                </a>
              </>
            )}
          </div>
        </div>
      </header>

      <main>
        {activeProduct ? (
          <section className="section">
            <ProductDetail product={activeProduct} />
          </section>
        ) : (
          <section id="products" className="section">
            <div className="section__heading">
              <p className="eyebrow">Catalog</p>
              <h2>TLB insurance solutions</h2>
            </div>
            <ProductCatalog />
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
