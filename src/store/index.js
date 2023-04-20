import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './modules/home'
import areaReducer from './modules/area'
const store = configureStore({
  reducer: {
    home: homeReducer,
    area: areaReducer
  }
})
export default store
