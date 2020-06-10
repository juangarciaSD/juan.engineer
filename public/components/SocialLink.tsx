import { ReactNode, forwardRef } from 'react'
import styled from 'styled-components'
import Tippy from '@tippy.js/react'
import { SocialIcon } from './ui'

const CustomeTippy = styled(Tippy)`
    color: #fff;
    background-color: #343a40;
    padding: 7.5px;
    margin-top: 15px;
    border: 1px solid transparent;
    border-radius: 10px;
`

const SocialSVG = forwardRef(( props, ref ) => {
    //@ts-ignore
    return <SocialIcon ref={ref}>{props.children}</SocialIcon>
})

const SocialLink = (props: {href: string, tooltip?: string, className?: string, children: ReactNode}) => {
    return(
        <>
        <a href={props.href} target="_blank" className={props.className}>
            <CustomeTippy content={<span>{props.tooltip}</span>} lazy={false} placement="bottom" duration={0}>
                <SocialIcon>
                    {props.children}
                </SocialIcon>
            </CustomeTippy>
        </a>
        </>
    )
}

export default SocialLink