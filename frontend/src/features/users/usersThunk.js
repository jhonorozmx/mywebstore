import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const signIn = createAsyncThunk(
  "user/signIn",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await Axios.post("/api/users/signin", {
        email,
        password,
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      return data;
    } catch (error) {
      return rejectWithValue("Incorrect email or password");
    }
  }
);

export const signOut = createAsyncThunk("user/signOut", () => {
  localStorage.removeItem("userInfo");
  return null;
});

export const userRegister = createAsyncThunk(
  "user/register",
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const { data } = await Axios.post("/api/users/register", {
        name,
        email,
        password,
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      return data;
    } catch (error) {
      return rejectWithValue("Email already in use, try signin in instead");
    }
  }
);
