import { createAsyncThunk } from "@reduxjs/toolkit";

export const removeFromCart = createAsyncThunk(
  "cart/remove",
  (index, { getState }) => {
    const {
      cart: { cartItems },
    } = getState();

    const newCart = [...cartItems];
    newCart.splice(index, 1);
    return newCart;
  }
);
