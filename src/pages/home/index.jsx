import PropTypes from 'prop-types'
import React, { memo, Suspense, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { HomeWrapper } from './style'
import { fetchHomeDataAction } from '@/store/modules/home'

import PackTabBar from '@/component/tabbar'
// >>>>>>> homepage
const Home = memo((props) => {
  const { homeSwiper } = useSelector((state) => {
    return {
      homeSwiper: state.home.homeSwiper
    }
  }, shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [])

  return (
    <HomeWrapper>
      <Suspense fallback={<h5>loading....</h5>}>
        {/* 子路由占位符 */}
        <Outlet />
      </Suspense>
      <PackTabBar />
    </HomeWrapper>
  )
})

Home.propTypes = {}

export default Home
