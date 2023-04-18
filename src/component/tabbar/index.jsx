import React, { memo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { TabBar } from 'antd-mobile'
import { TabBarWrapper } from './style'

import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline
} from 'antd-mobile-icons'

const PackTabBar = memo((props) => {
  const navigate = useNavigate()
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
      <TabBar onChange={(value) => setRouteActive(value)}>
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
