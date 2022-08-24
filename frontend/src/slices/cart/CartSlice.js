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
    addToCart: (state, action) => {
      const itemInCart = state.carts.cartItem.find(
        (item) => item._id === action.payload._id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        return {
          ...state,
          carts: {
            ...state.carts,
            cartItem: [
              ...state.carts.cartItem,
              { ...action.payload, quantity: 1 },
            ],
          },
        };
      }
    },
  },
  extraReducers: {},
});
export default CartSlice.reducer;
export const { addToCart } = CartSlice.actions;
