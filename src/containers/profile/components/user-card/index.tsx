import { Avatar, Card } from 'antd'
import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
  padding: 1.8rem 2rem;
  border-bottom: 1px solid #ebeef5;
`

const Body = styled.div`
  padding: 2rem;
`

const UserProfile = styled.div``

const BoxCenter = styled.div`
  padding-top: 1rem;
  margin: 0 auto;
  display: table;
`

const CardStyled = styled(Card)`
  .ant-card-body {
    padding: 0;
  }
`

type UserCardProps = {}

const UserCard: React.FC<React.PropsWithChildren<UserCardProps>> = () => {
  return (
    <CardStyled>
      <Header>
        <span>About me</span>
      </Header>
      <Body>
        <UserProfile>
          <BoxCenter>
            <Avatar
              size={100}
              src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"
            />
          </BoxCenter>
        </UserProfile>
      </Body>
    </CardStyled>
  )
}

export default UserCard
