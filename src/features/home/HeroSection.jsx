import { Parallax } from 'react-parallax';

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
