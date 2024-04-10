import Hamburger from '@components/hamburger'
import { Layout } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { HEADER_HEIGHT } from '../constants'
import BreadCrumb from '@components/breadcrumb'

const HeaderStyled = styled(Layout.Header)`
  height: ${HEADER_HEIGHT / 10}rem;
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
      <BreadCrumb />
      <div style={{ float: 'right' }}>a</div>
    </HeaderStyled>
  )
}

export default LayoutHeader
