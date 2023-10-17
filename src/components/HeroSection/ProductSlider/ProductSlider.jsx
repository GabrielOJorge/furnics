import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style/product-slider.css';

import { Slide } from './Slide';

export function ProductSlider() {
  return (
    <Swiper
      spaceBetween={50}
      className="product-slider"
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Slide
          title={'wooden table set'}
          description={
            'Aliquet donec ut arcu risus amet mattis diam gravida. Ac vestibulum quis proin in aliquam et et auctor. Amet urna est arcu euismod egestas morbi nunc lacus. Nec id rutrum mauris commodo habitant amet quisque. Velit ornare pellentesque facilisi in odio nibh.'
          }
          classN={'slide-1'}
        />
        slide
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          title={'Beige & Brown Set'}
          description={
            'Aliquet donec ut arcu risus amet mattis diam gravida. Ac vestibulum quis proin in aliquam et et auctor. Amet urna est arcu euismod egestas morbi nunc lacus. Nec id rutrum mauris commodo habitant amet quisque. Velit ornare pellentesque facilisi in odio nibh.'
          }
          classN={'slide-2'}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          title={'Rustic Dresser'}
          description={
            'Aliquet donec ut arcu risus amet mattis diam gravida. Ac vestibulum quis proin in aliquam et et auctor. Amet urna est arcu euismod egestas morbi nunc lacus. Nec id rutrum mauris commodo habitant amet quisque. Velit ornare pellentesque facilisi in odio nibh.'
          }
          classN={'slide-3'}
        />
      </SwiperSlide>
    </Swiper>
  );
}
