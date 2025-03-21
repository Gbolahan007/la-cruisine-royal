import { Loader } from 'lucide-react';
import { lazy, Suspense } from 'react';

const MenuHeroSection = lazy(() => import('../features/menu/MenuHeroSection'));

function Menu() {
  return (
    <div className="relative">
      <Suspense fallback={<Loader />}>
        <MenuHeroSection />
        {/* Spacer to push content down */}
        <div className="h-screen"></div>
      </Suspense>
    </div>
  );
}

export default Menu;
