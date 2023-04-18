import React, { memo, Suspense, useEffect } from 'react'
import { Button, TabBar } from 'antd-mobile'
import { Route, Link, Routes, Navigate, useRoutes } from 'react-router-dom'
import Citylist from './pages/citylist'
import routes from './router'
import { getHomeSwiperData } from '@/service/modules/index'

function App() {
  useEffect(() => {
    getHomeSwiperData().then((res) => {
      console.log(res)
    })
  })
  return (
    <div className="App">
      <Suspense fallback="">
        <div>{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
