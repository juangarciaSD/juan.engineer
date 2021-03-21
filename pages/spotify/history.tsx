import React from "react";

import Div from "../../components/Div";
import Navigation from "../../components/navigation";
import Spotify from "../../components/spotify";

const History = (props: { data, playing }) => {
    console.log("data", props.data);
    return(
        <>
        <Div
            height="6rem"
            maxHeight="6rem">
            <Navigation position="fixed"/>
            {props.playing.is_playing && <Spotify float="right" position="fixed" margin={15} playing={props.playing} />}
        </Div>
        <Div
            display="flex"
            flexDirection="column"
            marginBottom="6rem">
            <Div
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                overflowY="auto">
                    {props.data.map((elem, idx) => {
                        return <Spotify playing={elem} position="initial" margin={8} float="left" />
                    })}
            </Div>
        </Div>
        </>
    );
};

export async function getServerSideProps() {
    const res = await fetch("https://dev-api.juan.engineer/api/spotify/history");
    const res_playing = await fetch("https://dev-api.juan.engineer/api/spotify");
    const data = await res.json();
    const playing = await res_playing.json();

    return {
        props: {
            data,
            playing
        }
    }
};

export default History;