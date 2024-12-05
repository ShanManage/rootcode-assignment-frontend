import { APP_STATUS } from "./app"

export interface CreatePostFormFields {
  title: string
  description: string
  color: string
}

export interface CreatePostPayload {
  title: string
  description: string
  titleColor: TitleColor
}

export enum TitleColor {
  BLUE = 'BLUE',
  YELLOW = 'YELLOW',
  RED = 'RED',
}

export interface CreatePostResponse {
  message: string
}

export interface PostState {
  isLoading: boolean
  status: APP_STATUS
  message: string
  allPosts: Post[]
}

export interface Post {
  id: number
  title: string
  description: string
  titleColor: TitleColor
}