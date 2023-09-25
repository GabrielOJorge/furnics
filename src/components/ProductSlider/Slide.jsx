import { CTABtn } from '../CTABtn';

// eslint-disable-next-line react/prop-types
export function Slide({ title, description, classN }) {
  return (
    <div className={'slide ' + classN}>
      <h1>{title}</h1>

      <p>{description}</p>

      <CTABtn text={'shop now'} />
    </div>
  );
}
