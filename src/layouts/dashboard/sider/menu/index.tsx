import React from 'react'
import { Menu as MenuAntd, MenuProps as MenuAntdProps } from 'antd'
import { DashboardOutlined, HomeOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

type MenuProps = {}

const Menu: React.FC<React.PropsWithChildren<MenuProps>> = () => {
  const navigate = useNavigate()
  const onClick: MenuAntdProps['onClick'] = e => {
    navigate(`/${e.key}`)
  }

  return (
    <MenuAntd
      theme="dark"
      onClick={onClick}
      items={[
        { key: 'dashboard', icon: <DashboardOutlined /> },
        { key: 'home', icon: <HomeOutlined /> },
      ]}
    />
  )
}

export default Menu
