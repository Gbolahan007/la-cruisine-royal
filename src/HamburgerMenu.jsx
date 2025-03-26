import { HiOutlineXMark } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import HeaderCart from './Headercart';
import { useModal } from './contexts/ModalContexts';

function HamburgerMenu({ setIsOpenModal }) {
  const { setShowModal } = useModal();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpenModal(false);
  };

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 z-40 bg-black/50" onClick={() => setIsOpenModal(false)}></div>

      {/* Sidebar Menu */}
      <div className="fixed right-0 top-0 z-50 h-full w-80 bg-black/90 p-4 shadow-lg">
        {/* Close Button */}
        <div className="flex justify-end">
          <button
            onClick={() => setIsOpenModal(false)}
            aria-label="Close menu"
            className="cursor-pointer rounded-md p-2 transition hover:bg-gray-600"
          >
            <HiOutlineXMark color="white" size={24} />
          </button>
        </div>

        {/* Menu Items */}
        <ul className="z-50 mt-1 flex flex-col gap-4 text-center text-white">
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

          <div
            onClick={() => {
              setShowModal(true);
              setIsOpenModal(false);
            }}
            className="inline-flex items-center justify-center"
          >
            <HeaderCart />
          </div>
        </ul>
      </div>
    </>
  );
}

export default HamburgerMenu;
