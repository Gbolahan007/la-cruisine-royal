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
        <>
          {/* Blurry Overlay */}
          <motion.div
            className="fixed inset-0 z-[999] bg-black/40 backdrop-blur-sm"
            onClick={() => setIsOpenModal(false)}
          ></motion.div>

          {/* Sidebar Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
            className="font-oswald text-custom-black fixed right-0 top-0 z-[1000] h-screen w-80 bg-white p-4 shadow-lg"
          >
            {/* Close Button */}
            <div className="flex justify-end">
              <button
                onClick={() => setIsOpenModal(false)}
                aria-label="Close menu"
                className="rounded-md p-2 transition hover:bg-gray-200"
              >
                <HiOutlineXMark size={24} />
              </button>
            </div>

            {/* Menu Items */}
            <ul className="mt-4 flex flex-col gap-4">
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
            </ul>
          </motion.div>
        </>
      )}
    </div>
  );
}

export default HamburgerMenu;
