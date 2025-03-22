import { Loader } from 'lucide-react';
import { lazy, Suspense } from 'react';

const MenuHeroSection = lazy(() => import('../features/menu/MenuHeroSection'));

function Menu() {
  return (
    <div className="relative">
      <Suspense fallback={<Loader />}>
        <MenuHeroSection />
      </Suspense>
    </div>
  );
}

export default Menu;
