import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/usersSlice";
import postsReducer from "../features/posts/postsSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
  },
});
