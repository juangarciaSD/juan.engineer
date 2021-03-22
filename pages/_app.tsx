import React from "react";
import { createGlobalStyle } from "styled-components";

import FontStyle from "../components/fonts";
import { SetTheme } from "../utils/theme";

import Footer from "../components/footer";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: var(--background)
  }  
  html,
  body {
    padding: 0;
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
  html, body::-webkit-scrollbar {
    -webkit-appearance: none;
    background: #000;
    border-radius: 15px;
    width: 0px;
  }
  html, body::-webkit-scrollbar-thumb {
      transition: 200ms ease-in-out;
      background-color: transparent;
      border-radius: 15px;
  }  
  :root {
    --text: #000000;
    --highlight-color: #127796;
    --widget-background: #ffffff;
    --background: #ffffff;
    --border: #3854FC;
  }
  .__react_component_tooltip {
    box-shadow: 2px 2px 10px 0px #00000026;
  }
`;

function Portfolio({ Component, pageProps }) {
  React.useEffect(() => {
    if (localStorage.getItem("theme-name"))
      SetTheme(localStorage.getItem("theme-name") as "light" | "dark");
  }, []);
  return (
    <>
    <FontStyle />
    <GlobalStyle />
    <Component {...pageProps} />
    <Footer />
    </>
  )
}

export default Portfolio;