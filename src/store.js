import { configureStore } from '@reduxjs/toolkit'
import prity from './Slices/shanto'

export default configureStore({
  reducer: {
    shanto: prity,
  },
})
