import { useNavigate } from 'react-router-dom';

const StorySection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative z-10 bg-white py-28 text-center">
      <h1 className="font-primary2 text-5xl text-yellow-500">New Beginnings</h1>
      <h1 className="font-sans text-5xl font-bold text-gray-900">Our Story</h1>
      <p className="mt-4 text-lg text-gray-700">
        La Cruisine Royal has created an atmosphere of effortless indulgence, spiced with
        world-class entertainment.
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
  );
};

export default StorySection;
