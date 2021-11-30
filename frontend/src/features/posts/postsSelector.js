export const selectPostsLoading = (state) => state.posts.isLoading;

export const selectPostsError = (state) => state.posts.error;

export const selectPosts = (state) => state.posts.posts;

export const selectPostById = (state) => state.posts.selectedPost;
