import HeadBar from '@/component/head-bar'
import Search from '@/component/search'
import PropTypes from 'prop-types'

import React, { memo, useState } from 'react'
import {
  Dropdown,
  CascadePickerView,
  Popup,
  PickerView,
  Button,
  Toast
} from 'antd-mobile'
import { FindPageWrapper } from './style'
import { useRef } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import Screening from './c-cpns/screening'
import HouseItem from '@/component/house-item'
import { List } from 'react-virtualized'

const FindPage = memo((props) => {
  // 数据与状态
  const ref = useRef()
  const [isValue, setIsValue] = useState(true)
  const [visible4, setVisible4] = useState(false)
  const [screening, setScreening] = useState([
    '户型',
    '朝向',
    '楼层',
    '房屋亮点'
  ])
  const { newAreaAndSubway, newRentType, newPrice, newScreening } = useSelector(
    (state) => {
      return {
        houseCondition: state.home.houseCondition,
        newAreaAndSubway: state.home.newAreaAndSubway,
        newRentType: state.home.newRentType,
        newPrice: state.home.newPrice,
        newScreening: state.home.newScreening
      }
    },
    shallowEqual
  )
  const houseItem = JSON.parse(window.localStorage.getItem('houseItem'))
  Toast.show(`共找到 ${houseItem.count} 套房源`)
  // 事件处理
  // 筛选
  function openVisible4(activeKey) {
    if (activeKey === '4') {
      setVisible4(true)
      console.log(visible4)
      ref.current?.close()
    }
  }
  // 取消筛选
  function closeClick() {
    setVisible4(false)
    setIsValue(false)
  }
  // 获取筛选中选中的条件
  let i = 0
  const newArr = []
  function getScreeningClcik(arr, extend) {
    if (!extend.items[i]) i = 0
    newArr.push(extend.items[i].value)
    console.log(newArr)
    i++
  }

  // react-virtualize 插件
  function rowRenderer({
    key, // Unique key within array of rows
    index, // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
    style
  }) {
    return (
      <div>
        {houseItem.list.map((item, index) => {
          return (
            <HouseItem
              key={index}
              style={style}
              imgUrl={item.houseImg}
              title={item.title}
              desc={item.desc}
              tags={item.tags}
              price={item.price}
              houseCode={item.houseCode}
            />
          )
        })}
      </div>
    )
  }

  return (
    <FindPageWrapper>
      <HeadBar
        bgc="#F6F5F6"
        naviTo="/home"
        component={
          <Search
            searchWidth="270px"
            searchTop="5px"
            dtTop="10px"
            searchLeft="48%"
            dtColor="#00ae66"
          />
        }
      />
      {/* 下拉选择器 */}
      <div className="dropdown_xzq">
        <Dropdown ref={ref} onChange={(activeKey) => openVisible4(activeKey)}>
          <Dropdown.Item key="1" title="区域">
            <CascadePickerView options={newAreaAndSubway} />
          </Dropdown.Item>
          <Dropdown.Item key="2" title="方式">
            <PickerView columns={newRentType} />
          </Dropdown.Item>
          <Dropdown.Item key="3" title="租金">
            <PickerView columns={newPrice} />
          </Dropdown.Item>
          <Dropdown.Item key="4" title="筛选"></Dropdown.Item>
        </Dropdown>
      </div>
      {/* 筛选弹出层 */}
      <Popup
        className="popup"
        visible={visible4}
        onMaskClick={() => {
          setVisible4(false)
        }}
        position="right"
        bodyStyle={{
          width: '85vw',
          padding: '0 10px 0 10px',
          overflowY: 'scroll'
        }}
      >
        {newScreening?.map((item, index) => {
          return (
            <Screening
              key={index}
              title={screening[index]}
              options={item}
              getScreeningClcik={(arr, extend) =>
                getScreeningClcik(arr, extend)
              }
              value={isValue}
            />
          )
        })}

        {/* #21b97a */}
        <Button
          onClick={closeClick}
          style={{
            width: '30%',
            border: 'none',
            color: '#21b97a',
            borderRadius: '0',
            borderLeft: '1px solid #e5e5e5',
            borderBottom: '1px solid #e5e5e5'
          }}
        >
          取消
        </Button>
        <Button
          // onClick={} 点击确定发起重新渲染请求
          style={{
            width: '70%',
            border: 'none',
            color: '#fff',
            backgroundColor: '#21b97a',
            borderRadius: '0',
            borderRight: '1px solid #e5e5e5',
            borderBottom: '1px solid #e5e5e5'
          }}
        >
          确定
        </Button>
      </Popup>
      {/* 主体 */}
      <List
        width={375}
        height={667}
        rowCount={houseItem.count}
        rowHeight={130}
        rowRenderer={rowRenderer}
      />
    </FindPageWrapper>
  )
})

FindPage.propTypes = {}

export default FindPage
