import { Parallax } from 'react-parallax';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="relative">
      {/* Hero Section with Parallax as fixed background */}
      <div className="fixed inset-0 z-0">
        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage="/resss.webp"
          bgImageAlt="Restaurant Background"
          strength={800}
          bgImageStyle={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        >
          <div className="flex h-screen flex-col items-center justify-center">
            <div className="container mx-auto flex h-full flex-col items-center justify-center text-center text-white">
              <h1 className="mb-4">
                <span className="mb-2 block font-primary2 text-3xl font-light uppercase tracking-wider">
                  Welcome to
                </span>
                <span className="block font-primary text-7xl font-bold">
                  <span className="text-yellow-300">La</span> Cruisine Royal
                </span>
              </h1>
              <p className="mb-2 text-2xl">A Modern Restaurant & Lounge.</p>
              <p className="text-xl font-light italic">
                Bringing Elegant, Natural, Sensuous And Free Spirit to you
              </p>
            </div>
          </div>
        </Parallax>
      </div>

      {/* Spacer to account for the hero height */}
      <div className="h-screen"></div>

      {/* Content that scrolls over the hero */}
      <div className="relative z-10">
        {/* Our Story Section with transparent background to show hero underneath */}
        <div className="bg-white-80 w-full bg-white py-28 text-center">
          {/* New Beginnings */}
          <h1 className="font-primary2 text-5xl text-yellow-500">New Beginnings</h1>

          {/* Our Story */}
          <h1 className="font-sans text-5xl font-bold text-gray-900">Our Story</h1>

          {/* Description */}
          <p className="mt-4 text-lg text-gray-700">
            La Cruisine Royal has created an atmosphere of effortless
          </p>
          <p className="text-lg text-gray-700">
            indulgence, spiced with world-class entertainment.
          </p>

          <button
            onClick={() => navigate('/about')}
            className="group relative mt-7 cursor-pointer overflow-hidden border-2 border-gray-900 px-6 py-2 font-medium tracking-widest text-gray-900"
          >
            <span className="relative z-10 uppercase transition-colors duration-300 group-hover:text-white">
              About us
            </span>
            <span className="absolute inset-0 z-0 block w-0 bg-gray-900 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </button>
        </div>

        {/* Additional content sections */}
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
          <div className="mx-auto my-10 mt-28 w-full max-w-[90%]">
            {/* Grid container */}
            <div className="grid h-full w-full grid-cols-1 lg:grid-cols-2">
              {/* Text Section */}
              <div className="order-2 flex h-full items-center justify-center bg-white px-10 py-10 text-center text-gray-900 sm:order-1">
                <div>
                  <h1 className="font-primary2 text-4xl text-yellow-500">Food Varieties</h1>
                  <h2 className="mb-10 text-2xl font-bold uppercase text-gray-900">Our Menu</h2>
                  <p className="mt-4 text-lg font-medium text-gray-700">
                    A sanctuary for everyone who desires a self-treatment, we have carefully curated
                    to redefine the world of Fine Dining, Bar, and Entertainment. Allowing guests to
                    relax, socialize, and celebrate in the most elegant environment that stimulates
                    the body and soul, creating an unforgettable emotional experience.
                  </p>

                  <button
                    onClick={() => navigate('/menu')}
                    className="group relative mt-7 cursor-pointer overflow-hidden border-2 border-gray-900 px-6 py-2 font-medium text-gray-900"
                  >
                    <span className="relative z-10 uppercase tracking-widest transition-colors duration-300 group-hover:text-white">
                      view menu
                    </span>
                    <span className="absolute inset-0 z-0 block w-0 bg-gray-900 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                  </button>
                </div>
              </div>

              {/* Image Section */}
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

        {/* You can add more sections that scroll over as needed */}
      </div>
    </div>
  );
}

export default Home;
