import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const getUserProducts = createAsyncThunk(
  "products/getUserProducts",
  async ({ userId }, { rejectWithValue }) => {
    try {
      const { data } = await Axios.get(`api/users/${userId}/products`);
      return data;
    } catch (error) {
      return rejectWithValue("An error occurred while loading products");
    }
  }
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async ({ pname, pbrand, pprice, userId }, { rejectWithValue }) => {
    try {
      const { data } = await Axios.post(`/api/products`, {
        name: pname,
        brand: pbrand,
        price: pprice,
        owner: userId,
      });
      return data;
    } catch (error) {
      return rejectWithValue("An error occurred while adding a product");
    }
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (
    { pId, pname, pbrand, pprice, userId },
    { rejectWithValue, getState }
  ) => {
    try {
      const { data } = await Axios.put(`/api/products`, {
        productId: pId,
        name: pname,
        brand: pbrand,
        price: pprice,
        owner: userId,
      });

      const {
        products: { allProducts },
      } = getState();

      const newProducts = allProducts.filter((product) => product._id !== pId);
      return [data, ...newProducts];
    } catch (error) {
      return rejectWithValue("An error occurred while updating a product");
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id, { getState, rejectWithValue }) => {
    try {
      await Axios.delete(`/api/products/${id}`);
      const {
        products: { allProducts },
      } = getState();

      return allProducts.filter((product) => product._id !== id);
    } catch (error) {
      return rejectWithValue("An error occurred while deleting a product");
    }
  }
);
