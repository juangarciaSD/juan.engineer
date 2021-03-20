import React from "react";
import styled from "styled-components";
import { DefaultProps, DEFAULT_STYLES } from "../public/Defaults";

import Div from "../components/Div";
import Spotify, { Playing } from "../components/spotify";
import Profile from "../components/profile_image";
import Navigation from '../components/navigation';
import SocialLinks from "../components/SocialLinks";

import useLanyard from "use-lanyard";
/*
    item_name: string;
    item_author: string;
    item_id: string;
    item_image: string;
    id?: number;
*/
const Index = (props: { playing: any }) => {
    const [playing, setPlaying] = React.useState<Playing>();
    
    const { data } = useLanyard("463539578012303360");
    let spotify = data?.spotify;
    
    React.useEffect(() => {
        setPlaying({
            item_name: spotify.song,
            item_author: spotify.artist,
            item_id: spotify.track_id,
            item_image: spotify.album_art_url
        })
    }, [data]);

    return(
        <>
        <Div>
            <Navigation />
            {props.playing.is_playing && <Spotify float="right" position="absolute" margin={15} playing={playing} />}
        </Div>
        <CenterContainer>
                <Div
                    display="flex"
                    flexDirection="column"
                    padding="50px"
                    margin="50px"
                    textAlign="center">
                        <Div>
                        <Profile size="150px" />
                        <Text
                            fontFamily="FiraCode-Bold"
                            fontWeight="bold"
                            fontSize="35px">
                            Juan Garcia
                        </Text>
                        <SocialLinks size={100} />
                        </Div>
                </Div>
        </CenterContainer>
        </>
    );
};

const CenterContainer = styled(Div)`
    min-height: 100vh;
    padding: 0px 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width : 640px) {
        min-height: initial;
    }
`;

const Text = styled.div<DefaultProps>`
    color: var(--text);
    font-size: 1.3em;
    font-family: 'FiraCode-Medium';
    ${DEFAULT_STYLES}

    @media only screen and (max-width : 640px) {
        font-size: 28px;
    }
`;

export async function getServerSideProps() {
    const res = await fetch("https://go.juan.engineer/api/spotify");
    const data = await res.json();

    return {
        props: {
            playing: data
        }
    }
};

export default Index;