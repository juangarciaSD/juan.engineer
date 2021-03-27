import React from "react";
import { useRouter } from "next/router";
import { createGlobalStyle } from "styled-components";
import useLanyard from "use-lanyard";

import AppContext, { AppProvider } from "../utils/AppContext";

import FontStyle from "../components/fonts";
import { SetTheme } from "../utils/theme";

import Navigation from '../components/navigation';
import Footer from "../components/footer";
import Spotify, { Playing } from "../components/spotify";

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
  const context = React.useContext(AppContext);

  React.useEffect(() => {
    if (localStorage.getItem("theme-name"))
      SetTheme(localStorage.getItem("theme-name") as "light" | "dark");
  }, []);

  const router = useRouter();

  const [playing, setPlaying] = React.useState<Playing>();
  const [lanyardData, setLanyardData] = React.useState(null);

  //get data from lanyard
  const { data, revalidate } = useLanyard("463539578012303360");

  React.useEffect(() => {
    setLanyardData(data);
    if(data?.listening_to_spotify) {
        setPlaying({
            item_name: data.spotify?.song,
            item_author: data.spotify?.artist,
            //@ts-ignore
            item_id: data.spotify?.track_id,
            item_image: data.spotify?.album_art_url
        });
    } else {
        return () => {
            setPlaying(null);
        }
    };
  }, [data, lanyardData]);


  return (
    <>
    <FontStyle />
    <GlobalStyle />
    <AppProvider value={{
      data: lanyardData,
      revalidate: async() => {
        revalidate();
        setLanyardData(context)
      }
    }} >
      <Navigation />
      {playing && router.pathname != "/playback" ? <Spotify float="right" position="absolute" margin={15} playing={playing} /> : null}
      <Component {...pageProps} />
    </AppProvider>
    <Footer />
    </>
  )
}

export default Portfolio;