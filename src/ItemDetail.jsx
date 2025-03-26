import { FiShoppingCart } from 'react-icons/fi';
import { Parallax } from 'react-parallax';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './cart/cartSlice';
import useItem from './pages/useItem';
import { useMoveBack } from './hooks/useMoveBack';
import Loader from './Loader';
import toast from 'react-hot-toast';

const formatPrice = (price) => `₦${price.toLocaleString()}`;

function ItemDetail() {
  const dispatch = useDispatch();
  const moveBack = useMoveBack();
  const { itemData, isLoadingItemData } = useItem();

  if (isLoadingItemData) return <Loader />;
  if (!itemData || itemData.length === 0)
    return <div className="py-12 text-center">No items found</div>;

  function handleAddToCart(item) {
    dispatch(addItem(item));
    toast.success(`${item.name} has been added to cart`);
  }

  return (
    <div className="relative">
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
      <div className="container mx-auto px-4 py-12 font-primary2">
        {itemData.map((item) => (
          <div
            key={item.id}
            className="mb-12 grid gap-12 border-b border-gray-200 pb-12 md:grid-cols-2"
          >
            {/* Image Section */}
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={item.image || '/placeholder-image.png'}
                alt={item.name}
                className="h-[500px] w-full object-cover"
              />
            </div>

            {/* Details Section */}
            <div className="flex flex-col space-y-6">
              {/* Name and Description */}
              <div>
                <h1 className="mb-4 text-4xl font-bold text-gray-900">{item.name}</h1>
                <p className="text-lg text-gray-600">{item.description}</p>
              </div>

              {/* Price */}
              <div className="flex items-center justify-between rounded-lg bg-gray-100 p-4">
                <span className="text-3xl font-bold text-green-600">
                  {formatPrice(item.price) || 'Price not available'}
                </span>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(item)}
                className="flex w-full items-center justify-center space-x-3 rounded-lg bg-blue-600 py-4 text-white transition hover:bg-blue-700"
              >
                <FiShoppingCart size={24} />
                <span className="text-lg font-semibold">Add to Cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        className="mx-4 my-3 bg-gray-900 px-6 py-3 text-lg font-semibold text-white shadow-lg transition hover:bg-gray-800"
        onClick={moveBack}
      >
        ← Back
      </button>
    </div>
  );
}

export default ItemDetail;
