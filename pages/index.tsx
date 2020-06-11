import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { 
  MainContainer, 
  Container, 
  Profile, 
  Name, 
  Position, 
  Social 
} from '../public/components/ui'
import Twitter from '../public/assets/icons/twitter.svg'
import Github from '../public/assets/icons/github.svg'
import Linkedin from '../public/assets/icons/linkedin.svg'
import Notify from '../public/assets/icons/notify.svg'

const SocialLink = dynamic(import('../public/components/SocialLink'))

const Index = () => {
  return(
    <>
    <Head>
      <title>Home - juan.engineer</title>
      <style>{`
          a {
            padding: 5px 8px;
          }
        `}
      </style>
    </Head>
    <MainContainer />
    <Container>
      <Profile src="../assets/profile.jpg"></Profile>
      <Name>Juan Garcia</Name>
      <Position>Full-Stack Developer</Position>
      <Social>
          <SocialLink href="https://twitter.com/juan_garcia3708" tooltip="Twitter">
            <Twitter />
          </SocialLink>
          <SocialLink href="https://github.com/fangskills" tooltip="Github">
            <Github />
          </SocialLink>

          <SocialLink href="https://www.linkedin.com/in/juan-garcia-029161198/" tooltip="Linkedin">
            <Linkedin />
          </SocialLink>
          <SocialLink href="https://notify.me/fangskillz" tooltip="Notify">
            <Notify />
          </SocialLink>
      </Social>
    </Container>
    </>
  )
}

export default Index