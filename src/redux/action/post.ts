/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreatePostPayload } from "../../interface";
import { postService } from "../../service/post";

export const createPost = createAsyncThunk(
  'post/create-post',
  async (payload: CreatePostPayload) => {
    try {
      const createPostResponse = await postService.createPost(payload)

      return createPostResponse
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
)

export const postAction = {
  createPost
}