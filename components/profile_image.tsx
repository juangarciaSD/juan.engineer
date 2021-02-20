import React from "react";
import styled from "styled-components";
import Image from "next/image";

import Div from "./Div";

interface ImageProps {
    size?: string;
    left?: string;
    right?: string;
};

const ProfileImage = (props: ImageProps) => {
    return(
        <>
        <Div
            left={props.left}
            right={props.right}
            padding="5px">
            <Profile src="/assets/me.png" layout="fill" objectFit="cover"/>
        </Div>
        </>
    );
};
const StyledImage: typeof Image = styled(Image)`
  border-radius: 10px;
`;


const Profile: typeof Image = styled.img<ImageProps>`
    width: ${props => props.size ? props.size : "150px"};
    height: ${props => props.size ? props.size : "150px"};
    border-radius: 50%;
`;

export default ProfileImage;