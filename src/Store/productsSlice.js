import { createSlice } from "@reduxjs/toolkit";

const initialState = { products: [] };
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

export function getProducts() {
  return async function getProductsThunk(dispatch, getState) {
    const data = await fetch("https://fakestoreapi.com/products");
    const res = await data.json();
    dispatch(fetchProducts(res));
  };
}
