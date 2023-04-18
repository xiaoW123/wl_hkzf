import PackTabBar from '@/component/tabbar'
import PropTypes from 'prop-types'
import React, { memo, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { HomeWrapper } from './style'
// import styles from './demo2.less'
const Home = memo((props) => {
  return (
    <HomeWrapper>
      <Suspense fallback="">
        {/* 子路由占位符 */}
        <Outlet />
      </Suspense>
      <div className="home">
        <PackTabBar />
      </div>
    </HomeWrapper>
  )
})

Home.propTypes = {}

export default Home
