import { HiOutlineXMark } from 'react-icons/hi2';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function HamburgerMenu({ isOpenModal, setIsOpenModal }) {
  const navigate = useNavigate();

  // Function to handle navigation and close modal
  const handleNavigation = (path) => {
    navigate(path);
    setIsOpenModal(false);
  };

  return (
    <div>
      {isOpenModal && (
        <motion.div
          initial={{ y: '-100%' }} // Start position (Above the screen)
          animate={{ y: 0 }} // Slide down to visible
          exit={{ y: '-100%' }} // Slide back up when closing
          transition={{ ease: 'easeInOut', duration: 0.5 }}
          className="absolute left-0 top-0 z-50 w-full bg-white p-4 shadow-lg"
        >
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
        </motion.div>
      )}
    </div>
  );
}

export default HamburgerMenu;
