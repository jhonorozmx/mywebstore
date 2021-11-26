import { createAsyncThunk } from "@reduxjs/toolkit";

export const logIn = createAsyncThunk(
  "auth/login",
  ({ user, pass }, { rejectWithValue }) => {
    if (user !== "example@example.com" || pass !== "password") {
      return rejectWithValue("Incorrect user or password");
    } else {
      localStorage.setItem("authorized", "true");
      return true;
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", () => {
  localStorage.setItem("authorized", "false");
  return false;
});
