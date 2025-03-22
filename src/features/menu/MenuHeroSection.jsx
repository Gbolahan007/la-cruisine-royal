import { Parallax } from 'react-parallax';
import { GiKnifeFork } from 'react-icons/gi';
import { Link as ScrollLink } from 'react-scroll';

function MenuHeroSection() {
  return (
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
      <div className="flex h-screen flex-col items-center justify-center font-primary3 text-white">
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
  );
}

export default MenuHeroSection;
