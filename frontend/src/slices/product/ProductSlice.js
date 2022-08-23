import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  loading: true,
  product: [],
  error: '',
};
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: {},
});
export default productSlice.reducer;
