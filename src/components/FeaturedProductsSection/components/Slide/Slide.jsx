import './slide.css';

// eslint-disable-next-line react/prop-types
export function Slide({ src, alt, title, btnText }) {
  return (
    <a className="slide">
      <img src={src} alt={alt} />

      <div>
        <h3>{title}</h3>
        <button>{btnText}</button>
      </div>
    </a>
  );
}
