import styled from "styled-components";

export interface ImageProps {
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
    //default props
    maxWidth?: string;
    maxHeight?: string;
    minHeight?: string;
    minWidth?: string;
    height?: string;
    textAlign?: string;
    backgroundColor?: string;
    //required values
    src?: string;
    altText?: string;
}

export const MainImage = styled.img<ImageProps>`
    display: ${props => props.display};
    float: ${props => props.float};
    padding: ${props => props.padding};
    margin: ${props => props.margin};
    margin-top: ${props => props.marginTop};
    margin-left: ${props => props.marginLeft};
    margin-right: ${props => props.marginRight};
    border: ${props => props.border};
    box-shadow: ${props => props.boxShadow};
    border-radius: ${props => props.borderRadius};
    max-width: ${props => props.maxWidth};
    max-height: ${props => props.maxHeight};
    min-height: ${props => props.minHeight};
    min-width: ${props => props.minWidth};
    width: ${props => props.width};
    height: ${props => props.height};
    text-align: ${props => props.textAlign};
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    outline: ${props => props.outline};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen;
    color: ${props => props.color};
    background-color: ${props => props.backgroundColor};
`;