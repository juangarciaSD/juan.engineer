import React from 'react'
import {
  Container,
  Profile
} from '../public/components/ui'
import profile from '../public/assets/profile.png'
import Notify from '../public/assets/icons/notify.svg'

const Index = () => {
  return(
    <>
    <Container>
      <Profile src={profile}></Profile>
      <Notify />
    </Container>
    </>
  )
}

export default Index