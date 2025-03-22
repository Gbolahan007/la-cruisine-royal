import { lazy, Suspense } from 'react';
import Loader from '../Loader';
const MenuHeroSection = lazy(() => import('../features/menu/MenuHeroSection'));
const FoodCategories = lazy(() => import('../features/menu/FoodCategories'));
const DrinkCategories = lazy(() => import('../features/menu/DrinkCategories'));

function Menu() {
  return (
    <div className="relative">
      <Suspense fallback={<Loader />}>
        <MenuHeroSection />
        <FoodCategories />
        <DrinkCategories />
      </Suspense>
    </div>
  );
}

export default Menu;
