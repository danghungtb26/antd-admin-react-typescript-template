import Hamburger from '@components/hamburger'
import { Layout } from 'antd'
import React from 'react'
import styled from 'styled-components'

const HeaderStyled = styled(Layout.Header)`
  height: 5rem;
  transition: width 0.2s;
  background: #fff !important;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  z-index: 9;
  padding: 0 2.4rem;
  position: relative;
`

type LayoutHeaderProps = {}

const LayoutHeader: React.FC<React.PropsWithChildren<LayoutHeaderProps>> = () => {
  return (
    <HeaderStyled>
      <Hamburger />
    </HeaderStyled>
  )
}

export default LayoutHeader
