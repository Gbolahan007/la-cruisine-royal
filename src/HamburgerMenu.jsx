import { HiOutlineXMark } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

function HamburgerMenu({ setIsOpenModal }) {
  const navigate = useNavigate();

  // Function to handle navigation and close modal
  const handleNavigation = (path) => {
    navigate(path);
    setIsOpenModal(false);
  };

  return (
    <div className="fixed left-0 top-0 z-50 w-full bg-white p-4 shadow-lg">
      {/* Close Button */}
      <div className="flex justify-end">
        <button
          onClick={() => setIsOpenModal(false)}
          aria-label="Close menu"
          className="cursor-pointer rounded-md p-2 transition hover:bg-gray-200"
        >
          <HiOutlineXMark size={24} />
        </button>
      </div>

      {/* Menu Items */}
      <ul className="z-50 mt-1 flex flex-col gap-4 text-center">
        <li>
          <button
            onClick={() => handleNavigation('/about')}
            className="block w-full pb-2 uppercase transition hover:text-yellow-600"
          >
            About Us
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavigation('/menu')}
            className="block w-full pb-2 uppercase transition hover:text-yellow-600"
          >
            Menu
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavigation('/services')}
            className="block w-full pb-2 uppercase transition hover:text-yellow-600"
          >
            Services
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavigation('/contact')}
            className="block w-full pb-2 uppercase transition hover:text-yellow-600"
          >
            Contact
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavigation('/reservation')}
            className="block w-full pb-2 uppercase transition hover:text-yellow-600"
          >
            Reservation
          </button>
        </li>
      </ul>
    </div>
  );
}

export default HamburgerMenu;
