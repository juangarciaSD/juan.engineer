import React from "react";
import { HeadingComp, HeadingProps } from "./styles";

const Heading1: React.FC<HeadingProps> = (props) => {
    return(
        <HeadingComp 
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
                backgroundColor={props.backgroundColor}>
                    {props.text}
                </HeadingComp>
    );
};

Heading1.defaultProps = {
    color: "#c5c5c5",
    fontSize: "14px",
    fontWeight: "200",
    letterSpacing: "1px",
    paddingTop: "20px",
    paddingBottom: "10px"
}

export default Heading1;