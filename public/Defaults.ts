import { css } from "styled-components";
import { CSSProperties } from "react";

export interface DefaultProps {
    position?: CSSProperties["position"];
    top?: CSSProperties["top"];
    left?: CSSProperties["left"];
    right?: CSSProperties["right"];
    bottom?: CSSProperties["bottom"];
    zIndex?: CSSProperties["zIndex"];
    transform?: CSSProperties["transform"];

    padding?: CSSProperties["padding"];
    paddingLeft?: CSSProperties["paddingLeft"];
    paddingRight?: CSSProperties["paddingRight"];
    paddingBottom?: CSSProperties["paddingBottom"];
    paddingTop?: CSSProperties["paddingTop"];

    margin?: CSSProperties["margin"];
    marginLeft?: CSSProperties["marginLeft"];
    marginRight?: CSSProperties["marginRight"];
    marginBottom?: CSSProperties["marginBottom"];
    marginTop?: CSSProperties["marginTop"];

    border?: CSSProperties["border"];
    borderBottom?: CSSProperties["borderBottom"];
    borderTop?: CSSProperties["borderTop"];
    borderLeft?: CSSProperties["borderLeft"];
    borderRight?: CSSProperties["borderRight"];
    outline?: CSSProperties["outline"];
    borderRadius?: CSSProperties["borderRadius"];

    color?: CSSProperties["color"];
    textColor?: CSSProperties["color"];
    background?: CSSProperties["background"];
    bg?: CSSProperties["background"];
    backgroundColor?: CSSProperties["backgroundColor"];
    display?: CSSProperties["display"];
    alignItems?: CSSProperties["alignItems"];
    alignSelf?: CSSProperties["alignSelf"];
    justifyContent?: CSSProperties["justifyContent"];
    gap?: CSSProperties["gap"];
    flexDirection?: CSSProperties["flexDirection"];
    flexGrow?: CSSProperties["flexGrow"];
    verticalAlign?: CSSProperties["verticalAlign"];

    minWidth?: CSSProperties["minWidth"];
    maxWidth?: CSSProperties["maxWidth"];
    width?: CSSProperties["width"];
    minHeight?: CSSProperties["minHeight"];
    maxHeight?: CSSProperties["maxHeight"];
    height?: CSSProperties["height"];

    textAlign?: CSSProperties["textAlign"];
    textDecoration?: CSSProperties["textDecoration"];
    fontSize?: CSSProperties["fontSize"];
    fontWeight?: CSSProperties["fontWeight"];

    float?: CSSProperties["float"];
    cursor?: CSSProperties["cursor"];

    children?: React.ReactNode;
    boxSizing?: CSSProperties["boxSizing"];
    boxShadow?: CSSProperties["boxShadow"];

    transition?: CSSProperties["transition"];
    pointerEvents?: CSSProperties["pointerEvents"];
    opacity?: CSSProperties["opacity"];
    overflow?: CSSProperties["overflow"];
    overflowX?: CSSProperties["overflowX"];
    overflowY?: CSSProperties["overflowY"];
    userSelect?: CSSProperties["userSelect"];

    hoverBackgroundColor?: CSSProperties["backgroundColor"];
    hoverColor?: CSSProperties["color"];

    focusBorderColor?: CSSProperties["borderColor"];
}


export const DEFAULT_STYLES = css<DefaultProps>`
    z-index: ${props => props.zIndex};
    position: ${props => props.position};
    top: ${props => props.top};
    left: ${props => props.left};
    right: ${props => props.right};
    bottom: ${props => props.bottom};
    transform: ${props => props.transform};
    padding: ${props => props.padding};
    padding-left: ${props => props.paddingLeft};
    padding-right: ${props => props.paddingRight};
    padding-top: ${props => props.paddingTop};
    padding-bottom: ${props => props.paddingBottom};
    margin: ${props => props.margin};
    margin-left: ${props => props.marginLeft};
    margin-right: ${props => props.marginRight};
    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};
    border: ${props => props.border};
    border-bottom: ${props => props.borderBottom};
    border-top: ${props => props.borderTop};
    border-left: ${props => props.borderLeft};
    border-right: ${props => props.borderRight};
    border-radius: ${props => props.borderRadius};
    outline: ${props => props.outline};
    color: ${props => props.color || props.textColor};
    background: ${props => props.background || props.bg};
    background-color: ${props => props.backgroundColor};
    display: ${props => props.display};
    align-items: ${props => props.alignItems};
    align-self: ${props => props.alignSelf};
    justify-content: ${props => props.justifyContent};
    gap: ${props => props.gap};
    flex-direction: ${props => props.flexDirection};
    flex-grow: ${props => props.flexGrow};
    vertical-align: ${props => props.verticalAlign};
    min-width: ${props => props.minWidth};
    max-width: ${props => props.maxWidth};
    width: ${props => props.width};
    min-height: ${props => props.minHeight};
    max-height: ${props => props.maxHeight};
    height: ${props => props.height};
    text-align: ${props => props.textAlign};
    text-decoration: ${props => props.textDecoration};
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    float: ${props => props.float};
    cursor: ${props => props.cursor};
    box-shadow: ${props => props.boxShadow};
    box-sizing: ${props => props.boxSizing};
    opacity: ${props => props.opacity};
    transition: ${props => props.transition};
    pointer-events: ${props => props.pointerEvents};
    user-select: ${props => props.userSelect};
    overflow: ${props => props.overflow};
    overflow-x: ${props => props.overflowX};
    overflow-y: ${props => props.overflowY};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen;
    &:hover {
        background-color: ${props => props.hoverBackgroundColor};
        color: ${props => props.hoverColor};
    }
    &:focus {
        border-color: ${props => props.focusBorderColor};
        transition: 200ms ease-in-out border-color;
    }
`;