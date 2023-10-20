import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Slide } from '../Slide';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider.css';

export function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={20}
        breakpoints={{
          460: {
            pagination: true,
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          900: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            navigation: false,
          },
          1200: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }}
        className="featured-products-slider"
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <Slide
            src={'src/assets/images/black-sofa-set.png'}
            alt={'black sofa set'}
            title={'black sofa set'}
            btnText={'$200'}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            src={'src/assets/images/circle-dining-table.png'}
            alt={'circle dining table'}
            title={'circle dining table'}
            btnText={'$200'}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            src={'src/assets/images/minimal-sofa.png'}
            alt={'minimal sofa'}
            title={'minimal sofa'}
            btnText={'$200'}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            src={'src/assets/images/pattern-tea-table.png'}
            alt={'pattern tea table'}
            title={'pattern tea table'}
            btnText={'$200'}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            src={'src/assets/images/black-sofa-set.png'}
            alt={'black sofa set'}
            title={'black sofa set'}
            btnText={'$200'}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            src={'src/assets/images/circle-dining-table.png'}
            alt={'circle dining table'}
            title={'circle dining table'}
            btnText={'$200'}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            src={'src/assets/images/minimal-sofa.png'}
            alt={'minimal sofa'}
            title={'minimal sofa'}
            btnText={'$200'}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            src={'src/assets/images/pattern-tea-table.png'}
            alt={'pattern tea table'}
            title={'pattern tea table'}
            btnText={'$200'}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            src={'src/assets/images/black-sofa-set.png'}
            alt={'black sofa set'}
            title={'black sofa set'}
            btnText={'$200'}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            src={'src/assets/images/circle-dining-table.png'}
            alt={'circle dining table'}
            title={'circle dining table'}
            btnText={'$200'}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            src={'src/assets/images/minimal-sofa.png'}
            alt={'minimal sofa'}
            title={'minimal sofa'}
            btnText={'$200'}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            src={'src/assets/images/pattern-tea-table.png'}
            alt={'pattern tea table'}
            title={'pattern tea table'}
            btnText={'$200'}
          />
        </SwiperSlide>
      </Swiper>

      <Swiper
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={20}
        breakpoints={{
          460: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        className="featured-products-slider mobile"
        loop={true}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <Slide
            src={'src/assets/images/black-sofa-set.png'}
            alt={'black sofa set'}
            title={'black sofa set'}
            btnText={'$200'}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            src={'src/assets/images/circle-dining-table.png'}
            alt={'circle dining table'}
            title={'circle dining table'}
            btnText={'$200'}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            src={'src/assets/images/minimal-sofa.png'}
            alt={'minimal sofa'}
            title={'minimal sofa'}
            btnText={'$200'}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            src={'src/assets/images/pattern-tea-table.png'}
            alt={'pattern tea table'}
            title={'pattern tea table'}
            btnText={'$200'}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            src={'src/assets/images/black-sofa-set.png'}
            alt={'black sofa set'}
            title={'black sofa set'}
            btnText={'$200'}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            src={'src/assets/images/circle-dining-table.png'}
            alt={'circle dining table'}
            title={'circle dining table'}
            btnText={'$200'}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            src={'src/assets/images/minimal-sofa.png'}
            alt={'minimal sofa'}
            title={'minimal sofa'}
            btnText={'$200'}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            src={'src/assets/images/pattern-tea-table.png'}
            alt={'pattern tea table'}
            title={'pattern tea table'}
            btnText={'$200'}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            src={'src/assets/images/black-sofa-set.png'}
            alt={'black sofa set'}
            title={'black sofa set'}
            btnText={'$200'}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            src={'src/assets/images/circle-dining-table.png'}
            alt={'circle dining table'}
            title={'circle dining table'}
            btnText={'$200'}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            src={'src/assets/images/minimal-sofa.png'}
            alt={'minimal sofa'}
            title={'minimal sofa'}
            btnText={'$200'}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            src={'src/assets/images/pattern-tea-table.png'}
            alt={'pattern tea table'}
            title={'pattern tea table'}
            btnText={'$200'}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
