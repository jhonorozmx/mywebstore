import { createSlice } from "@reduxjs/toolkit";
import { signIn, signOut, userRegister } from "./usersThunk";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
    isLoading: false,
    error: {
      hasError: false,
      errorMessage: "",
    },
  },

  reducers: {
    clearUserError: (state) => {
      state.error = {
        hasError: false,
        errorMessage: "",
      };
    },
  },

  extraReducers: {
    [signIn.pending]: (state) => {
      state.error.hasError = false;
      state.isLoading = true;
    },

    [signIn.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userInfo = action.payload;
    },

    [signIn.rejected]: (state, action) => {
      state.error = {
        hasError: true,
        errorMessage: action.payload,
      };
      state.isLoading = false;
    },

    [signOut.pending]: (state) => {
      state.error.hasError = false;
      state.isLoading = true;
    },

    [signOut.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userInfo = action.payload;
    },

    [signOut.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = {
        hasError: true,
        errorMessage: "Something happened while logging out",
      };
    },

    [userRegister.pending]: (state) => {
      state.error.hasError = false;
      state.isLoading = true;
    },

    [userRegister.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userInfo = action.payload;
    },

    [userRegister.rejected]: (state, action) => {
      state.error = {
        hasError: true,
        errorMessage: action.payload,
      };
      state.isLoading = false;
    },
  },
});

export const { clearUserError } = userSlice.actions;

export default userSlice.reducer;
