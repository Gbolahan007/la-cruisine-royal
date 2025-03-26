import { motion } from 'framer-motion';
import { FiX, FiShoppingCart } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../cart/cartSlice';
import { Link, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Parallax } from 'react-parallax';
import Loader from '../../Loader';
import useGetItem from '../../pages/useGetItem';
import { useMoveBack } from '../../hooks/useMoveBack';
import { FaCartShopping } from 'react-icons/fa6';

const formatPrice = (price) => `₦${price.toLocaleString()}`;

function MenuDetail() {
  const { slug } = useParams();
  const { item, isLoadingItem } = useGetItem();
  const moveBack = useMoveBack();
  const dispatch = useDispatch();

  if (isLoadingItem) return <Loader />;

  function handleAddToCart(menuItem) {
    dispatch(addItem(menuItem));
    toast.success(`${menuItem.name} added to cart`);
  }

  return (
    <div className="relative">
      {/* Parallax Background */}
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage="/barrrr.webp"
        bgImageAlt="Restaurant Background"
        strength={800}
        className="h-[400px]"
        bgImageStyle={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

      {/* Menu Content */}
      <div className="container mx-auto px-6 py-16 font-primary3">
        <h2 className="mb-10 text-center text-4xl font-extrabold uppercase text-gray-900">
          {slug.replaceAll('-', ' ')}
        </h2>

        <div className="space-y-8">
          {item.map((menuItem) => (
            <Link
              key={menuItem.id}
              to={`/menu/${menuItem.category}/${menuItem.slug}`}
              className="block"
            >
              <div className="flex items-center justify-between border-b border-gray-300 pb-6">
                <div className="max-w-2xl">
                  <h3 className="text-2xl font-semibold text-gray-900">{menuItem.name}</h3>
                  <p className="mt-2 text-lg leading-relaxed text-gray-600">
                    {menuItem.description}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl font-bold text-red-600">
                    {formatPrice(menuItem.price)}
                  </span>
                  {/* Add to Cart Button (Icon Only) */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddToCart(menuItem);
                    }}
                    className="hover:text-yellow-500"
                  >
                    <FaCartShopping size={24} />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Back Button */}
      <div className="my-7 flex justify-center">
        <button
          className="rounded-full bg-gray-900 px-6 py-3 text-lg font-semibold text-white shadow-lg transition hover:bg-gray-800"
          onClick={moveBack}
        >
          ← Back
        </button>
      </div>
    </div>
  );
}

export default MenuDetail;
