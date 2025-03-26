import { motion } from 'framer-motion';
import { FiX, FiTrash2 } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { useModal } from '../contexts/ModalContexts';
import { clearItem, decreaseItemQuantity, deleteItem, increaseItemQuantity } from './cartSlice';

const formatPrice = (price) => {
  return `₦${price.toLocaleString()}`;
};

function Cart() {
  const { showModal, setShowModal } = useModal();
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  // Calculate Total Price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      {showModal && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50"
            onClick={() => setShowModal(false)}
          />

          {/* Animated Modal */}
          <div className="fixed right-0 top-0 z-50 h-full w-full max-w-md bg-white shadow-xl sm:w-96 md:max-w-lg lg:max-w-xl xl:max-w-2xl">
            {/* Cart Header */}
            <div className="flex items-center justify-between border-b p-4">
              <h2 className="text-xl font-bold">Your Cart</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FiX size={24} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="max-h-[calc(100vh-250px)] space-y-4 overflow-y-auto p-4">
              {cart.length > 0 ? (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between space-x-4 border-b pb-4 sm:flex-row"
                  >
                    {/* Product Image */}
                    <div className="flex gap-1">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-20 w-20 rounded bg-gray-200 object-cover"
                      />

                      {/* Product Details */}
                      <div className="">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-gray-500">{formatPrice(item.price)}</p>
                        <div className="mt-2 flex items-center space-x-2 sm:justify-start">
                          <button
                            onClick={() => dispatch(decreaseItemQuantity(item.id))}
                            className="rounded bg-gray-200 px-2"
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => dispatch(increaseItemQuantity(item.id))}
                            className="rounded bg-gray-200 px-2"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Remove Item */}
                    <button
                      onClick={() => dispatch(deleteItem(item.id))}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FiTrash2 size={20} />
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500">Your cart is empty.</p>
              )}
            </div>

            {/* Cart Summary */}
            <div className="absolute bottom-0 left-0 right-0 border-t bg-white p-4">
              <button
                onClick={() => {
                  dispatch(clearItem());
                  setShowModal(false);
                }}
                className="mb-2 w-full cursor-pointer border border-gray-200 px-4 py-1"
              >
                Clear cart
              </button>
              <div className="mb-4 flex justify-between">
                <span className="font-bold">Total:</span>
                <span className="font-bold">{formatPrice(totalPrice)}</span>
              </div>
              <button className="w-full rounded bg-green-500 py-2 text-white transition-colors hover:bg-green-700">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Cart;
