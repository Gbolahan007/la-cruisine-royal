import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './src/cart/cartSlice';
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
