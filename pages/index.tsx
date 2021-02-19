import React from "react";

import Spotify from "../components/spotify";

import { ToggleTheme } from "../utils/theme";

const Index = (props: { playing: any }) => {
    console.log(props.playing);
    return(
        <>
        {props.playing.is_playing && <Spotify playing={props.playing} />}
        </>
    );
};

export async function getStaticProps() {
    const res = await fetch("https://go.juan.engineer/api/spotify");
    const data = await res.json();

    return {
        props: {
            playing: data
        }
    }
};

export default Index;