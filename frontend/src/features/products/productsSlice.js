import { createSlice } from "@reduxjs/toolkit";
import {
  getUserProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} from "./productsThunk";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    selectedProduct: {},
    isLoading: false,
    error: {
      hasError: false,
      errorMessage: "",
    },
  },

  reducers: {
    clearProductError: (state) => {
      state.error = {
        hasError: false,
        errorMessage: "",
      };
    },

    clearProductList: (state) => {
      state.allProducts = [];
    },
  },

  extraReducers: {
    [getUserProducts.pending]: (state) => {
      state.error.hasError = false;
      state.isLoading = true;
    },

    [getUserProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.allProducts = [...action.payload];
    },

    [getUserProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = {
        hasError: true,
        errorMessage: action.payload,
      };
    },

    [createProduct.pending]: (state) => {
      state.error.hasError = false;
      state.isLoading = true;
    },

    [createProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.allProducts = [...state.allProducts, action.payload];
    },

    [createProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = {
        hasError: true,
        errorMessage: action.payload,
      };
    },

    [updateProduct.pending]: (state) => {
      state.error.hasError = false;
      state.isLoading = true;
    },

    [updateProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.allProducts = action.payload;
    },

    [updateProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = {
        hasError: true,
        errorMessage: action.payload,
      };
    },

    [deleteProduct.pending]: (state) => {
      state.error.hasError = false;
      state.isLoading = true;
    },

    [deleteProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.allProducts = [...action.payload];
    },

    [deleteProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = {
        hasError: true,
        errorMessage: action.payload,
      };
    },
  },
});

export const { clearProductError, clearProductList } = productsSlice.actions;
export default productsSlice.reducer;
