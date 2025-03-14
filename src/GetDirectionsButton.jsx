'use client';

import { motion } from 'framer-motion';
import { MdLocationOn } from 'react-icons/md';

const RESTAURANT_COORDS = { lat: 6.52196878158467, lng: 3.366863837056762 };

function GetDirectionsButton() {
  const handleGetDirections = () => {
    const destination = `${RESTAURANT_COORDS.lat},${RESTAURANT_COORDS.lng}`;
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${destination}`, '_blank');
  };

  return (
    <motion.button
      onClick={handleGetDirections}
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center gap-2 rounded-lg bg-black px-6 py-3 text-white transition duration-300 hover:bg-gray-800"
      aria-label="Get directions to our restaurant"
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration: 1,
        times: [0, 0.5, 1],
        type: 'spring',
        stiffness: 300,
        damping: 10,
        repeat: Infinity,
        repeatDelay: 5, // Shorter delay for testing
      }}
    >
      <MdLocationOn className="text-xl" />
      <span>Get Directions</span>
    </motion.button>
  );
}

export default GetDirectionsButton;
