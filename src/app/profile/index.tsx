import PageAnimation from '@components/animation/page'
import ProfileContainer from '@containers/profile'
import React from 'react'

type ProfilePageProps = {}

const ProfilePage: React.FC<React.PropsWithChildren<ProfilePageProps>> = () => {
  return (
    <PageAnimation>
      <ProfileContainer />
    </PageAnimation>
  )
}

export default ProfilePage
