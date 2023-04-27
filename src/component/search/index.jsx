import React, { memo } from 'react'
import { SearchWrapper } from './style'
import { useNavigate } from 'react-router-dom'
import { DownFill, SearchOutline } from 'antd-mobile-icons'
import { Modal, DotLoading } from 'antd-mobile'
import { useSelector } from 'react-redux'

const Search = memo((props) => {
  const { currentPositioning } = useSelector((state) => {
    return {
      currentPositioning: state.area.currentPositioning
    }
  })
  const navigate = useNavigate()
  function changeCityList() {
    navigate('/citylist')
    Modal.show({
      content: <DotLoading />,
      closeOnMaskClick: false
    })
  }
  function naviToMap() {
    navigate('/map')
  }
  return (
    <SearchWrapper
      searchTop={props.searchTop}
      dtTop={props.dtTop}
      searchLeft={props.searchLeft}
      searchWidth={props.searchWidth}
      dtColor={props.dtColor}
    >
      <div className="header_search">
        <div className="dd_list" onClick={changeCityList}>
          <p>{currentPositioning?.[0]?.label}&nbsp;</p>
          <DownFill color="#7f7f80" fontSize={10} />
        </div>
        <div className="search">
          <SearchOutline fontSize={14} color="#9c9fa1" />
          &nbsp;
          <p>请输入小区或地址</p>
        </div>
      </div>
      <div className="header_dt iconfont icon-weizhi" onClick={naviToMap}>
      </div>
    </SearchWrapper>
  )
})

export default Search
