import { createSlice } from "@reduxjs/toolkit";
import { addPost, deletePost, getPosts } from "../../services/firebase/post";

const initialState = { posts: [] };

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { setPosts } = postSlice.actions;

export const fetchPostsAsync = async (dispatch) => {
  const fetchedPosts = await getPosts();
  dispatch(setPosts(fetchedPosts));
};

export const deletePostAsync = (id) => async (dispatch) => {
  await deletePost(id);
  dispatch(fetchPostsAsync);
};

export const createPostAsync =
  (postDescription, userId) => async (dispatch) => {
    await addPost(postDescription, userId);
    dispatch(fetchPostsAsync);
  };

const reducer = postSlice.reducer;

export default reducer;
