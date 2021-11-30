import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const getUserSales = createAsyncThunk(
  "sales/getUserSales",
  async ({ userId }, { rejectWithValue }) => {
    try {
      const { data } = await Axios.get(`/api/sales/myorders/${userId}`);
      return data;
    } catch (error) {
      return rejectWithValue("An error occurred while loading sale");
    }
  }
);

export const getSaleById = createAsyncThunk(
  "sales/getSaleById",
  async (id, { getState, rejectWithValue }) => {
    const {
      products: { allProducts },
    } = getState();

    const foundProduct = allProducts.find((product) => product._id === id);

    if (foundProduct) {
      return foundProduct;
    } else {
      return rejectWithValue("Product Does Not Exist");
    }
  }
);

export const createSale = createAsyncThunk(
  "sales/createSale",
  async (
    { subtotal, tax, total, status, userId, orderItems },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await Axios.post(`/api/sales/`, {
        itemsPrice: subtotal,
        taxPrice: tax,
        totalPrice: total,
        status: status,
        user: userId,
        orderItems: orderItems,
      });
      return data;
    } catch (error) {
      return rejectWithValue("An error occurred while adding a sale");
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
