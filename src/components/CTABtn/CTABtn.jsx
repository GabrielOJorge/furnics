import './CTA-btn.css';

// eslint-disable-next-line react/prop-types
export function CTABtn({ text, variation }) {
  return (
    <button className={'CTA-btn ' + variation}>
      {text}
      <iconify-icon icon="la:arrow-right"></iconify-icon>
    </button>
  );
}
