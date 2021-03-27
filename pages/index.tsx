import React from "react";
import styled from "styled-components";
import { DefaultProps, DEFAULT_STYLES } from "../public/Defaults";

import Div from "../components/Div";
import Spotify, { Playing } from "../components/spotify";
import Discord, { DiscordProps } from "../components/discord";
import Profile from "../components/profile_image";
import SocialLinks from "../components/SocialLinks";

const Index = (props: { playing: any }) => {
    const [active, setDiscord] = React.useState<DiscordProps>();

    return(
        <>
        <Div>
            {/* {active && <Discord position="absolute" margin={15} top="85px" active={active} />} */}
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
                        <Text>
                            I’m a 17 year old front-end software engineer.
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