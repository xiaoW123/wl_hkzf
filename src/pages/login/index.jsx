import HeadBar from '@/component/head-bar'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { LoginWrapper } from './style'
import { Form, Input, Button } from 'antd-mobile'
import { EyeInvisibleOutline, EyeOutline } from 'antd-mobile-icons'
import { useNavigate } from 'react-router-dom'
const Login = memo((props) => {
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)
  function submitClick(value) {
    console.log(value)
  }
  return (
    <LoginWrapper>
      {/* 头部 */}
      <HeadBar title="账号登录" />
      {/* 表单 */}
      <Form
        layout="horizontal"
        onFinish={(value) => submitClick(value)}
        footer={
          <Button
            style={{
              '--background-color': 'rgb(28, 182, 118)',
              color: '#fff'
            }}
            block
            type="submit"
            size="large"
            // onClick={submitClick}
          >
            登录
          </Button>
        }
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: '用户名不能为空' }]}
        >
          <Input placeholder="请输入账号" clearable type="username" />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '密码不能为空' }]}
          extra={
            <div className="eye">
              {!visible ? (
                <EyeInvisibleOutline onClick={() => setVisible(true)} />
              ) : (
                <EyeOutline onClick={() => setVisible(false)} />
              )}
            </div>
          }
        >
          <Input
            placeholder="请输入密码"
            clearable
            type={visible ? 'text' : 'password'}
          />
        </Form.Item>
      </Form>
      <div className="enroll">
        还没有账号，去<span onClick={() => navigate('/registe')}>注册</span>~
      </div>
    </LoginWrapper>
  )
})

Login.propTypes = {}

export default Login
