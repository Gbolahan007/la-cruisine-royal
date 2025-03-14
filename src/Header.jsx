import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { HiOutlineBars4 } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';
import NavigationMenu from './NavigationMenu';

function Header() {
  const navigate = useNavigate();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleModal() {
    console.log('open');
    setIsOpenModal(true);
  }

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-6 sm:justify-around">
        {/* Logo */}
        <div
          onClick={() => navigate('/home')}
          className={`cursor-pointer text-2xl font-bold ${
            scrolled ? 'text-black' : 'font-primary text-white'
          }`}
        >
          <span className="text-yellow-300">La</span> Cruisine Royal
        </div>

        {/* Desktop Menu */}
        <NavigationMenu scrolled={scrolled} />

        {/* Mobile Menu Button */}
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
      </nav>

      {/* Mobile Menu with AnimatePresence */}
      <AnimatePresence>
        {isOpenModal && <HamburgerMenu isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />}
      </AnimatePresence>
    </header>
  );
}

export default Header;
