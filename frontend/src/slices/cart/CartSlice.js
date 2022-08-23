import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  carts: {
    cartItem: [],
  },
};
const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      return {
        ...state,
        carts: {
          ...state.carts,
          cartItem: [...state.carts.cartItem, action.payload],
        },
      };
    },
  },
  extraReducers: {},
});
export default CartSlice.reducer;
export const { addToCart } = CartSlice.actions;
