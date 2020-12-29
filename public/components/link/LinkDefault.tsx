import React from "react";
import { LinkStyle, LinkProps } from "./styles";

const LinkComp: React.FC<LinkProps> = (props) => {
    return(
        <LinkStyle
            href={props.href}
            target={props.target}
            float={props.float}
            display={props.display}
            flexDirection={props.flexDirection}
            padding={props.padding}
            margin={props.margin}
            marginTop={props.marginTop}
            marginBottom={props.marginBottom}
            marginLeft={props.marginLeft}
            marginRight={props.marginRight}
            paddingTop={props.paddingTop}
            paddingBottom={props.paddingBottom}
            border={props.border}
            boxShadow={props.boxShadow}
            borderRadius={props.borderRadius}
            width={props.width}
            fontSize={props.fontSize}
            fontWeight={props.fontWeight}
            outline={props.outline}
            color={props.color}
            maxWidth={props.maxWidth}
            maxHeight={props.maxHeight}
            minHeight={props.minHeight}
            height={props.height}
            justifyContent={props.justifyContent}
            textAlign={props.textAlign}
            letterSpacing={props.letterSpacing}
            textDecoration={props.textDecoration}
            backgroundColor={props.backgroundColor}
            alignSelf={props.alignSelf}
            hoverColor={props.hoverColor}
            hoverBackgroundColor={props.hoverBackgroundColor}>
                {props.text}
            </LinkStyle>
    );
};

LinkStyle.defaultProps = {
    alignSelf: "flex-end",
    textDecoration: "none",
    backgroundColor: "#fff",
    color: "#000",
    padding: "15px 10px 15px 10px",
    borderRadius: "10px",
    borderTopRightRadius: "0px"
};

export default LinkComp;