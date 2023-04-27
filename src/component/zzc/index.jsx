import React, { memo } from 'react'
import { ZzcWrapper } from './style'
import { Popover } from 'antd-mobile'

const Zzc = memo(() => {
  return (
    <ZzcWrapper>
      <Popover content="Hello World" placement="top" defaultVisi>
        <div className="zzc_div"></div>
      </Popover>
    </ZzcWrapper>
  )
})

export default Zzc
