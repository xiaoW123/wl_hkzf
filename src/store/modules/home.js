import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getHomeSwiperData } from '@/service/modules'

// 异步处理
export const fetchHomeDataAction = createAsyncThunk('home', (arg, { dispatch }) => {
  // 获取home的轮播图片
  getHomeSwiperData().then(res => {
    dispatch(changeHomeSwiperAction(res.body))
    console.log(res)
  })
})

const initialState = {
  homeSwiper: 123
}

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    changeHomeSwiperAction(state, { payload }) {
      state.homeSwiper = payload
    }
  }
})
export const { changeHomeSwiperAction } = homeSlice.actions
export default homeSlice.reducer
