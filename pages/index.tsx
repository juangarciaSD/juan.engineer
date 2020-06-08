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
      <meta property="og:title" content="Juan Garcia - juan.engineer" />
      <meta property="og:description" content="Full-Stack Developer" />
      <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/tech-me-main.appspot.com/o/website%2Fprofile.jpg?alt=media&token=27fd93e8-0f5f-4351-8833-1262fc620b12" />
      <meta property="og:url" content="https://juan.engineer" />

      <meta property="twitter:title" content="Juan Garcia - juan.engineer" />
      <meta property="twitter:description" content="Full-Stack Developer" />
      <meta property="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/tech-me-main.appspot.com/o/website%2Fprofile.jpg?alt=media&token=27fd93e8-0f5f-4351-8833-1262fc620b12" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:side" content="https://juan.engineer" />
      <meta property="twitter:creator" content="@juan_garcia3708" />
    </Helmet>
    <MainContainer />
    <Container>
      <Profile src="https://firebasestorage.googleapis.com/v0/b/tech-me-main.appspot.com/o/website%2Fprofile.jpg?alt=media&token=27fd93e8-0f5f-4351-8833-1262fc620b12"></Profile>
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