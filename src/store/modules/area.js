import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getHomeNewsData,
  getAreaData,
  getAreaMapData,
  getAreaCityData,
  getAreaHotData,
  getAreaInfoData,
  getAreaCommunityData
} from '@/service/modules'
export const fetchAreaDataAction = createAsyncThunk(
  'area',
  (arg, { dispatch }) => {
    // 获取城市列表
    getAreaCityData().then((res) => {
      dispatch(changeAreaCityAction(res.body))
    })
    // 获取热门参数
    getAreaHotData().then((res) => {
      dispatch(changeAreaHotAction(res.body))
    })

    // 小区关键词查询
    getAreaCommunityData().then((res) => {
      // console.log('小区关键词查询-----', res)
    })
    // 查询房源数据
    getAreaMapData().then((res) => {
      // console.log('查询房源数据----', res)
    })
    // 取子级城市列表
    getAreaData().then((res) => {
      // console.log('获取子级城市列表----', res)
    })

    // 根据id获取租房资讯
  }
)
export const fetchCurentPositionAction = createAsyncThunk('position', (arg, { dispatch }) => {
  // 根据城市名称查询该城市信息
  getAreaInfoData(arg).then((res) => {
    console.log('根据城市名称查询该城市信息-----', res)
    console.log(res.body);
    dispatch(changeCurrentPositioningAction(res.body))
  })
})

const initialState = {
  areaCity: [],
  areaHot: [],
  // 当前定位
  currentPositioning: [
    {
      label: '北京',
      value: 'AREA|88cff55c-aaa4-e2e0',
      pinyin: 'beijing',
      short: 'bj'
    }
  ]
}

export const areaSlice = createSlice({
  name: 'area',
  initialState,
  reducers: {
    changeAreaCityAction(state, { payload }) {
      state.areaCity = payload
    },
    changeAreaHotAction(state, { payload }) {
      state.areaHot = payload
    },
    changeCurrentPositioningAction(state, { payload }) {
      console.log(payload);
      state.currentPositioning = payload
    },
  }
})
export const {
  changeAreaCityAction,
  changeAreaHotAction,
  changeCurrentPositioningAction
} = areaSlice.actions
export default areaSlice.reducer
