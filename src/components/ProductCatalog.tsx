import { products, solutionFamilies } from '../data/products';

export function ProductCatalog() {
  return (
    <div className="catalog">
      {solutionFamilies.map((family) => {
        const familyProducts = products.filter((product) => product.family === family.id);

        return (
          <section className="family" key={family.id}>
            <div className="family__header">
              <div>
                <p className="eyebrow">{family.name}</p>
                <h3>{family.tagline}</h3>
              </div>
            </div>
            <p className="family__summary">{family.summary}</p>

            <div className="product-grid">
              {familyProducts.map((product) => (
                <article className="product-card" key={product.slug}>
                  <div className="product-card__image" aria-hidden="true">
                    <div className="product-card__badge">{family.name}</div>
                    <h4>{product.name}</h4>
                  </div>
                  <div className="product-card__content">
                    <p className="product-card__family">{family.name}</p>
                    <h4>{product.name}</h4>
                    <p>{product.summary}</p>
                    <ul className="chip-list">
                      {product.issuingLocations.map((location) => (
                        <li key={location.label}>{location.label}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="product-card__actions">
                    <a className="button button--secondary" href={`#/product/${product.slug}`}>
                      View Details
                    </a>
                  </div>
                  <div className="product-card__footer">
                    <a
                      className="product-card__source-link"
                      href={product.sourcePageUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Source page
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
