import { Parallax } from 'react-parallax';
import { Link as ScrollLink } from 'react-scroll';
import RestaurantForm from '../features/reservation/RestaurantForm';

function Reservation() {
  return (
    <div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage="/barrr.webp"
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
          <div>
            <h1 className="mt-4 text-center font-serif text-5xl font-bold uppercase">
              Make a reservation
            </h1>
            <p className="text-center">
              Booking a table online is easy and takes just a couple of minutes.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="mt-8 flex space-x-12">
            <ScrollLink
              to="reservation"
              smooth={true}
              duration={800}
              className="cursor-pointer border-b-2 border-transparent px-4 py-2 text-xl font-medium uppercase transition-colors hover:border-yellow-300 hover:text-yellow-300"
            >
              Reservation
            </ScrollLink>
          </div>
        </div>
      </Parallax>
      <div className="my-16">
        <RestaurantForm />
      </div>
    </div>
  );
}

export default Reservation;
