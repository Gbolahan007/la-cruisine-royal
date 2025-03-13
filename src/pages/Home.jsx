import { lazy, Suspense } from 'react';
import Loader from '../Loader';
import GetDirectionsButton from '../GetDirectionsButton';

// Lazy load components
const HeroSection = lazy(() => import('../features/home/HeroSection'));
const StorySection = lazy(() => import('../features/home/StorySection'));
const MenuSection = lazy(() => import('../features/home/MenuSection'));
const Location = lazy(() => import('../features/home/Location'));
const SwiperSlider = lazy(() => import('../features/home/SwiperSlider'));
const GoogleMapEmbed = lazy(() => import('../GoogleMapEmbed'));

function Home() {
  return (
    <div className="relative">
      <Suspense fallback={<Loader />}>
        <HeroSection />
        {/* Spacer to push content down */}
        <div className="h-screen"></div>
        <StorySection />
        <MenuSection />
        <Location />
        <SwiperSlider />

        {/* Add Google Map and Get Directions Button After the Slider */}
        <div className="mt-16 flex flex-col items-center gap-6">
          <div className="relative">
            <Suspense fallback={<Loader />}>
              <GoogleMapEmbed />
            </Suspense>
          </div>
          <GetDirectionsButton />
        </div>
      </Suspense>
    </div>
  );
}

export default Home;
