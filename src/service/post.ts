import { AxiosResponse } from "axios";
import { CreatePostPayload, CreatePostResponse } from "../interface";
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

export const postService = {
  createPost
}