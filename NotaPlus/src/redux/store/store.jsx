import { configureStore } from '@reduxjs/toolkit' 
import studentSlice from './studentSlice'

export const store = configureStore({
  reducer: {
    student: studentSlice
  },
  devTools : true
})