import { Product, solutionFamilies } from '../data/products';

type ProductDetailProps = {
  product: Product;
};

export function ProductDetail({ product }: ProductDetailProps) {
  const family = solutionFamilies.find((entry) => entry.id === product.family);

  return (
    <article className="detail-page">
      <section className="detail-hero">
        <div className="detail-hero__copy">
          <p className="eyebrow">{family?.name ?? 'Product'}</p>
          <h2>{product.name}</h2>
          <p className="detail-hero__summary">{product.summary}</p>
          <div className="detail-hero__actions">
            <a
              className="button button--primary"
              href={product.sourcePageUrl}
              target="_blank"
              rel="noreferrer"
            >
              View Family Page
            </a>
            <a className="button button--secondary" href="#/products">
              All Products
            </a>
          </div>
        </div>

        <div className="detail-hero__media">
          <img alt={product.name} src={product.heroImageUrl} />
        </div>
      </section>

      <section className="detail-grid">
        <div className="detail-card">
          <p className="eyebrow">Overview</p>
          <h3>Product details</h3>
          <p>{product.detailText}</p>
        </div>

        <div className="detail-card">
          <p className="eyebrow">Issuing Locations</p>
          <h3>Learn more by market</h3>
          <ul className="detail-link-list">
            {product.issuingLocations.map((location) => (
              <li key={location.label}>
                <a
                  className="detail-link"
                  href={location.detailPageUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {location.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="detail-card detail-card--wide">
          <p className="eyebrow">Product Summaries</p>
          <h3>Brochure and PDF downloads</h3>
          <ul className="detail-link-list">
            {product.brochures.map((brochure) => (
              <li key={brochure.label}>
                <a
                  className="detail-link"
                  href={brochure.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {brochure.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
