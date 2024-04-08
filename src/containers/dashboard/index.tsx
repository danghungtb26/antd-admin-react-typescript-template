import React from 'react'
import PanelGroup from './components/panel-group'
import { Container } from './styles'
import LineChart from './components/line-chart'

type DashboardContainerProps = {}

const DashboardContainer: React.FC<React.PropsWithChildren<DashboardContainerProps>> = () => {
  return (
    <Container>
      <PanelGroup />
      <LineChart />
    </Container>
  )
}

export default DashboardContainer
