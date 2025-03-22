import { Parallax } from 'react-parallax';
import { GiKnifeFork } from 'react-icons/gi';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import useCategory from '../../pages/useCategory';
import Loader from '../../Loader';

function MenuHeroSection() {
  const { categoryMenu, isLoadingCategoryMenu } = useCategory();
  const { menu, drinks } = categoryMenu;

  if (isLoadingCategoryMenu) return <Loader />;

  return (
    <div className="relative">
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage="/barrrr.webp"
        bgImageAlt="Restaurant Background"
        strength={800}
        className="h-screen"
        bgImageStyle={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      >
        <div className="font-primary3 flex h-screen flex-col items-center justify-center text-white">
          <GiKnifeFork className="text-6xl text-yellow-300" />
          <h1 className="mt-4 text-center font-serif text-7xl font-bold uppercase">The Menu</h1>

          {/* Navigation Links */}
          <div className="mt-8 flex space-x-12">
            <ScrollLink
              to="menu-section"
              smooth={true}
              duration={800}
              className="cursor-pointer border-b-2 border-transparent px-4 py-2 text-xl font-medium transition-colors hover:border-yellow-300 hover:text-yellow-300"
            >
              Food Menu
            </ScrollLink>
            <ScrollLink
              to="drinks-section"
              smooth={true}
              duration={800}
              className="cursor-pointer border-b-2 border-transparent px-4 py-2 text-xl font-medium transition-colors hover:border-yellow-300 hover:text-yellow-300"
            >
              Drinks
            </ScrollLink>
          </div>
        </div>
      </Parallax>

      {/* Food Categories Section */}
      <div id="menu-section" className="font-primary3 bg-white px-4 py-16">
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
                    <h3 className="mb-2 text-3xl font-bold text-white">{category.name}</h3>
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

      {/* Drinks Categories Section */}
      <div id="drinks-section" className="font-primary3 bg-gray-50 px-4 py-16">
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
    </div>
  );
}

export default MenuHeroSection;
