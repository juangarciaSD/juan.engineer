import React from "react";
import { DivComponent, DivProps } from "./styles";

const Div: React.FC<DivProps> = (props) => {
    return(
        <DivComponent {...props} />   
    ); 
};

export default Div;