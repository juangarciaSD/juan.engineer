import React from "react";
import styled from "styled-components";
import { DefaultProps, DEFAULT_STYLES } from "../public/Defaults";

import Div from "../components/Div";
import Spotify, { Playing } from "../components/spotify";
import Discord, { DiscordProps } from "../components/discord";
import Profile from "../components/profile_image";
import SocialLinks from "../components/SocialLinks";

import useLanyard from "use-lanyard";

const Index = (props: { playing: any }) => {
    const [playing, setPlaying] = React.useState<Playing>();
    const [active, setDiscord] = React.useState<DiscordProps>();
    
    //get data from lanyard
    const { data } = useLanyard("463539578012303360");

    React.useEffect(() => {
        if(data) {
            let file = data.activities[2].details.split(" ")[1].split(".")[1];
            let image = "";
            let color = "";
            switch(file) {
                case "js":
                    image = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
                    color = "#f7e018";
                    break;
                case "ts":
                    image = "https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png";
                    color = "#007acc";
                    break;
                case "tsx":
                    image = "https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png";
                    color = "#007acc";
                    break;
                case "json":
                    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoU78Hj6DPZq_rVh1dyNTc4Lwt_Z05Vr-SRA&usqp=CAU";
                    color = "#fbc02d"
                default:
                    break;
            }
            setPlaying({
                item_name: data.spotify.song,
                item_author: data.spotify.artist,
                item_id: data.spotify.track_id,
                item_image: data.spotify.album_art_url
            });
            setDiscord({
                item_name: data.activities[2].name,
                item_description: `${data.activities[2].state} • ${data.activities[2].details}`,
                item_image: image,
                item_color: color
            });
        }
    }, [data]);

    return(
        <>
        <Div>
            {playing && <Spotify float="right" position="absolute" margin={15} playing={playing} />}
            {active && <Discord position="absolute" margin={15} top="85px" active={active} />}
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