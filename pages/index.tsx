import React from 'react'
import { Helmet } from 'react-helmet'
import {
  MainContainer,
  Container,
  Profile,
  Name, 
  Position,
  Social
} from '../public/components/ui'
import SocialLink from '../public/components/SocialLink'
import Twitter from '../public/assets/icons/twitter.svg'
import Github from '../public/assets/icons/github.svg'
import Linkedin from '../public/assets/icons/linkedin.svg'
import Notify from '../public/assets/icons/notify.svg'

const Index = () => {
  return(
    <>
    <Helmet>
      <title>Home - juan.engineer</title>
      <style>{`
          body {
            padding: 0;
            margin: 0;
            overflow: hidden;
            font-family: 'Rubik', sans-serif;
          }

          a {
            padding: 5px 8px;
          }
        `}
      </style>
      <meta property="og:title" content="Juan Garcia - Full-Stack Developer" />
      <meta property="og:description" content="Full-Stack Developer" />
      <meta property="og:image" content="../assets/profile.jpg" />
      <meta property="og:url" content="https://juan.engineer" />
      <meta property="og:type" content="summary" />

      <meta property="twitter:title" content="Juan Garcia - juan.engineer" />
      <meta property="twitter:description" content="Full-Stack Developer" />
      <meta property="twitter:image" content="../assets/profile.jpg" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:site" content="https://juan.engineer" />
      <link rel="shortcut icon" type="image/jpg" href="../assets/profile.jpg" />
      <link rel="shortcut icon" type="image/jpg" href="../assets/background.jpg" />
    </Helmet>
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