import { CTABtn } from '../CTABtn';
import { Slider } from './components';

import './featured-products-section.css';

export const FeaturedProductsSection = () => {
  return (
    <section className="featured-products-section">
      <div>
        <h2>our featured products</h2>
        <CTABtn text="shop all" variation="borderless" />
      </div>

      <Slider />
    </section>
  );
};
