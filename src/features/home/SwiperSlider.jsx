import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

function SwiperSlider() {
  return (
    <Swiper
      modules={[Navigation, EffectFade]}
      navigation={true}
      effect="fade"
      loop={true}
      speed={1000}
      slidesPerView={1}
      className="h-64 w-full" // Adjust size as needed
    >
      <SwiperSlide>
        <img src="/images/slide1.jpg" alt="Slide 1" className="h-full w-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/slide2.jpg" alt="Slide 2" className="h-full w-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/slide3.jpg" alt="Slide 3" className="h-full w-full object-cover" />
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperSlider;
