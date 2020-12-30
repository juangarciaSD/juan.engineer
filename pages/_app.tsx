import React from "react";
import axios from "axios";

function Portfolio({ Component, pageProps }) {
  axios({
    baseURL: "https://api.juan.engineer"
  })
  return <Component {...pageProps} />
}

export default Portfolio;