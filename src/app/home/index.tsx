import HomeContainer from '@containers/home'
import React from 'react'

type HomePageProps = {}

const HomePage: React.FC<React.PropsWithChildren<HomePageProps>> = () => {
  return <HomeContainer />
}

export default HomePage
