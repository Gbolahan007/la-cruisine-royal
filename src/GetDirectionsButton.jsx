'use client';

import { motion } from 'framer-motion';

const RESTAURANT_COORDS = { lat: 6.52196878158467, lng: 3.366863837056762 };

function GetDirectionsButton() {
  const handleGetDirections = () => {
    const destination = `${RESTAURANT_COORDS.lat},${RESTAURANT_COORDS.lng}`;
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${destination}`, '_blank');
  };

  return (
    <motion.button
      onClick={handleGetDirections}
      className="fixed bottom-8 right-8 z-50 rounded-lg bg-black px-6 py-3 text-white transition duration-300 hover:bg-gray-800"
      aria-label="Get directions to our restaurant"
      animate={{ y: [0, -12, 0] }} // Moves up and back down
      transition={{
        type: 'spring',
        stiffness: 200, // More bounce
        damping: 10, // Slows down the bounce
        duration: 0.6, // Quick bounce
        repeat: Infinity, // Keep repeating
        repeatDelay: 10, // Bounce every 10s
      }}
    >
      Get Directions
    </motion.button>
  );
}

export default GetDirectionsButton;
