import '../style/components/services-section.css';

export function ServicesSection() {
  return (
    <section className="services-section">
      <div>
        <iconify-icon icon="la:shipping-fast"></iconify-icon>
        <h3>
          quick
          <br />
          delivery
        </h3>
      </div>
      <div>
        <iconify-icon icon="la:shopping-cart"></iconify-icon>
        <h3>
          pick up in
          <br />
          store
        </h3>
      </div>
      <div>
        <iconify-icon icon="la:gift"></iconify-icon>
        <h3>
          special
          <br />
          packaging
        </h3>
      </div>
      <div>
        <iconify-icon icon="la:redo-alt"></iconify-icon>
        <h3>
          return &
          <br />
          refund policy
        </h3>
      </div>
    </section>
  );
}
