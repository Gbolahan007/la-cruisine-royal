const RESTAURANT_COORDS = { lat: 6.52196878158467, lng: 3.366863837056762 };

function GetDirectionsButton() {
  const handleGetDirections = () => {
    const destination = `${RESTAURANT_COORDS.lat},${RESTAURANT_COORDS.lng}`;
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${destination}`, '_blank');
  };

  return (
    <button
      onClick={handleGetDirections}
      className="relative rounded-lg bg-black px-6 py-3 text-white transition duration-300 hover:bg-gray-800"
      aria-label="Get directions to our restaurant"
    >
      Get Directions
    </button>
  );
}

export default GetDirectionsButton;
