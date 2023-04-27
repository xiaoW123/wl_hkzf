import React, { memo } from 'react'
import { HouseItemWrapper } from './style'
import { Tag } from 'antd-mobile'
import { imgUrlpj } from '@/utils'
import { useNavigate } from 'react-router-dom'

const HouseItem = memo((props) => {
  // 数据与状态
  const { imgUrl, title, desc, tags, price, houseCode } = props
  // 事件处理
  const navigate = useNavigate()
  async function changeClick(id) {
    if (id) {
      navigate(`/detail/${id}`)
    }
    // 动态参数传递
  }
  return (
    <HouseItemWrapper>
      <div className="item_box" onClick={() => changeClick(houseCode)}>
        <div className="item_img">
          <img src={imgUrlpj(imgUrl)} alt="" />
        </div>
        <div className="item_title">
          <h5 className="title_h5">{title}</h5>
          <p>{desc}</p>
          {tags?.map((item, index) => {
            return (
              <Tag key={index} color="#2db7f5" style={{ marginLeft: '5px' }}>
                {item}
              </Tag>
            )
          })}

          <h5 className="title_red_h5">{price}&nbsp;元/月</h5>
        </div>
      </div>
    </HouseItemWrapper>
  )
})

export default HouseItem
