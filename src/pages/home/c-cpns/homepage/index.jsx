import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { Swiper } from 'antd-mobile'
import { DownFill, SearchOutline } from 'antd-mobile-icons'

// 自己的东西
import { HomePageWrapper } from './style'
import { imgUrlpj } from '@/utils'
import '@/assets/font/iconfont.css'
import { imgNavUrl } from '@/assets/data/index'
import { useNavigate } from 'react-router-dom'
import { Modal, DotLoading } from 'antd-mobile'
import Search from '@/component/search'

const HomePage = memo((props) => {
  // 数据和状态
  const { homeSwiper, homeGroups, homeNews } = useSelector((state) => {
    return {
      homeSwiper: state.home.homeSwiper,
      homeGroups: state.home.homeGroups,
      homeNews: state.home.homeNews
    }
  }, shallowEqual)

  // 事件处理
  const navigate = useNavigate()
  function naviToFindPage(index) {
    switch (index) {
      case 0:
        return navigate('/home/findpage')
      case 1:
        return navigate('/home/findpage')
      case 2:
        return navigate('/map')
      case 3:
        return navigate('/login')
    }
    console.log(index)
  }
  return (
    <HomePageWrapper>
      {/* 头部搜索 */}
      <Search
        searchTop="20px"
        dtTop="25px"
        searchLeft="45%"
        searchWidth="300px"
        dtColor="#fff"
      />
      {/* 头部轮播 */}
      <div className="header_swiper">
        <Swiper
          autoplay
          indicatorProps={{
            color: 'white'
          }}
        >
          {homeSwiper &&
            homeSwiper?.map((item, index) => {
              return (
                <Swiper.Item key={item.id}>
                  <img className="swiper_item" src={imgUrlpj(item.imgSrc)} />
                </Swiper.Item>
              )
            })}
        </Swiper>
      </div>
      {/* 主体-整租-合租-地图找房-去出租 */}
      <div className="main_zhdq">
        {imgNavUrl &&
          imgNavUrl.map((item, index) => {
            return (
              <div
                onClick={() => naviToFindPage(index)}
                key={index}
                className="zhdq_item"
              >
                <img src={item.url} />
                <p>{item.title}</p>
              </div>
            )
          })}
      </div>
      {/* 租房小组 */}
      <div className="main_house">
        <div className="house_title">
          <h5>租房小组</h5>
          <span>更多</span>
        </div>
        <div className="house_item">
          {homeGroups &&
            homeGroups.map((item) => {
              return (
                <div className="item" key={item.id}>
                  <div>
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                  <div>
                    <img src={imgUrlpj(item.imgSrc)} />
                  </div>
                </div>
              )
            })}
        </div>
      </div>
      {/* 最新资讯 */}
      <div className="main_news">
        <h5 className="news_top">最新资讯</h5>
        {homeNews &&
          homeNews.map((item) => {
            return (
              <div key={item.id} className="new_item">
                <div className="item_img">
                  <img src={imgUrlpj(item.imgSrc)} alt="" />
                </div>
                <div className="item_text">
                  <h5>{item.title}</h5>
                  <span>
                    <div>{item.from}</div>
                    <div>{item.date}</div>
                  </span>
                </div>
              </div>
            )
          })}
      </div>
    </HomePageWrapper>
  )
})

HomePage.propTypes = {}

export default HomePage
