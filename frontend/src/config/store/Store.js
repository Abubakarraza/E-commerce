import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from '../../slices/product/ProductSlice';
const Store = configureStore({
  reducer: {
    product: ProductSlice,
  },
});
export default Store;
