import React from "react";
import styled from "styled-components";
import Link from "next/link";

import Div from "./Div";

const Navigation = () => {
    return(
        <NavigationContainer>
                <Link href="/" passHref>
                    <NavLink>Home</NavLink>
                </Link>
        </NavigationContainer>
    );
};

const NavigationContainer = styled(Div)`
    position: absolute;
    left: 0;
    display: flex;
    flex-direction: row;
    margin: 15px;
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