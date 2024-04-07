import { Spin } from 'antd'
import React from 'react'
import { styled } from 'styled-components'

type LoadingCenterProps = {}
export const Center = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  min-height: 30rem;
  display: flex;
`
const LoadingCenter: React.FC<LoadingCenterProps> = () => {
  return (
    <Center>
      <Spin />
    </Center>
  )
}

export default LoadingCenter
