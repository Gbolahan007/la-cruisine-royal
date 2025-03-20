import { lazy, Suspense } from 'react';
import Loader from '../Loader';
import GetDirectionsButton from '../GetDirectionsButton';

// Lazy load components
const HeroSection = lazy(() => import('../features/home/HeroSection'));
const StorySection = lazy(() => import('../features/home/StorySection'));
const MenuSection = lazy(() => import('../features/home/MenuSection'));
const Location = lazy(() => import('../features/home/Location'));
const SwiperSlider = lazy(() => import('../features/home/SwiperSlider'));
const Testimonials = lazy(() => import('../features/home/Testimonials'));

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
        <Testimonials />
        <GetDirectionsButton />
      </Suspense>
    </div>
  );
}

export default Home;
