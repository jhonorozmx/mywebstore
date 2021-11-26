import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut } from "./authThunks";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: JSON.parse(localStorage.getItem("authorized")),
    isLoading: false,
    error: {
      hasError: false,
      errorMessage: "",
    },
  },

  reducers: {
    clearAuthError: (state) => {
      state.error = {
        hasError: false,
        errorMessage: "",
      };
    },
  },

  extraReducers: {
    [logIn.pending]: (state) => {
      state.error.hasError = false;
      state.isLoading = true;
    },

    [logIn.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = action.payload;
    },

    [logIn.rejected]: (state, action) => {
      state.error = {
        hasError: true,
        errorMessage: action.payload,
      };
      state.isLoading = false;
    },

    [logOut.pending]: (state) => {
      state.error.hasError = false;
      state.isLoading = true;
    },

    [logOut.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = action.payload;
    },

    [logOut.rejected]: (state, action) => {
      state.error.hasError = true;
      state.isLoading = false;
    },
  },
});

export const { clearAuthError } = authSlice.actions;

export default authSlice.reducer;
