import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { getHomeGroupsData, getHomeNewsData, getHomeSwiperData, getHouseConditionData, getHouseData } from '@/service/modules'

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
export const fetchHousesDataAction = createAsyncThunk('house', (arg, { dispatch }) => {
  // 获取房屋查询条件
  getHouseConditionData(arg).then(res => {
    const { area, subway, rentType, price, roomType, oriented, floor, characteristic } = res.body
    const newAreaAndSubway = []
    const newRentType = []
    const newPrice = []
    const newScreening = []

    newAreaAndSubway.push(area)
    newAreaAndSubway.push(subway)
    newRentType.push(rentType)
    newPrice.push(price)

    newScreening.push(roomType)
    newScreening.push(oriented)
    newScreening.push(floor)
    newScreening.push(characteristic)
    dispatch(changeHouseContitionAction(res.body))
    dispatch(changeNewAreaAndSubwayAction(newAreaAndSubway))
    dispatch(changeNewRentTypeAction(newRentType))
    dispatch(changeNewPriceAction(newPrice))
    dispatch(changeNewScreeningAction(newScreening))
  })
})

export const fetchHouseItemDataAction = createAsyncThunk('houseItem', (arg, { dispatch }) => {
  const params = {
    cityId: 'AREA|88cff55c-aaa4-e2e0',
    // area: 'AREA|88cff55c-aaa4-e2e0',
    // subway: 'area',
    // rentType: true,
    // price: null,
    // // 复合查询条件
    // // more: 'CHAR|76eb0532-8099-d1f4,FLOOR|1,AREA|88cff55c-aaa4-e2e0,ORIEN|61e99445-e95e-7f37,true',
    // // roomType: 'ROOM|d1a00384-5801-d5cd',
    // // oriented: 'ORIEN|61e99445-e95e-7f37',
    // // characteristic: 'CHAR|76eb0532-8099-d1f4',
    // floor: 'FLOOR|1',
    start: 1,
    end: 20
  }

  getHouseData(params).then(res => {
    const newRes = JSON.stringify(res.body)
    window.localStorage.setItem('houseItem', newRes)
  })
})

const initialState = {
  homeSwiper: [],
  homeGroups: [],
  homeNews: [],
  houseCondition: {},
  newAreaAndSubway: [],
  newRentType: [],
  newPrice: [],
  newScreening: [],
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
    },
    changeHouseContitionAction(state, { payload }) {
      state.houseCondition = payload
    },
    changeNewAreaAndSubwayAction(state, { payload }) {
      state.newAreaAndSubway = payload
    },
    changeNewRentTypeAction(state, { payload }) {
      state.newRentType = payload
    },
    changeNewPriceAction(state, { payload }) {
      state.newPrice = payload
    },
    changeNewScreeningAction(state, { payload }) {
      state.newScreening = payload
    },
  }
})
export const { changeNewScreeningAction, changeNewPriceAction, changeNewRentTypeAction, changeHomeSwiperAction, changeHomeGroupsAction, changeHomeNewsAction, changeHouseContitionAction, changeNewAreaAndSubwayAction } = homeSlice.actions
export default homeSlice.reducer
