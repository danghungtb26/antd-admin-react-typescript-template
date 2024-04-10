import { Button, Form, Input } from 'antd'
import React from 'react'

type AccountTabProps = {}

const AccountTab: React.FC<React.PropsWithChildren<AccountTabProps>> = () => {
  return (
    <Form layout="vertical">
      <Form.Item name="email" label="Email">
        <Input />
      </Form.Item>
      <Form.Item name="username" label="Username">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary">Update</Button>
      </Form.Item>
    </Form>
  )
}

export default AccountTab
