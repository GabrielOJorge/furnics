// eslint-disable-next-line react/prop-types
export function CTABtn({ text }) {
  return (
    <button className="CTA-btn">
      {text}
      <iconify-icon icon="la:arrow-right"></iconify-icon>
    </button>
  );
}
