import { FiShoppingCart } from 'react-icons/fi';
import { useSelector } from 'react-redux';

function HeaderCart({ scrolled }) {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="relative cursor-pointer">
      {/* Cart Icon */}
      <FiShoppingCart size={28} className={` ${scrolled ? 'text-black' : 'text-white'}`} />

      {/* Cart Count Badge at the Tip */}
      <div className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full border bg-yellow-500 text-xs font-bold text-white shadow-md">
        {cart.length}
      </div>
    </div>
  );
}

export default HeaderCart;
