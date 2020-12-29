import React from "react";
import { MainImage, ImageProps } from "./styles";

const ImageComponent: React.FC<ImageProps> = (props) => {
    return(
        <MainImage
            src={props.src}
            alt={props.altText}
            float={props.float}
            display={props.display}
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
            minWidth={props.minWidth}
            height={props.height}
            textAlign={props.textAlign}
            backgroundColor={props.backgroundColor}
        ></MainImage>
    );
};

export default ImageComponent;