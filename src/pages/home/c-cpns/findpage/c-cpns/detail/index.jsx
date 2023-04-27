import React, { memo, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DetailWrapper } from './style'
import { getHouseCodeData } from '@/service/modules'
import HeadBar from '@/component/head-bar'
import { SendOutline, CheckShieldOutline } from 'antd-mobile-icons'
import { Toast, Swiper, Tag, Dialog, Popover } from 'antd-mobile'
import { imgUrlpj } from '@/utils'
import avatar from '@/assets/img/avatar.png'
import { Map, CustomOverlay, Marker } from 'react-bmapgl'
import Zzc from '@/component/zzc'
import HouseItem from '@/component/house-item'

const Detail = memo((props) => {
  // 数据与状态
  const navigate = useNavigate()
  let params = useParams()
  const [houseInfo, setHouseInfo] = useState({})
  const coord = {
    lng: houseInfo?.coord?.longitude,
    lat: houseInfo?.coord?.latitude
  }
  const houseItem = JSON.parse(
    window.localStorage.getItem('houseItem')
  ).list.slice(0, 3)
  console.log(houseItem)

  // 事件处理
  Toast.show({
    icon: 'loading',
    content: '加载中…'
  })
  useEffect(() => {
    getHouseCodeData(params.id).then((res) => {
      console.log(res.body)
      setHouseInfo(res.body)
      Toast.clear()
    })
  }, [])

  function closeClick() {
    console.log('close')
  }
  function loginClick() {
    navigate('/login')
    console.log('login')
  }
  async function scClick() {
    const result = await Dialog.show({
      title: '提示',
      content: '登录后才能收藏房源，是否去登录？',
      closeOnAction: true,
      actions: [
        [
          {
            key: 'close',
            text: '取消',
            onClick: closeClick
          },
          {
            key: 'login',
            text: '去登陆',
            onClick: loginClick
          }
        ]
      ]
    })
    console.log(result)
  }
  return (
    <DetailWrapper>
      {houseInfo && (
        <>
          {/* 头部 */}
          <HeadBar title={houseInfo.community} component={<SendOutline />} />
          {/* 轮播 */}
          <div className="swiper">
            <Swiper
              autoplay
              indicatorProps={{
                color: 'white'
              }}
            >
              {houseInfo?.houseImg?.map((item, index) => {
                return (
                  <Swiper.Item key={index}>
                    <img src={imgUrlpj(item)} alt="" className="swiper_img" />
                  </Swiper.Item>
                )
              })}
            </Swiper>
          </div>
          {/* 信息价格 */}
          <div className="info">
            <h3>{houseInfo.title}</h3>
            <div>
              <Tag color="#e1f5f8" style={{ color: '#39becd' }}>
                {houseInfo?.tags?.[0]}
              </Tag>
            </div>
            <div className="price">
              <div>
                {houseInfo.price}
                <span>/月</span>
              </div>
              <div>{houseInfo.roomType}</div>
              <div>{houseInfo.size}平米</div>
              <div>租金</div>
              <div>户型</div>
              <div>面积</div>
            </div>
            <div className="wz_info">
              <div>
                装修：<span>精装</span>
              </div>
              <div>
                朝向：<span>{houseInfo?.oriented?.[0]}</span>
              </div>
              <div>
                楼层：<span>{houseInfo.floor}</span>
              </div>
              <div>
                类型：<span>普通住宅</span>
              </div>
            </div>
          </div>
          {/* 位置信息 */}
          <div className="dt_info">
            <div>小区：{houseInfo.community}</div>
            <div className="dt">
              <Map style={{ height: '144px' }} center={coord} zoom="16">
                {/* 遮盖物 */}
                <Marker position={coord} />
                <CustomOverlay position={coord}>
                  <Zzc />
                </CustomOverlay>
              </Map>
            </div>
          </div>
          {/* 房屋配套 */}
          <div className="fwpt">
            <div>房屋配套</div>
            {houseInfo.supporting?.length !== 0 ? (
              <div>
                {houseInfo.supporting?.map((item, index) => {
                  return <div>{item}</div>
                })}
              </div>
            ) : (
              <div>暂无数据</div>
            )}
          </div>
          {/* 房源概况 */}
          <div className="fwgk">
            <div>房源概况</div>
            <div>
              <div className="toux">
                <img src={avatar} alt="" />
              </div>
              <div className="name">
                <div style={{ fontSize: '14px' }}>王小姐</div>
                <div
                  style={{
                    color: '#fa5741',
                    marginTop: '8px',
                    fontSize: '12px'
                  }}
                >
                  <CheckShieldOutline /> &nbsp;已认证房主
                </div>
              </div>
              <div className="button">
                <Tag
                  style={{ fontSize: '14px' }}
                  color="#33be85"
                  fill="outline"
                >
                  发消息
                </Tag>
              </div>
            </div>
            {houseInfo?.description ? (
              <div>{houseInfo.description}</div>
            ) : (
              <div>暂无房屋描述</div>
            )}
          </div>
          {/* 猜你喜欢 */}
          <div className="cnxh">
            <div>猜你喜欢</div>
            <div>
              {houseItem?.map((item, index) => {
                return (
                  // <HouseItem></HouseItem>
                  <HouseItem
                    key={index}
                    imgUrl={item.houseImg}
                    title={item.title}
                    desc={item.desc}
                    tags={item.tags}
                    price={item.price}
                  />
                )
              })}
            </div>
          </div>
          {/* 底部功能按钮 */}
          <div className="gnan">
            <div onClick={() => scClick()}>收藏</div>
            <div>在线资讯</div>
            <div>电话预约</div>
          </div>
        </>
      )}
    </DetailWrapper>
  )
})

export default Detail
