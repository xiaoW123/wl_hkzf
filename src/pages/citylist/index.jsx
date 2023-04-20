import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CityListWrapper } from './style'
import { fetchAreaDataAction } from '@/store/modules/area'
import { IndexBar, List } from 'antd-mobile'
import { changeCurrentPositioningAction } from '@/store/modules/area'
import { useNavigate } from 'react-router-dom'

const ClityList = memo((props) => {
  // 1.数据与状态
  const { areaCity, areaHot, currentPositioning } = useSelector((state) => {
    return {
      // 城市列表数据
      areaCity: state.area.areaCity,
      // 热门城市
      areaHot: state.area.areaHot,
      // 当前定位
      currentPositioning: state.area.currentPositioning
    }
  })

  // 2.事件处理
  // 2.1.处理城市list数据
  const ctiyList = []
  ctiyList.push(
    { title: '当前定位', items: currentPositioning },
    { title: '热门城市', items: areaHot }
  )
  for (let i = 0; i < 26; i++) {
    // 保存a的ascll
    let charCodeOfA = 'A'.charCodeAt(0) + 32 + i
    // 保存A的ascll
    let fromCharCodeA = String.fromCharCode(charCodeOfA - 32)
    // 保存item.short的第一个字符为 对应的ascll的值
    let styleArr = areaCity?.filter((item) => {
      return item.short.charCodeAt(0) === charCodeOfA
    })
    // 最后push到数组中
    if (styleArr.length == 0) continue
    ctiyList.push({ title: fromCharCodeA, items: styleArr })
  }
  // 2.2.useEffect
  const indexBarRef = useRef(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(fetchAreaDataAction())
  }, [])

  // 点击切换当前定位
  function changeCurrentPositioning(value) {
    const newCurrentPositon = []
    newCurrentPositon[0] = value
    dispatch(changeCurrentPositioningAction(newCurrentPositon))
    navigate('/home')
  }
  return (
    <CityListWrapper>
      <div style={{ height: window.innerHeight }}>
        <IndexBar ref={indexBarRef}>
          {ctiyList?.map((item, index) => {
            return (
              <IndexBar.Panel
                index={item.title}
                title={item.title}
                key={item.title}
              >
                <List>
                  {item.items?.map((value, index) => {
                    return (
                      <List.Item
                        onClick={() => changeCurrentPositioning(value)}
                        key={index}
                      >
                        {value.label}
                      </List.Item>
                    )
                  })}
                </List>
              </IndexBar.Panel>
            )
          })}
        </IndexBar>
      </div>
    </CityListWrapper>
  )
})

ClityList.propTypes = {}

export default ClityList
