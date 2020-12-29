import React from "react";
import styled from "styled-components";

export interface DivProps {
    padding?: string;
    // Generalistic:
    margin?: string;
    // Specific:
    marginTop?: string;
    marginBottom?: string;
    marginLeft?: string;
    marginRight?: string;
    border?: string;
    boxShadow?: string;
    borderRadius?: string;
    width?: string;
    fontSize?: string;
    fontWeight?: string;
    outline?: string;
    color?: string;
    display?: string;
    float?: string;
    children?: React.ReactNode;
    //default props
    maxWidth?: string;
    maxHeight?: string;
    minHeight?: string;
    height?: string;
    flexDirection?: string;
    justifyContent?: string;
    textAlign?: string;
    backgroundColor?: string;
    backgroundImage?: string;
}

export const MainDiv = styled.div<DivProps>`
    display: ${props => props.display};
    float: ${props => props.float};
    padding: ${props => props.padding};
    margin: ${props => props.margin};
    margin-top: ${props => props.marginTop};
    margin-left: ${props => props.marginLeft};
    margin-right: ${props => props.marginRight};
    margin-bottom: ${props => props.marginBottom};
    border: ${props => props.border};
    box-shadow: ${props => props.boxShadow};
    border-radius: ${props => props.borderRadius};
    max-width: ${props => props.maxWidth};
    max-height: ${props => props.maxHeight};
    min-height: ${props => props.minHeight};
    width: ${props => props.width};
    height: ${props => props.height};
    text-align: ${props => props.textAlign};
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    outline: ${props => props.outline};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen;
    color: ${props => props.color};
    flex-direction: ${props => props.flexDirection};
    justify-content: ${props => props.justifyContent};
    background-color: ${props => props.backgroundColor};
    background-image: ${props => props.backgroundImage};

    &:last-child {
        margin-bottom: 0px;
    }
`;