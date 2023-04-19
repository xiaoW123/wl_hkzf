import PackTabBar from '@/component/tabbar'
import PropTypes from 'prop-types'
import React, { memo, Suspense, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { HomeWrapper } from './style'
import { fetchHomeDataAction } from '@/store/modules/home'

const Home = memo((props) => {
  const { homeSwiper } = useSelector((state) => {
    return {
      homeSwiper: state.home.homeSwiper
    }
  }, shallowEqual)
  console.log(homeSwiper)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [])

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
