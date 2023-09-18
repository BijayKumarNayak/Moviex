import { configureStore } from '@reduxjs/toolkit'
import homeSlice from './homeSlice'
import trendingSlice from './trendingSlice'

export const store = configureStore({
  reducer: {
    home:homeSlice,
    trending:trendingSlice

  },
})