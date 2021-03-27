import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Router from "next/router";

import Div from "./Div";

interface NavigationProps {
    position?: React.CSSProperties["position"];
}

const Navigation = (props: NavigationProps) => {
    return(
        <NavigationContainer position={props.position}>
                <Link href="/" passHref>
                    <NavLink>Home</NavLink>
                </Link>
                {/* <Link href="/spotify/history" passHref>
                    <NavLink>Spotify History</NavLink>
                </Link> */}
        </NavigationContainer>
    );
};

const NavigationContainer = styled(Div)<{ position: string }>`
    position: ${props => props.position ? props.position : "absolute"};
    left: 0;
    display: flex;
    flex-direction: row;
    margin: 20px;
    padding: 10px;

    @media only screen and (max-width : 640px) {
        position: initial;
        margin: 10px 15px;
    }
`;

const NavLink = styled.a`
    font-family: 'FiraCode-Bold';
    font-size: 18px;
    color: var(--text);
    opacity: 0.5;
    margin-right: 18px;
    cursor: pointer;
    text-decoration: none;
    transition: 200ms ease-in-out;

    :hover {
        opacity: 1;
        color: #127796;
        text-decoration: underline;
    }
`;

export default Navigation;