import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { HiOutlineBars4 } from 'react-icons/hi2';
import { NavLink, useNavigate } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';

function Header() {
  const navigate = useNavigate();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled more than 50px
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleModal() {
    setIsOpenModal(true);
  }

  return (
    <header
      className={`fixed left-0 top-0 z-10 w-full transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-6 sm:justify-around">
        <div
          onClick={() => navigate('/home')}
          className={`cursor-pointer text-2xl font-bold ${scrolled ? 'text-black' : 'font font-primary text-white'}`}
        >
          <span className="text-yellow-300">La</span> Cruisine Royal
        </div>

        <nav className="hidden sm:block">
          <ul className="flex space-x-6 font-semibold">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'font-medium text-yellow-400'
                    : scrolled
                      ? 'text-black hover:text-yellow-400'
                      : 'text-white hover:text-yellow-200'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? 'font-medium text-yellow-400'
                    : scrolled
                      ? 'text-black hover:text-yellow-400'
                      : 'text-white hover:text-yellow-200'
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? 'font-medium text-yellow-400'
                    : scrolled
                      ? 'text-black hover:text-yellow-400'
                      : 'text-white hover:text-yellow-200'
                }
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? 'font-medium text-yellow-400'
                    : scrolled
                      ? 'text-black hover:text-yellow-400'
                      : 'text-white hover:text-yellow-200'
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? 'font-medium text-yellow-400'
                    : scrolled
                      ? 'text-black hover:text-yellow-400'
                      : 'text-white hover:text-yellow-200'
                }
              >
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/Reservation"
                className={({ isActive }) =>
                  isActive
                    ? 'font-medium text-yellow-400'
                    : scrolled
                      ? 'text-black hover:text-yellow-400'
                      : 'text-white hover:text-yellow-200'
                }
              >
                Reservation
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/Login"
                className={({ isActive }) =>
                  isActive
                    ? 'font-medium text-yellow-400'
                    : scrolled
                      ? 'text-black hover:text-yellow-400'
                      : 'text-white hover:text-yellow-200'
                }
              >
                Login
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="absolute right-4 cursor-pointer sm:hidden">
          <button
            onClick={handleModal}
            className={`rounded-full p-2 transition-all duration-200 ${
              scrolled ? 'text-black hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
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
