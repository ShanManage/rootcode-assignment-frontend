/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreatePostCommentPayload, CreatePostPayload } from "../../interface";
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

export const getAllPosts = createAsyncThunk(
  'post/get-all',
  async () => {
    try {
      const allPostsResponse = await postService.getAllPosts()
      
      return allPostsResponse;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
)

export const getPost = createAsyncThunk(
  'post/get-one-by-id',
  async (id: number) => {
    try {
      const postResponse = await postService.getPost(id)
      
      return postResponse;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
)

export const createPostComment = createAsyncThunk(
  'post/create-post-comment',
  async (payload: CreatePostCommentPayload) => {
    try {
      const createPostCommentResponse = await postService.createPostComment(payload)

      return createPostCommentResponse
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
)

export const postAction = {
  createPost,
  getAllPosts,
  getPost,
  createPostComment
}