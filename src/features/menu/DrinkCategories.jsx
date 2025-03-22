import { Link } from 'react-router-dom';
import useCategory from '../../pages/useCategory';
import Loader from '../../Loader';

function DrinkCategories() {
  const { categoryMenu, isLoadingCategoryMenu } = useCategory();
  const { drinks } = categoryMenu;

  if (isLoadingCategoryMenu) return <Loader />;

  return (
    <div id="drinks-section" className="bg-gray-50 px-4 py-16 font-primary3">
      <div className="mx-auto max-w-7xl">
        <h2 className="relative mb-16 text-center text-4xl font-bold after:absolute after:bottom-[-10px] after:left-1/2 after:h-1 after:w-20 after:-translate-x-1/2 after:transform after:bg-yellow-500 after:content-['']">
          Drink Categories
        </h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {drinks.map((category) => (
            <Link
              key={category.id}
              to={`/menu/${category.slug}`}
              className="group relative h-64 overflow-hidden rounded-xl shadow-lg transition-transform duration-500 hover:-translate-y-2"
            >
              <img
                src={category.imageUrl || `/api/placeholder/400/600`}
                alt={category.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 transition-all duration-300 group-hover:to-black/70">
                <div className="absolute bottom-0 left-0 w-full p-4 text-center">
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                  <div className="mx-auto mt-2 h-0.5 w-0 bg-yellow-400 transition-all duration-500 group-hover:w-12"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DrinkCategories;
