import { lazy, Suspense } from 'react';

// Lazy load components
const HeroSection = lazy(() => import('../features/home/HeroSection'));
const StorySection = lazy(() => import('../features/home/StorySection'));
const MenuSection = lazy(() => import('../features/home/MenuSection'));
const Location = lazy(() => import('../features/home/Location'));

function Home() {
  return (
    <div className="relative">
      {/* Lazy load HeroSection */}
      <Suspense
        fallback={
          <div className="flex h-screen items-center justify-center text-lg">Loading...</div>
        }
      >
        <HeroSection />
      </Suspense>

      {/* Spacer to push content down */}
      <div className="h-screen"></div>

      {/* Lazy load StorySection */}
      <Suspense
        fallback={<div className="flex h-60 items-center justify-center text-lg">Loading...</div>}
      >
        <StorySection />
      </Suspense>

      {/* Lazy load MenuSection */}
      <Suspense
        fallback={<div className="flex h-96 items-center justify-center text-lg">Loading...</div>}
      >
        <MenuSection />
      </Suspense>

      <Suspense
        fallback={<div className="flex h-96 items-center justify-center text-lg">Loading...</div>}
      >
        <Location />
      </Suspense>
    </div>
  );
}

export default Home;
