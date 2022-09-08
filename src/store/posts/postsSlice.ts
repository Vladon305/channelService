import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPost } from '../../types/types'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../../api/api'

const initialState = {
  posts: null as unknown as IPost[],
}

export const getPosts = createAsyncThunk('posts/getPosts', async (_, { rejectWithValue }) => {
  try {
    return await api.getAllPosts()
  } catch (e) {
    return rejectWithValue('request problem')
  }
})

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.fulfilled.type]: (state, action: PayloadAction<IPost[]>) => {
      state.posts = action.payload
    },
  },
})

export const postsReducer = postsSlice.reducer
export const postsActions = postsSlice.actions
