import React, { memo } from 'react'
import { ScreeningWrapper } from './style'
import { Selector } from 'antd-mobile'
const Screening = memo((props) => {
  const { options, title, isValue } = props

  function getSelectorData(arr, extend) {
    props.getScreeningClcik(arr, extend)
  }
  return (
    <ScreeningWrapper>
      <div className="title">{title}</div>
      <div className="item">
        <Selector
          options={options}
          multiple={true}
          onChange={(arr, extend) => getSelectorData(arr, extend)}
          columns={3}
          style={{
            fontSize: '12px'
          }}
        />
      </div>
    </ScreeningWrapper>
  )
})

export default Screening
