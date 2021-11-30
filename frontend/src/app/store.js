import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/usersSlice";
import productsReducer from "../features/products/productsSlice";
import postsReducer from "../features/posts/postsSlice";
import cartReducer from "../features/cart/cartSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
    cart: cartReducer,
    posts: postsReducer,
  },
});
