import React, { memo, useState, useRef } from 'react'
import { RegisteWrapper } from './style'
import { Form, Input, Button, Toast } from 'antd-mobile'
import { EyeInvisibleOutline, EyeOutline } from 'antd-mobile-icons'
import HeadBar from '@/component/head-bar'

import { useNavigate } from 'react-router-dom'
import {userRegistered } from '@/service/modules'

const Registe = memo(() => {
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)
  const inputRef = useRef()
  // 表单校验成功后的调用
  async function submitRegister(value) {
    if (value.password !== value.repeat_password) {
      Toast.show({
        icon: 'fail',
        content: '密码不一致'
      })
      return
    }

    console.log(value)
    const username = value.username
    const password = value.password
    const { body, status, description } = await userRegistered(
      username,
      password
    )

    if (status !== 200) {
      Toast.show({
        icon: 'fail',
        content: description
      })
      return
    }
    Toast.show({
      icon: 'success',
      content: '注册成功'
    })
    inputRef.current?.clear()
    window.localStorage.setItem('token', body.toke)
  }

  return (
    <RegisteWrapper>
      {/* 头部 */}
      <HeadBar title="账号注册" />
      {/* 表单 */}
      <Form
        layout="horizontal"
        onFinish={(value) => submitRegister(value)}
        footer={
          <Button
            style={{
              '--background-color': 'rgb(28, 182, 118)',
              color: '#fff'
            }}
            block
            type="submit"
            size="large"
          >
            注册
          </Button>
        }
      >
        {/* 用户名 */}
        <Form.Item
          label="用户名"
          name="username"
          clearable
          rules={[{ required: true, message: '用户名不能为空' }]}
        >
          <Input placeholder="请输入账号" clearable type="username" />
        </Form.Item>
        {/* 密码 */}
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
        {/* 重复密码 */}
        <Form.Item
          label="重复密码"
          name="repeat_password"
          clearable
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
            placeholder="请重复输入密码"
            clearable
            value="123"
            type={visible ? 'text' : 'password'}
          />
        </Form.Item>
      </Form>
      <div className="enroll_floor">
        <div>
          点我回到<span onClick={() => navigate('/home')}>首页</span>
        </div>
        <div>
          已有账号，去<span onClick={() => navigate('/login')}>登陆</span>
        </div>
      </div>
    </RegisteWrapper>
  )
})

export default Registe
