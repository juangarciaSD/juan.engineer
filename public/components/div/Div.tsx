import React from "react";
import { MainDiv, DivProps } from "./styles";

const DivComponent: React.FC<DivProps> = (props: DivProps) => {
    return (
            <MainDiv
                float={props.float}
                display={props.display}
                flexDirection={props.flexDirection}
                padding={props.padding}
                margin={props.margin}
                marginTop={props.marginTop}
                marginBottom={props.marginBottom}
                marginLeft={props.marginLeft}
                marginRight={props.marginRight}
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
                backgroundColor={props.backgroundColor}
                backgroundImage={props.backgroundImage}
            >
                {props.children}
            </MainDiv>
    );
};

export default DivComponent;