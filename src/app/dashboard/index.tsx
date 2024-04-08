import PageAnimation from '@components/animation/page'
import DashboardContainer from '@containers/dashboard'
import React from 'react'

type DashboardPageProps = {}

const DashboardPage: React.FC<React.PropsWithChildren<DashboardPageProps>> = () => {
  return (
    <PageAnimation>
      <DashboardContainer />
    </PageAnimation>
  )
}

export default DashboardPage
