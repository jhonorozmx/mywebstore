import { createSlice } from "@reduxjs/toolkit";
import { removeFromCart } from "./cartThunk";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },

  reducers: {
    emptyCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem("cartItems");
    },

    addToCart: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },

  extraReducers: {
    [removeFromCart.fulfilled]: (state, action) => {
      state.cartItems = [...action.payload];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { clearCart, addToCart } = cartSlice.actions;
export default cartSlice.reducer;
