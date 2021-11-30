import { createSlice } from "@reduxjs/toolkit";
import { getUserSales, createSale } from "./salesThunk";

export const salesSlice = createSlice({
  name: "sales",
  initialState: {
    mySales: [],
    selectedSale: {},
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
    [getUserSales.pending]: (state) => {
      state.isLoading = true;
      state.error.hasError = false;
    },

    [getUserSales.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.mySales = [...action.payload];
    },

    [getUserSales.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = {
        hasError: true,
        errorMessage: action.payload,
      };
    },

    // [getProductById.pending]: (state) => {
    //   state.error.hasError = false;
    //   state.isLoading = true;
    // },

    // [getProductById.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.selectedProduct = action.payload;
    // },

    // [getProductById.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = {
    //     hasError: true,
    //     errorMessage: action.payload,
    //   };
    // },

    [createSale.pending]: (state) => {
      state.error.hasError = false;
      state.isLoading = true;
    },

    [createSale.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.mySales = [...state.mySales, action.payload];
    },

    [createSale.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = {
        hasError: true,
        errorMessage: action.payload,
      };
    },

    // [updateProduct.pending]: (state) => {
    //   state.error.hasError = false;
    //   state.isLoading = true;
    // },

    // [updateProduct.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.allProducts = action.payload;
    // },

    // [updateProduct.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = {
    //     hasError: true,
    //     errorMessage: action.payload,
    //   };
    // },

    // [deleteProduct.pending]: (state) => {
    //   state.error.hasError = false;
    //   state.isLoading = true;
    // },

    // [deleteProduct.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.allProducts = [...action.payload];
    // },

    // [deleteProduct.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = {
    //     hasError: true,
    //     errorMessage: action.payload,
    //   };
    // },
  },
});

export default salesSlice.reducer;
