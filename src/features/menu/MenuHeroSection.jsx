import { Parallax } from 'react-parallax';
import { GiKnifeFork } from 'react-icons/gi';
import { Link as SrcollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import useCategory from '../../pages/useCategory';
import Loader from '../../Loader';

function MenuHeroSection() {
  const { categoryMenu, isLoadingCategoryMenu } = useCategory();
  const { menu, drinks } = categoryMenu;
  console.log(menu);

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
        <div className="flex h-screen flex-col items-center justify-center text-white">
          <GiKnifeFork className="text-6xl text-yellow-300" />
          <h1 className="mt-4 text-center font-serif text-7xl font-bold uppercase">The Menu</h1>

          {/* Navigation Links */}
          <div className="mt-8 flex space-x-12">
            <SrcollLink
              to="menu-section"
              smooth={true}
              duration={800}
              className="cursor-pointer border-b-2 border-transparent px-4 py-2 text-xl font-medium transition-colors hover:border-yellow-300 hover:text-yellow-300"
            >
              Food Menu
            </SrcollLink>
            <SrcollLink
              to="drinks-section"
              smooth={true}
              duration={800}
              className="cursor-pointer border-b-2 border-transparent px-4 py-2 text-xl font-medium transition-colors hover:border-yellow-300 hover:text-yellow-300"
            >
              Drinks
            </SrcollLink>
          </div>
        </div>
      </Parallax>

      {/* Food Menu Section */}
      <div id="menu-section" className="min-h-screen bg-white py-20">
        <h2 className="mb-12 text-center text-4xl font-bold">Our Food Menu</h2>

        <div className="flex items-center justify-center gap-4">
          {menu.map((item) => (
            <Link
              key={item.id}
              to={`/menu/${item.slug}`}
              className="block p-2 text-lg font-semibold uppercase text-gray-700 hover:text-yellow-500"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <div id="drinks-section" className="min-h-screen bg-gray-50 py-20">
        <h2 className="mb-12 text-center text-4xl font-bold">Our Drinks</h2>
      </div>
    </div>
  );
}

export default MenuHeroSection;
