import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import ClosingCountdown from '../../ClosingCountdown';
import { FaCircle, FaRegCircle, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link, useNavigate } from 'react-router-dom';
import useHomeMenuItem from '../../pages/useHomeMenuItems';
import Loader from '../../Loader';

// Custom CSS to hide default Swiper navigation arrows
const customStyles = `
  .swiper-button-next::after,
  .swiper-button-prev::after {
    display: none;
  }
`;

function SwiperSlider() {
  const { homeMenu, isLoadingMenuData } = useHomeMenuItem();
  const [activeIndex, setActiveIndex] = useState(0);
  const [closed, setClosed] = useState(false);
  const swiperRef = useRef(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const navigate = useNavigate();

  // Format price with currency
  const formatPrice = (price) => {
    return `₦${price.toLocaleString()}`;
  };

  // Handle slide change
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  // Handle pagination click
  const goToSlide = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  // Calculate how many groups we should have
  const totalGroups = Math.ceil(homeMenu.length / 2);

  if (isLoadingMenuData) return <Loader />;

  return (
    <div className="relative bg-gradient-to-b from-white to-gray-50 py-12">
      {/* Add custom styles to hide default arrows */}
      <style>{customStyles}</style>

      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:text-3xl">
          Our Popular Items
        </h2>

        {/* Main content container - flex layout */}
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Info Card - Fixed/Constant */}
          <div className="w-full lg:sticky lg:top-20 lg:w-1/3 lg:self-start">
            <div className="rounded-xl border border-yellow-200 bg-white p-6 text-center shadow-md">
              <h1 className="mb-3 text-xl font-bold text-gray-800 md:text-2xl">
                We Serve and Deliver Delectable
              </h1>
              <p className="mb-4 text-sm text-gray-600">
                From sunrise breakfasts to late-night cravings, our doors are open to bring you the
                finest flavors, crafted with love and care.
              </p>

              <div className="text-2xl font-bold text-yellow-500">
                <ClosingCountdown setClosed={setClosed} />
              </div>

              <div className="mt-6 flex justify-center">
                {!closed && (
                  <button
                    onClick={() => navigate('/menu')}
                    className="rounded-full border-2 border-yellow-300 bg-yellow-300 px-6 py-2 font-medium text-gray-800 transition-colors hover:bg-white hover:text-gray-800"
                  >
                    Order Now
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Menu Items Slider - Takes remaining space */}
          <div className="w-full lg:w-2/3">
            <div className="relative">
              {/* Custom Navigation Buttons */}
              <button
                ref={navigationPrevRef}
                className="absolute left-0 top-1/2 z-10 -ml-4 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-md"
                aria-label="Previous slide"
              >
                <FaChevronLeft className="text-gray-600" />
              </button>

              <button
                ref={navigationNextRef}
                className="absolute right-0 top-1/2 z-10 -mr-4 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-md"
                aria-label="Next slide"
              >
                <FaChevronRight className="text-gray-600" />
              </button>

              <Swiper
                ref={swiperRef}
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={{
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                pagination={false}
                onSlideChange={handleSlideChange}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                }}
                loop={true}
                loopFillGroupWithBlank={true}
                slidesPerGroup={2}
                className="menu-swiper"
              >
                {homeMenu.map((item) => (
                  <SwiperSlide key={item.id}>
                    <Link to={`/menu/${item.category}/${item.slug}`}>
                      <div className="h-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:border-yellow-200 hover:shadow-lg">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={item.image || '/placeholder.svg'}
                            alt={item.name}
                            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="mb-2 text-lg font-semibold text-gray-800">{item.name}</h3>
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-600">Freshly made</p>
                            <p className="text-lg font-bold text-yellow-500">
                              {formatPrice(item.price)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        {/* Custom Pagination */}
        <div className="mt-8 flex items-center justify-center gap-3">
          {Array.from({ length: totalGroups }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index * 2)}
              className="flex h-8 w-8 items-center justify-center"
              aria-label={`Go to slide group ${index + 1}`}
            >
              {Math.floor(activeIndex / 2) === index ? (
                <FaCircle className="text-yellow-500" size={12} />
              ) : (
                <FaRegCircle className="text-gray-400 hover:text-yellow-500" size={12} />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SwiperSlider;
