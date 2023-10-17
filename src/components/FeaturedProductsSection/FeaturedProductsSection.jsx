import { CTABtn } from '../CTABtn/CTABtn';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './featured-products-section.css';

export const FeaturedProductsSection = () => {
  return (
    <section className="featured-products-section">
      <div>
        <h2>our featured products</h2>
        <CTABtn text="shop all" variation="borderless" />
      </div>
      <Swiper
        spaceBetween={50}
        className="featured-products-slider"
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </section>
  );
};
