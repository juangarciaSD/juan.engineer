import React from "react";
import Div, { DivProps } from "components/div";
import Image from "components/image";
import Heading1 from "components/heading/1";
import Link from "components/link";

interface Props extends DivProps {
    src?: string;
    href?: string;
    position: string;
    status: string;
    company: string;
    type: string;
    color?: string;
    image?: string;
    altText?: string;
    timeline?: string;
}

const JobDiv: React.FC<Props> = (props) => {
    return(
        <>
        <Div
            display="flex"
            flexDirection="row"
            maxHeight="350px"
            backgroundColor={props.backgroundColor}
            marginRight="100px"
            marginLeft="100px"
            marginBottom="35px"
            borderRadius="10px">
            <Div
                display="flex"
                flexDirection="column"
                width="50%"
                height="350px"
                maxHeight="350px"
                justifyContent="center"
                borderRadius="10px"
                backgroundColor="rgba(0, 0, 0, 0.44)">
                {props.src ? <Image width="100%" minWidth="150px" src={props.src}/> :
                <Heading1 
                text={props.altText}
                fontSize="60px"
                color="#fff"
                textAlign="center" />}
            </Div>
            <Div
                display="flex"
                marginLeft="15px"
                marginTop="10px"
                marginBottom="10px"
                flexDirection="column"
                width="100%"
                color="#fff">
                <Heading1 text="Position" />
                <span>{props.position}</span>
                <Heading1 text="Status"></Heading1>
                
                <span>{props.status}</span>
                <Heading1 text="Company"></Heading1>
                <span>{props.company}</span>
                <Heading1 text="Type"></Heading1>
                <span>{props.type}</span>
                <Heading1 text="Timeline"></Heading1>
                <span>{props.timeline}</span>
                <Link 
                href={props.href} 
                text="Visit Website" 
                hoverColor="#fff" 
                hoverBackgroundColor={props.backgroundColor}
                target="_blank" />
            </Div>
        </Div>
        </>
    );
};

export default JobDiv;