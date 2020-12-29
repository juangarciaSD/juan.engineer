import styled from "styled-components";
import { DivProps } from "components/div"

export interface HeadingProps extends DivProps {
    text?: string;
    letterSpacing?: string;
    paddingTop?: string;
    paddingBottom?: string;
}

export const HeadingComp = styled.h1<HeadingProps>`
    display: ${props => props.display};
    float: ${props => props.float};
    padding: ${props => props.padding};
    margin: ${props => props.margin};
    margin-top: ${props => props.marginTop};
    margin-left: ${props => props.marginLeft};
    margin-right: ${props => props.marginRight};
    margin-bottom: ${props => props.marginBottom};
    padding-top: ${props => props.paddingTop};
    padding-bottom: ${props => props.paddingBottom};
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
    letter-spacing: ${props => props.letterSpacing};
    flex-direction: ${props => props.flexDirection};
    justify-content: ${props => props.justifyContent};
    background-color: ${props => props.backgroundColor};

    margin-block-start: 0px;
    margin-block-end: 0px;

    &:first-child {
        padding-top: 10px;
    }
`;