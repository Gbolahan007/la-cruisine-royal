import { Link } from 'react-router-dom';
import useCategory from '../../pages/useCategory';
import Loader from '../../Loader';

function FoodCategories() {
  const { categoryMenu, isLoadingCategoryMenu } = useCategory();
  const { menu } = categoryMenu;

  if (isLoadingCategoryMenu) return <Loader />;

  return (
    <div id="menu-section" className="bg-white px-4 py-16 font-primary3">
      <div className="mx-auto max-w-7xl">
        <h2 className="relative mb-16 text-center text-4xl font-bold after:absolute after:bottom-[-10px] after:left-1/2 after:h-1 after:w-20 after:-translate-x-1/2 after:transform after:bg-yellow-500 after:content-['']">
          Food Categories
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {menu.map((category) => (
            <Link
              key={category.id}
              to={`/menu/${category.slug}`}
              className="group relative h-80 overflow-hidden rounded-xl shadow-lg transition-transform duration-500 hover:-translate-y-2"
            >
              <img
                src={category.imageUrl || `/api/placeholder/600/800`}
                alt={category.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-all duration-300 group-hover:from-black/70">
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h3 className="mb-2 text-3xl font-bold lowercase text-white">{category.name}</h3>
                  <span className="inline-block h-1 w-16 bg-yellow-400 transition-all duration-300 group-hover:w-24"></span>
                  <p className="mt-3 translate-y-4 transform text-sm text-gray-200 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    Click to explore our {category.name.toLowerCase()} selection
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FoodCategories;
