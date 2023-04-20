import { useRoutes } from 'react-router-dom'
import routes from './router'
import React, { memo, Suspense, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home'

function App() {
  const dispatch = useDispatch()
  // 请求home主页需要的数据
  useEffect(() => {
    dispatch(fetchHomeDataAction())
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
