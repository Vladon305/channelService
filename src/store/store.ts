import { configureStore } from '@reduxjs/toolkit'
import { postsReducer } from './posts/postsSlice'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
})

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
