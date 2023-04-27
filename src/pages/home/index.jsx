import PropTypes from 'prop-types'
import React, { memo, Suspense, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { HomeWrapper } from './style'

import { DotLoading } from 'antd-mobile'
import PackTabBar from '@/component/tabbar'

// >>>>>>> homepage
const Home = memo((props) => {
  return (
    <HomeWrapper>
      <Suspense fallback={<DotLoading />}>
        {/* 子路由占位符 */}
        <Outlet />
      </Suspense>
      <PackTabBar />
    </HomeWrapper>
  )
})

Home.propTypes = {}

export default Home
