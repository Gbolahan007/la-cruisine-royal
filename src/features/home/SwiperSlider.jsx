import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import ClosingCountdown from '../../ClosingCountdown';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function SwiperSlider() {
  // Sample menu items
  const menuItems = [
    { id: 1, name: 'Margherita Pizza', price: 7000, image: '/pizza.webp' },
    { id: 2, name: 'Pepperoni Pizza', price: 8500, image: '/pizza.webp' },
    { id: 3, name: 'Vegetarian Pizza', price: 7500, image: '/pizza.webp' },
    { id: 4, name: 'BBQ Chicken Pizza', price: 9000, image: '/pizza.webp' },
    { id: 5, name: 'Hawaiian Pizza', price: 8000, image: '/pizza.webp' },
  ];

  // Format price with currency
  const formatPrice = (price) => {
    return `₦${price.toLocaleString()}`;
  };

  return (
    <div className="relative bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:text-3xl">
          Our Popular Items
        </h2>

        {/* Main content container - flex layout */}
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Info Card - Fixed/Constant */}
          <div className="w-full lg:sticky lg:top-24 lg:w-1/3 lg:self-start">
            <div className="rounded-xl border border-yellow-200 bg-white p-6 text-center shadow-md">
              <h1 className="mb-3 text-xl font-bold text-gray-800 md:text-2xl">
                We Serve and Deliver Delectable
              </h1>
              <p className="mb-4 text-sm text-gray-600">
                From sunrise breakfasts to late-night cravings, our doors are open to bring you the
                finest flavors, crafted with love and care.
              </p>
              <div className="mb-1 text-sm font-medium text-gray-500">Restaurant closing in</div>
              <div className="text-2xl font-bold text-yellow-500">
                <ClosingCountdown />
              </div>

              <div className="mt-6 flex justify-center">
                <button className="rounded-full border-2 border-yellow-300 bg-yellow-300 px-6 py-2 font-medium text-gray-800 transition-colors hover:bg-white hover:text-gray-800">
                  Order Now
                </button>
              </div>
            </div>
          </div>

          {/* Menu Items Slider - Takes remaining space */}
          <div className="w-full lg:w-2/3">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
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
              className="menu-swiper"
            >
              {menuItems.map((item) => (
                <SwiperSlide key={item.id}>
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
                      <button className="mt-3 w-full rounded-lg bg-yellow-300 py-2 text-sm font-medium text-gray-800 transition hover:bg-yellow-400">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SwiperSlider;
