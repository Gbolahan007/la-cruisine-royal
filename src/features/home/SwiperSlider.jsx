import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';

import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const images = [
  '/barrr.webp',
  '/buffalo wings.webp',
  '/cup.webp',
  '/pizza.webp',
  '/barr.webp',
  '/bar.webp',
  '/barrrr.webp',
  '/alco.webp',
];

function SwiperSlider() {
  const swiperRef = useRef(null); // Reference to Swiper instance
  const [isHovering, setIsHovering] = useState(false);

  function handleHoverIn() {
    setIsHovering(true);
  }
  function handleHoverOut() {
    setIsHovering(false);
  }

  return (
    <div className="relative w-full" onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut}>
      {/* Swiper Component */}
      <Swiper
        modules={[Navigation]}
        loop={true}
        speed={1000}
        spaceBetween={0}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
          1536: { slidesPerView: 5 },
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance
        className="h-80 w-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="group relative w-[350px] flex-shrink-0">
            <div className="relative h-full w-full overflow-hidden">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-50"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons with Framer Motion */}
      <AnimatePresence>
        {isHovering && (
          <>
            <motion.button
              className="absolute left-6 top-1/2 z-10 -translate-y-1/2 rounded-full bg-gray-100 p-2 text-black hover:bg-gray-200"
              onClick={() => swiperRef.current?.slidePrev()}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <FiArrowLeft size={23} />
            </motion.button>
            <motion.button
              className="absolute right-6 top-1/2 z-10 -translate-y-1/2 rounded-full bg-gray-100 p-2 text-black hover:bg-gray-200"
              onClick={() => swiperRef.current?.slideNext()}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <FiArrowRight size={23} />
            </motion.button>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default SwiperSlider;
