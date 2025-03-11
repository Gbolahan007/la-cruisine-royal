import { Parallax } from 'react-parallax';

function Home() {
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
                <span className="font-primary2 mb-2 block text-3xl font-light uppercase tracking-wider">
                  Welcome to
                </span>
                <span className="font-primary block text-7xl font-bold">
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
        </div>

        {/* Additional content sections */}
        <Parallax
          strength={300}
          bgImage="/ress.webp"
          bgImageStyle={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        >
          <div className="mx-16 my-14 mt-4">
            {/* Content section */}
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 overflow-hidden rounded-xl shadow-lg lg:grid-cols-2">
                {/* Text section */}
                <div className="order-2 flex flex-col justify-center bg-white px-6 py-12 text-center sm:order-1 sm:px-8 md:px-12 lg:px-16">
                  <h1 className="relative mb-4 inline-block font-serif text-4xl font-bold text-red-900 after:absolute after:bottom-0 after:left-1/2 after:h-1 after:w-24 after:-translate-x-1/2 after:bg-red-900 after:content-[''] md:text-5xl">
                    Food Varieties
                  </h1>

                  <h2 className="mb-8 text-xl font-medium uppercase tracking-wider text-gray-700 md:text-2xl">
                    Our Menu
                  </h2>

                  <p className="mx-auto max-w-prose text-base leading-relaxed text-gray-600 md:text-lg">
                    A sanctuary for everyone who desire a self-treatment, we have carefully curated
                    to redefine the world of Fine Dining, Bar and Entertainment. Allowing guests to
                    relax, socialize and celebrate in the most elegant environment that stimulates
                    the body and soul, creating an unforgettable emotional experience.
                  </p>

                  <div className="mt-8">
                    <button className="rounded-full border-2 border-red-900 bg-red-900 px-6 py-2 font-medium text-white transition-colors hover:bg-white hover:text-red-900">
                      View Menu
                    </button>
                  </div>
                </div>

                {/* Image section */}
                <div className="relative order-1 h-[400px] overflow-hidden sm:order-2 sm:h-auto">
                  <img
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    src="buffalo wings.webp"
                    alt="Delicious buffalo wings with dipping sauce"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
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
