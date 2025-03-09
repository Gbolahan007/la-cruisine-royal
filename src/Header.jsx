// In your Header.jsx
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="absolute left-0 right-0 top-0 z-10 bg-black">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="text-xl font-bold text-white">La Cruisine Royal</div>

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
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'font-medium text-yellow-400' : 'text-white hover:text-yellow-200'
              }
            >
              About
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
    </header>
  );
}

export default Header;
