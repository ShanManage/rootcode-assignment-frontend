import { createSlice } from "@reduxjs/toolkit";
import { APP_STATUS, Post, PostState } from "../../interface";
import { createPost, getAllPosts, getPost } from "../action";

const initialState: PostState = {
  isLoading: false,
  message: '',
  status: APP_STATUS.INITIAL,
  allPosts: [],
  viewPost: {} as Post
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = APP_STATUS.INITIAL
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(createPost.pending, (state) => {
      state.isLoading = true
      state.status = APP_STATUS.INITIAL
    })
    .addCase(createPost.fulfilled, (state) => {
      state.isLoading = false
      state.status = APP_STATUS.SUCCESS
    })
    .addCase(createPost.rejected, (state) => {
      state.isLoading = false
      state.status = APP_STATUS.ERROR
    })
    .addCase(getAllPosts.pending, (state) => {
      state.allPosts = []
      state.isLoading = true
    })
    .addCase(getAllPosts.fulfilled, (state, action) => {
      state.allPosts = action.payload.data
      state.isLoading = false
    })
    .addCase(getAllPosts.rejected, (state) => {
      state.allPosts = []
      state.isLoading = false
    })
    .addCase(getPost.pending, (state) => {
      state.viewPost = initialState.viewPost
      state.isLoading = true
    })
    .addCase(getPost.fulfilled, (state, action) => {
      state.viewPost = action.payload.data
      state.isLoading = false
    })
    .addCase(getPost.rejected, (state) => {
      state.viewPost = initialState.viewPost
      state.isLoading = false
    })
  }
})

export const {
  resetStatus
} = postSlice.actions

export default postSlice.reducer