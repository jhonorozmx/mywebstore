import { createSlice } from "@reduxjs/toolkit";
import { getPosts, getPostById, createPost, deletePost } from "./postsThunk";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    selectedPost: {},
    isLoading: false,
    error: {
      hasError: false,
      errorMessage: "",
    },
  },

  reducers: {
    clearPostError: (state) => {
      state.error = {
        hasError: false,
        errorMessage: "",
      };
    },
  },

  extraReducers: {
    [getPosts.pending]: (state) => {
      state.error.hasError = false;
      state.isLoading = true;
    },

    [getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = [...action.payload];
    },

    [getPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = {
        hasError: true,
        errorMessage: action.payload,
      };
    },

    [getPostById.pending]: (state) => {
      state.error.hasError = false;
      state.isLoading = true;
    },

    [getPostById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.selectedPost = action.payload;
    },

    [getPostById.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = {
        hasError: true,
        errorMessage: action.payload,
      };
    },

    [createPost.pending]: (state) => {
      state.error.hasError = false;
      state.isLoading = true;
    },

    [createPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = [...state.posts, action.payload];
    },

    [createPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = {
        hasError: true,
        errorMessage: action.payload,
      };
    },

    [deletePost.pending]: (state) => {
      state.error.hasError = false;
      state.isLoading = true;
    },

    [deletePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = [...action.payload];
    },

    [deletePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = {
        hasError: true,
        errorMessage: action.payload,
      };
    },
  },
});

export const { clearPostError } = postsSlice.actions;
export default postsSlice.reducer;
