import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home'

import { Swiper } from 'antd-mobile'
import { DownFill, SearchOutline } from 'antd-mobile-icons'

// 自己的东西
import { HomePageWrapper } from './style'
import { imgUrlpj } from '@/utils'
import '@/assets/font/iconfont.css'
import { imgNavUrl } from '@/assets/data/index'
import { useNavigate } from 'react-router-dom'

const HomePage = memo((props) => {
  // 数据和状态
  const { homeSwiper, homeGroups, homeNews, currentPositioning } = useSelector(
    (state) => {
      return {
        homeSwiper: state.home.homeSwiper,
        homeGroups: state.home.homeGroups,
        homeNews: state.home.homeNews,
        currentPositioning: state.area.currentPositioning
      }
    },
    shallowEqual
  )

  // 事件处理
  const navigate = useNavigate()
  function changeCityList() {
    navigate('/citylist')
  }
  return (
    <HomePageWrapper>
      {/* 头部搜索 */}
      <div className="header_search">
        <div className="dd_list" onClick={changeCityList}>
          <p>{currentPositioning?.[0]?.label}&nbsp;</p>
          <DownFill color="#7f7f80" fontSize={10} />
        </div>
        <div className="search">
          <SearchOutline fontSize={14} color="#9c9fa1" />
          &nbsp;
          <p>请输入小区或地址</p>
        </div>
      </div>
      {/* 头部体地图 */}
      <div className="header_dt">
        <span className="iconfont icon-weizhi"></span>
      </div>
      {/* 头部轮播 */}
      <div className="header_swiper">
        <Swiper>
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
              <div key={index} className="zhdq_item">
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
        {/* <div className="new_item">
          <div className="item_img"></div>
          <div className="item_text">
            <h5>阿三大苏打实打实啊实打实的</h5>
            <p>
              <div>阿松大</div>
              <div>阿松大</div>
            </p>
          </div>
        </div> */}
      </div>
    </HomePageWrapper>
  )
})

HomePage.propTypes = {}

export default HomePage
