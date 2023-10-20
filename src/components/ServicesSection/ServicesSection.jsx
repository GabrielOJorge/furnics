import './services-section.css';

export function ServicesSection() {
  return (
    <section className="services-section">
      <div>
        <iconify-icon icon="la:shipping-fast"></iconify-icon>
        <h4>
          quick
          <br />
          delivery
        </h4>
      </div>
      <div>
        <iconify-icon icon="la:shopping-cart"></iconify-icon>
        <h4>
          pick up in
          <br />
          store
        </h4>
      </div>
      <div>
        <iconify-icon icon="la:gift"></iconify-icon>
        <h4>
          special
          <br />
          packaging
        </h4>
      </div>
      <div>
        <iconify-icon icon="la:redo-alt"></iconify-icon>
        <h4>
          return &
          <br />
          refund policy
        </h4>
      </div>
    </section>
  );
}
