import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  try {
    const { data } = await Axios.get(
      `https://jsonplaceholder.typicode.com/posts/?_page=1`
    );
    return data;
  } catch (error) {
    return error.message;
  }
});

export const getPostById = createAsyncThunk(
  "posts/setSelectedPost",
  async (id, { getState }) => {
    const {
      posts: { posts },
    } = getState();

    const foundPost = posts.find((post) => post.id === id);
    return foundPost;
  }
);

export const createPost = createAsyncThunk(
  "posts/createPost",
  async ({ title, body }, { getState }) => {
    const {
      posts: { posts },
    } = getState();

    const generateId = () => {
      if (posts.length !== 0) {
        const lastItem = posts[posts.length - 1];
        return lastItem.id + 1;
      }
      return 1;
    };

    const newPost = {
      userId: 1,
      id: generateId(),
      title: title,
      body: body,
    };
    return newPost;
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (id, { getState }) => {
    const {
      posts: { posts },
    } = getState();

    const newPosts = posts.filter((post) => post.id !== id);
    return newPosts;
  }
);
