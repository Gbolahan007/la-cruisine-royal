import { Parallax } from 'react-parallax';
import { useNavigate } from 'react-router-dom';

const MenuSection = () => {
  const navigate = useNavigate();

  return (
    <Parallax
      strength={400}
      bgImage="/yyy.webp"
      bgImageStyle={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
      }}
    >
      <div className="relative z-30 mx-auto my-10 mt-28 w-full max-w-[90%]">
        <div className="grid h-full w-full grid-cols-1 lg:grid-cols-2">
          <div className="order-2 flex h-full items-center justify-center bg-white px-10 py-10 text-center text-gray-900 sm:order-1">
            <div>
              <h1 className="font-primary2 text-4xl text-yellow-500">Food Varieties</h1>
              <h2 className="mb-10 text-2xl font-bold uppercase text-gray-900">Our Menu</h2>
              <p className="mt-4 text-lg font-medium text-gray-700">
                A sanctuary for everyone who desires a self-treatment, we have carefully curated to
                redefine the world of Fine Dining, Bar, and Entertainment. Allowing guests to relax,
                socialize, and celebrate in the most elegant environment that stimulates the body
                and soul, creating an unforgettable emotional experience.
              </p>
              <button
                onClick={() => navigate('/menu')}
                className="group relative mt-7 cursor-pointer overflow-hidden border-2 border-gray-900 px-6 py-2 font-medium text-gray-900"
              >
                <span className="relative z-10 uppercase tracking-widest transition-colors duration-300 group-hover:text-white">
                  View Menu
                </span>
                <span className="absolute inset-0 z-0 block w-0 bg-gray-900 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </button>
            </div>
          </div>
          <div className="order-1 h-full sm:order-2">
            <img
              className="h-full w-full object-cover"
              src="/buffalo wings.webp"
              alt="Barbecue Wings"
            />
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default MenuSection;
