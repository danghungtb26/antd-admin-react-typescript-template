import React from 'react'
import { Menu as MenuAntd, MenuProps as MenuAntdProps } from 'antd'
import {
  DashboardOutlined,
  ExclamationOutlined,
  HomeOutlined,
  TableOutlined,
} from '@ant-design/icons'
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
      mode="inline"
      onClick={onClick}
      items={[
        { key: 'dashboard', label: 'Dashboard', icon: <DashboardOutlined /> },
        { key: 'home', icon: <HomeOutlined />, label: 'Home' },
        {
          key: 'template',
          label: 'Template',
          icon: <ExclamationOutlined />,
          children: [
            {
              key: 'template/table',
              label: 'Table',
              icon: <TableOutlined />,
            },
          ],
        },
      ]}
    />
  )
}

export default Menu
