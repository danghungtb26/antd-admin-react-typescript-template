import PageAnimation from '@components/animation/page'
import HomeContainer from '@containers/home'
import React from 'react'

type HomePageProps = {}

const HomePage: React.FC<React.PropsWithChildren<HomePageProps>> = () => {
  return (
    <PageAnimation>
      <HomeContainer />
    </PageAnimation>
  )
}

export default HomePage
