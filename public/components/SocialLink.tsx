import react, { Component, ReactNode } from 'react'
import { SocialIcon } from './ui'

const SocialLink = (props: {href: string, children: ReactNode}) => {
    return(
        <>
        <a href={props.href}>
            <SocialIcon>
                {props.children}
            </SocialIcon>
        </a>
        </>
    )
}

export default SocialLink