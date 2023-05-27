import { configureStore } from '@reduxjs/toolkit'
import  reducerSlices  from './slices/reducerSlices/reducerSlices' 
import reducerServices from './slices/reducerSlices/reducerServices'

export const store = configureStore({
  reducer: {
    services: reducerSlices,
    oldServices: reducerServices
  },
})