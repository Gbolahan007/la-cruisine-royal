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
          <div className="mx-16 mt-4">
            {/* Content section */}
            <div className="grid grid-cols-1 items-center justify-center border border-red-900 sm:grid-cols-2">
              {' '}
              <div className="bg-white py-36 text-center text-gray-900">
                <h1>Food varieties</h1>
                <h2>our menu</h2>

                <p>
                  A sanctuary for everyone who Desire a self-treatment, we have carefully curated to
                  redefine the world Fine Dining, Bar and Entertainment. Allowing Guests to relax,
                  Socialize and celebrate in the most elegant Environment that stimulates the body
                  and soul, creating an unforgettable Emotional Experience.
                </p>
              </div>
              {/* Image section */}
              <div className="flex h-[431px] items-center">
                <img className="h-full w-full object-cover" src="/barbecue wings.webp" alt="" />
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
