import { createSlice } from "@reduxjs/toolkit";
import { APP_STATUS, PostState } from "../../interface";
import { createPost } from "../action";

const initialState: PostState = {
  isLoading: false,
  message: '',
  status: APP_STATUS.INITIAL
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
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
  }
})

export default postSlice.reducer