import { useRoutes } from 'react-router-dom'
import routes from './router'
import React, { memo, Suspense, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  fetchHomeDataAction,
  fetchHousesDataAction,
  fetchHouseItemDataAction
} from '@/store/modules/home'
import { fetchAreaDataAction } from '@/store/modules/area'
import { DotLoading } from 'antd-mobile'

function App() {
  const dispatch = useDispatch()
  // 请求home主页需要的数据
  useEffect(() => {
    dispatch(fetchHomeDataAction())
    dispatch(fetchAreaDataAction())
    dispatch(fetchHousesDataAction())
    dispatch(fetchHouseItemDataAction())
    const houseItem = JSON.parse(window.localStorage.getItem('houseItem'))
  })

  return (
    <div className="App">
      <Suspense fallback={<DotLoading />}>
        <div>{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}
export default App
