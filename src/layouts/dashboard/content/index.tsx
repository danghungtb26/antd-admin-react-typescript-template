import { Layout } from 'antd'
import React from 'react'
import styled from 'styled-components'

const ContentStyled = styled(Layout.Content)`
  height: calc(100% - 100px);
`

type LayoutContentProps = {}

const LayoutContent: React.FC<React.PropsWithChildren<LayoutContentProps>> = ({ children }) => {
  return <ContentStyled>{children}</ContentStyled>
}

export default LayoutContent
