import React from "react";
import styled from "styled-components";

import Div from "./Div";

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

                </Div>
        </Div>
    );
};