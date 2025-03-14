import { NavLink } from 'react-router-dom';

function NavigationMenu({ scrolled }) {
  return (
    <nav className="hidden sm:block">
      <ul className="flex items-center space-x-6 font-semibold text-white">
        {[
          { to: '/home', label: 'Home' },
          { to: '/about', label: 'About' },
          { to: '/menu', label: 'Menu' },
          { to: '/services', label: 'Services' },
          { to: '/contact', label: 'Contact' },
          { to: '/login', label: 'Login' },
        ].map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                isActive
                  ? 'text-yellow-400'
                  : scrolled
                    ? 'text-black hover:text-yellow-400'
                    : 'text-white hover:text-yellow-200'
              }
            >
              {label}
            </NavLink>
          </li>
        ))}

        <li className="group relative overflow-hidden">
          <NavLink
            to="/reservation"
            className={({ isActive }) =>
              isActive
                ? 'bg-yellow-400 px-6 py-2 text-black'
                : scrolled
                  ? 'border-2 border-yellow-400 px-6 py-2 text-black hover:bg-yellow-400 hover:text-white'
                  : 'border-2 border-yellow-400 px-6 py-2 text-white hover:bg-yellow-400 hover:text-black'
            }
          >
            Reservation
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationMenu;
