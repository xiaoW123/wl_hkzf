import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { MinePageWrapper } from './style'
import newavatar from '@/assets/img/newavatar.png'
import { Button, Space } from 'antd-mobile'
import { StarOutline,  } from 'antd-mobile-icons'
const MinePage = memo((props) => {
  const info = [
    {
      id: 1,
      icon: '',
      title: '我的收藏'
    },
    {
      id: 2,
      icon: '',
      title: '我的出租'
    },
    {
      id: 3,
      icon: '',
      title: '看房记录'
    },
    {
      id: 4,
      icon: '',
      title: '成为房主'
    },
    {
      id: 5,
      icon: '',
      title: '个人资料'
    },
    {
      id: 6,
      icon: '',
      title: '联系我们'
    }
  ]
  return (
    <MinePageWrapper>
      {/* 背景图 */}
      <div className="bg_img"></div>
      {/* 头像区 */}
      <div className="head_sculpture">
        <div className="toux">
          <img src={newavatar} alt="" />
        </div>
        <div className="name">游客</div>
        <div className="button">
          <Button size="small" color="success">
            去登录
          </Button>
        </div>
      </div>
      {/* 个人内容区 */}
      <div className="mine_info"></div>
      {/* 加入我们 */}
      <div className="jrwm"></div>
    </MinePageWrapper>
  )
})

MinePage.propTypes = {}

export default MinePage
