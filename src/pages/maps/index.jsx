import HeadBar from '@/component/head-bar'
import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { MapWrapper } from './style'
import { Map, Marker, NavigationControl, MapTypeControl } from 'react-bmapgl'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
const Maps = memo((props) => {
  // 数据与状态
  const { currentPositioning } = useSelector((state) => {
    return {
      currentPositioning: state.area.currentPositioning
    }
  }, shallowEqual)
  const [localCity, setLocalCity] = useState({})
  const df = currentPositioning[0].label

  // 事件处理
  const dispatch = useDispatch()
  useEffect(() => {
    let myGeocoder = new BMapGL.Geocoder()
    myGeocoder.getPoint(
      df,
      (point) => {
        setLocalCity(point)
        console.log(point)
      },
      df
    )
  }, [])
  return (
    <MapWrapper>
      <HeadBar title="地图找房" naviTo="/home" bgc="#fff"></HeadBar>
      {/* <div id="container"></div> */}
      <Map
        style={{ width: '100vw', height: '100vh' }}
        center={localCity}
        zoom="11"
      >
        <Marker position={localCity} />
        <NavigationControl />
        <MapTypeControl anchor={BMAP_ANCHOR_BOTTOM_RIGHT} />
      </Map>
    </MapWrapper>
  )
})

Map.propTypes = {}
export default Maps
