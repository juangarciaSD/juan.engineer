import React from "react";
import styled from "styled-components";
import NextLink from "next/link";

import Div from "./Div";
import Icon from "./icon";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

import { ToggleTheme } from "utils/theme";

const Footer = () => {
    return(
        <Div
            position="fixed"
            bottom="0"
            marginTop="20px"
            display="flex"
            flexDirection="row"
            minWidth="fit-content"
            backgroundColor="var(--background)"
            paddingTop="40px"
            height="100px"
            width="100%"
            maxHeight="max-content">
                <Div
                    position="fixed"
                    left="0"
                    marginLeft="40px"
                    marginRight="40px"
                    flexDirection="row"
                    display="flex">
                        <NextLink href="/" passHref>
                            <Link>Juan Garcia</Link>
                        </NextLink>
                        <Text paddingLeft="10px" paddingRight="10px">•</Text>
                        <Text>2003 - {new Date().getFullYear()}</Text>
                        <Text paddingLeft="10px" paddingRight="10px">•</Text>
                        <IconWrapped>
                            <Icon
                                onClick={ToggleTheme}
                                icon={faMoon}
                                size={15}
                                highlight="var(--highlight-color)"
                            />
                        </IconWrapped>
                </Div>
        </Div>
    );
};

const IconWrapped = styled.div`
  opacity: 50%;
`;

const Text = styled(Div)`
    font-family: 'FiraCode-Light';
    color: var(--text);
    opacity: 50%;
`;

const Link = styled.a`
  text-decoration: none;
  font-family: "FiraCode-Light";
  color: var(--text);
  opacity: 50%;
  :hover {
    cursor: pointer;
    color: #127796;
    text-decoration: underline;
  }
`;

export default Footer;