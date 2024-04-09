import React from 'react'
import { Menu as MenuAntd, MenuProps as MenuAntdProps } from 'antd'
import {
  DashboardOutlined,
  ExclamationOutlined,
  HomeOutlined,
  TableOutlined,
} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useSetting } from '@contexts/setting/context'
import styled from 'styled-components'

const MenuStyled = styled.div`
  .ant-menu {
    background-color: rgba(48, 65, 86, 0.5);
    .ant-menu-submenu-open {
      background-color: #263445 !important;
      border-radius: 0;
    }

    .ant-menu-sub {
      background-color: #1f2d3d !important;
    }
  }
`

type MenuProps = {}

const Menu: React.FC<React.PropsWithChildren<MenuProps>> = () => {
  const navigate = useNavigate()
  const { toggleDrawerOpened } = useSetting()

  const onClick: MenuAntdProps['onClick'] = e => {
    navigate(`/${e.key}`)
    toggleDrawerOpened()
  }

  return (
    <MenuStyled>
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
    </MenuStyled>
  )
}

export default Menu
