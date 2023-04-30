import HeadBar from '@/component/head-bar'
import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { MapWrapper } from './style'
import {
  Map,
  Marker,
  NavigationControl,
  MapTypeControl,
  Label,
  ZoomControl
} from 'react-bmapgl'
import { shallowEqual, useSelector } from 'react-redux'
const Maps = memo((props) => {
  // 数据与状态
  const { currentPositioning, position } = useSelector((state) => {
    return {
      currentPositioning: state.area.currentPositioning,
      position: state.area.position
    }
  }, shallowEqual)
  const [localCity, setLocalCity] = useState({})
  const df = currentPositioning[0].label
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

  function changeClick(e, item) {
    console.log(e)
    console.log(item)
  }

  return (
    <MapWrapper>
      <HeadBar title="地图找房" naviTo="/home" bgc="#fff"></HeadBar>
      <Map
        style={{ width: '100vw', height: '100vh' }}
        center={localCity}
        zoom="11"
      >
        <ZoomControl anchor={BMAP_ANCHOR_BOTTOM_LEFT} />
        <Marker position={localCity} />
        
        <NavigationControl />
        <MapTypeControl anchor={BMAP_ANCHOR_BOTTOM_RIGHT} />
        {position?.map((item) => {
          return (
            <Label
              className="label_list"
              key={item.value}
              onClick={(e, item) => changeClick(e, item)}
              position={
                new BMapGL.Point(item.coord.longitude, item.coord.latitude)
              }
              text={item.label + '<br>' + item.count + '套'}
              style={{
                boxSizing: 'border-box',
                width: '70px',
                height: ' 70px',
                borderRadius: '50%',
                textAlign: 'center',
                lineHeight: '60px',
                borderColor: ' rgba(12, 181, 106, 0.9)',
                background: ' rgba(12, 181, 106, 0.9)',
                color: '#fff',
                boxShadow: 'rgb(189, 189, 189) 0px 2px 2px'
              }}
            >
              {item.label}
            </Label>
          )
        })}
      </Map>
    </MapWrapper>
  )
})

Map.propTypes = {}
export default Maps
