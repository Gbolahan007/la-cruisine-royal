// In your Header.jsx
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { HiOutlineBars4 } from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';

function Header() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleModal() {
    setIsOpenModal(true);
  }
  return (
    <header className="h-screen bg-cover bg-center"
    style={{ backgroundImage: "url('/homeImage.webp')" }}>
      <nav className="container mx-auto flex   items-center justify-between p-4 sm:justify-around">
        <div className=" text-xl font-bold text-white">La Cruisine Royal</div>

        <nav className="hidden sm:block">
          <ul className="flex space-x-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'font-medium text-yellow-400' : 'text-white hover:text-yellow-200'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? 'font-medium text-yellow-400' : 'text-white hover:text-yellow-200'
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? 'font-medium text-yellow-400' : 'text-white hover:text-yellow-200'
                }
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? 'font-medium text-yellow-400' : 'text-white hover:text-yellow-200'
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? 'font-medium text-yellow-400' : 'text-white hover:text-yellow-200'
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="cursor-pointer sm:hidden">
          <button
            onClick={handleModal}
            className="rounded-full p-2 transition-all duration-200 hover:bg-gray-100"
          >
            <HiOutlineBars4 size={27} />
          </button>
        </div>

        <AnimatePresence>
          {isOpenModal && (
            <HamburgerMenu isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Header;
