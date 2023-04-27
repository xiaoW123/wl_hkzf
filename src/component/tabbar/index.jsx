import React, { memo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { TabBar } from 'antd-mobile'
import {
  AppOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline
} from 'antd-mobile-icons'
import { TabBarWrapper } from './style'
const PackTabBar = memo((props) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const tabs = [
    {
      key: '/home/homepage',
      title: '首页',
      icon: <AppOutline />
    },
    {
      key: '/home/findpage',
      title: '找房',
      icon: <UnorderedListOutline />
    },
    {
      key: '/home/informationpage',
      title: '资讯',
      icon: <MessageFill />
    },
    {
      key: '/home/minepage',
      title: '我的',
      icon: <UserOutline />
    }
  ]

  function setRouteActive(value) {
    navigate(value)
  }
  return (
    <TabBarWrapper>
      <TabBar
        activeKey={pathname}
        safeArea={true}
        onChange={(value) => setRouteActive(value)}
      >
        {tabs.map((item, index) => {
          return (
            <TabBar.Item
              key={item.key}
              icon={item.icon}
              title={item.title}
              to={item.key}
            />
          )
        })}
      </TabBar>
    </TabBarWrapper>
  )
})

export default PackTabBar
