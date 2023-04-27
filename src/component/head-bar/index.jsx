import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HeadBarWrapper } from './style'
import { LeftOutline } from 'antd-mobile-icons'
import { useNavigate } from 'react-router-dom'

const HeadBar = memo((props) => {
  const { title, naviTo, component } = props
  const navigate = useNavigate()
  function navigateTo() {
    if (naviTo) {
      navigate(naviTo)
    } else {
      window.history.back()
    }
  }
  return (
    <HeadBarWrapper bgc={props.bgc}>
      <div className="city_change">
        <div>
          <LeftOutline onClick={navigateTo} />
        </div>
        <div>{title}</div>
      </div>
      <div className="component">{component}</div>
    </HeadBarWrapper>
  )
})

HeadBar.propTypes = {}

export default HeadBar
