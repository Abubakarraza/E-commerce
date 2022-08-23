import { configureStore } from '@reduxjs/toolkit';
import CartSlice from '../../slices/cart/CartSlice';
import ProductSlice from '../../slices/product/ProductSlice';
const Store = configureStore({
  reducer: {
    products: ProductSlice,
    cart: CartSlice,
  },
});
export default Store;
