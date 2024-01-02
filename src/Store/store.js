import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productsSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    products: productSlice,
    cart: cartSlice,
  },
});
export default store;
