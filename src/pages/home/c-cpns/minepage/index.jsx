import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { MinePageWrapper } from './style'
import newavatar from '@/assets/img/newavatar.png'
import { Button, Toast } from 'antd-mobile'
import '@/assets/font/iconfont.css'
import { useNavigate } from 'react-router-dom'
import { imgUrlpj } from '@/utils'
const MinePage = memo((props) => {
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState(
    JSON.parse(window.localStorage.getItem('userInfo'))
  )
  console.log(userInfo)
  const info = [
    {
      id: 1,
      icon: 'iconfont icon-favorite',
      title: '我的收藏'
    },
    {
      id: 2,
      icon: 'iconfont icon-home',
      title: '我的出租'
    },
    {
      id: 3,
      icon: 'iconfont icon-chart-pie',
      title: '看房记录'
    },
    {
      id: 4,
      icon: 'iconfont icon-image-text',
      title: '成为房主'
    },
    {
      id: 5,
      icon: 'iconfont icon-user',
      title: '个人资料'
    },
    {
      id: 6,
      icon: 'iconfont icon-customer-service',
      title: '联系我们'
    }
  ]
  function quitClick() {
    window.localStorage.removeItem('userInfo')
    setUserInfo(null)
    Toast.show({
      icon: 'success',
      content: '退出成功'
    })
    // window.localStorage.removeItem('token')
  }
  return (
    <MinePageWrapper>
      {/* 背景图 */}
      <div className="bg_img"></div>
      {/* 头像区 */}
      <div className="head_sculpture">
        <div className="toux">
          <img src={userInfo ? imgUrlpj(userInfo.avatar) : newavatar} alt="" />
        </div>
        <div className="name">{userInfo ? userInfo.nickname : '游客'}</div>
        <div className="button">
          {userInfo ? (
            <Button size="small" color="success" onClick={quitClick}>
              退出
            </Button>
          ) : (
            <Button
              size="small"
              color="success"
              onClick={() => navigate('/login')}
            >
              去登录
            </Button>
          )}
        </div>
      </div>
      {/* 个人内容区 */}
      <div className="mine_info">
        {info.map((item) => {
          return (
            <div key={item.id}>
              <div className={item.icon}></div>
              <div>{item.title}</div>
            </div>
          )
        })}
      </div>
      {/* 加入我们 */}
      <div className="jrwm"></div>
    </MinePageWrapper>
  )
})

MinePage.propTypes = {}

export default MinePage
