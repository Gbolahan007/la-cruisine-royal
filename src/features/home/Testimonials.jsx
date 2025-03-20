import React from 'react';
import { FaStar, FaStarHalfAlt, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sophie Ogulo',
      role: 'Food Blogger',
      quote:
        'The flavors at La Cruisine Royal are incredible! Their seafood paella took me straight to Spain. The ambiance is elegant yet cozy.',
      rating: 5,
      avatar: '/african-teenage.webp',
    },
    {
      id: 2,
      name: 'Babajide Dare',
      role: 'Regular Customer',
      quote:
        'I’ve been coming here for years, and the quality never disappoints. Great cocktails, amazing food, and top-notch service!',
      rating: 4.5,
      avatar: '/casual-young.webp',
    },
    {
      id: 3,
      name: 'Akpo Daniel',
      role: 'Culinary Enthusiast',
      quote:
        'The chef’s tasting menu was unforgettable. Every dish told a story, and the wine pairings were perfect and so nice!',
      rating: 5,
      avatar: '/close-up-serious.webp',
    },
  ];

  return (
    <div className="relative mt-48 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What Our Guests Say</h2>
          <p className="mt-4 text-xl text-gray-500">Delighting Taste Buds, One Review at a Time</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative rounded-lg bg-white p-8 shadow-lg transition-transform duration-300 hover:scale-105"
            >
              {/* Large quote icon in the background */}
              <div className="absolute left-4 top-4 text-gray-100">
                <FaQuoteLeft size={64} />
              </div>

              {/* Prominent quote with larger text */}
              <blockquote className="relative z-10 mb-8 text-lg font-medium italic text-gray-700">
                {testimonial.quote}
              </blockquote>

              {/* Customer details with rating */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="mr-4 h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>

                {/* Star rating */}
                <div className="ml-auto flex text-amber-400">
                  {Array.from({ length: Math.floor(testimonial.rating) }).map((_, i) => (
                    <FaStar key={`full-${i}`} className="h-4 w-4" />
                  ))}
                  {testimonial.rating % 1 !== 0 && <FaStarHalfAlt className="h-4 w-4" />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
