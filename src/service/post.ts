import { AxiosResponse } from "axios";
import { CreatePostPayload, CreatePostResponse, Post } from "../interface";
import { axiosPrivateInstance } from ".";

const createPost = async (
  payload: CreatePostPayload,
): Promise<AxiosResponse<CreatePostResponse>> => {
  try {
    const res: AxiosResponse<CreatePostResponse> = await axiosPrivateInstance.post('/post', payload);
    return res;
  } catch (error) {
    throw new Error(error as string);
  }
};

const getAllPosts = async (): Promise<AxiosResponse<Post[]>> => {
  try {
    const res: AxiosResponse<Post[]> = await axiosPrivateInstance.get('/post');
    return res;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const postService = {
  createPost,
  getAllPosts
}