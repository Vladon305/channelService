import axios from 'axios'
import { IPhoto, IPost, IUser } from '../types/types'

export const instance = axios.create({
  withCredentials: true,
  baseURL: `https://jsonplaceholder.typicode.com/`,
})

export const api = {
  getUsers: async () => {
    const response = await instance.get<IUser[]>(`users/`)
    return response.data
  },

  getUser: async (userId: number) => {
    const response = await instance.get<IUser>(`users/${userId}`)
    return response.data
  },

  getAllPosts: async () => {
    const response = await instance.get<IPost[]>(`posts/`)
    return response.data
  },

  getPhotos: async () => {
    const response = await instance.get<IPhoto[]>(`photos/`)
    return response.data
  },

  getPhoto: async (id: number) => {
    const response = await instance.get<IPhoto>(`photos/${id}`)
    return response.data
  },
}
