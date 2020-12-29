import styled from "styled-components";
import { HeadingProps } from "components/heading/1/styles";

export interface LinkProps extends HeadingProps {
    href?: string;
    target?: string;
    textDecoration?: string;
    alignSelf?: string;
    borderBottomRightRadius?: string;
    borderTopRightRadius?: string;
    hoverColor?: string;
    hoverBackgroundColor?: string;
}

export const LinkStyle = styled.a<LinkProps>`
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
    align-self: ${props => props.alignSelf};
    text-decoration: ${props => props.textDecoration};
    flex-direction: ${props => props.flexDirection};
    justify-content: ${props => props.justifyContent};
    background-color: ${props => props.backgroundColor};
    background-image: ${props => props.backgroundImage};
    border-bottom-right-radius: ${props => props.borderBottomRightRadius};
    border-top-right-radius: ${props => props.borderTopRightRadius};
    transition: all 200ms ease-in-out;

    &:hover {
        cursor: pointer;
        color: ${props => props.hoverColor};
        background-color: ${props => props.hoverBackgroundColor};
    }
`;