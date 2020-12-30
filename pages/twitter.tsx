import React from "react";
import axios from "axios";

const twitter = () => {
    axios.get("/api/twitter").then(res => {
        console.log(res);
    })
    return(
        <>
        </>
    );
};

export default twitter;