import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { getHomeGroupsData, getHomeNewsData, getHomeSwiperData } from '@/service/modules'

// 异步处理
export const fetchHomeDataAction = createAsyncThunk('home', (arg, { dispatch }) => {
  // 获取home的轮播图片
  getHomeSwiperData().then(res => {
    dispatch(changeHomeSwiperAction(res.body))
  })
  // 获取租房小组数据
  getHomeGroupsData().then(res => {
    dispatch(changeHomeGroupsAction(res.body))
  })
  // 获取最新资讯数据
  getHomeNewsData().then(res => {
    dispatch(changeHomeNewsAction(res.body))
  })
})

const initialState = {
  homeSwiper: [],
  homeGroups: [],
  homeNews: []
}

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    changeHomeSwiperAction(state, { payload }) {
      state.homeSwiper = payload
    },
    changeHomeGroupsAction(state, { payload }) {
      state.homeGroups = payload
    },
    changeHomeNewsAction(state, { payload }) {
      state.homeNews = payload
    }
  }
})
export const { changeHomeSwiperAction, changeHomeGroupsAction, changeHomeNewsAction } = homeSlice.actions
export default homeSlice.reducer
