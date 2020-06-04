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
import Discord from '../public/assets/icons/discord.svg'
import Github from '../public/assets/icons/github.svg'
import Linkedin from '../public/assets/icons/linkedin.svg'
import Notify from '../public/assets/icons/notify.svg'

const Index = () => {
  return(
    <>
    <Helmet>
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
          <SocialLink href="https://github.com/fangskills" tooltip="Github" className="github">
            <Github />
          </SocialLink>
          {/* <SocialLink href="#" tooltip="Discord" className="discord">
            <Discord />
          </SocialLink> */}
          <SocialLink href="https://www.linkedin.com/in/juan-garcia-029161198/" tooltip="Linkedin" className="linkedin">
            <Linkedin />
          </SocialLink>
          <SocialLink href="https://notify.me/fangskillz" tooltip="Notify" className="notify">
            <Notify />
          </SocialLink>
      </Social>
    </Container>
    </>
  )
}

export default Index