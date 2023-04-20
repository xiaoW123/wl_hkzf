import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAreaCityData, getAreaHotData } from '@/service/modules'
export const fetchAreaDataAction = createAsyncThunk('area', (arg, { dispatch }) => {
  // 获取城市列表
  getAreaCityData().then(res => {
    dispatch(changeAreaCityAction(res.body))
  })
  // 获取热门参数
  getAreaHotData().then(res => {
    dispatch(changeAreaHotAction(res.body))
  })
})

const initialState = {
  areaCity: [],
  areaHot: [],
  // 当前定位
  currentPositioning: [{
    label: '北京',
    value: 'AREA|88cff55c-aaa4-e2e0',
    pinyin: 'beijing',
    short: 'bj'
  }]
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
      state.currentPositioning = payload
    }
  }
})
export const { changeAreaCityAction, changeAreaHotAction, changeCurrentPositioningAction } = areaSlice.actions
export default areaSlice.reducer
