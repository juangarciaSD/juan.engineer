import React from "react";
import styled from "styled-components";
import fetch from "node-fetch";

import Div from "../components/Div";
import Spotify from "../components/spotify";

export interface Playing {
    item_name: string;
    item_author: string;
    item_id: string;
    item_image: string;
    id?: number;
  }

const Playback = () => {
    const [value, setValue] = React.useState<string>("");
    const [songs, setSongs] = React.useState<Playing[]>([]);
    const [artist, setArtist] = React.useState<string>();

    async function handleSearch() {
        const res = await fetch(`https://api.juan.engineer/api/spotify/search?q=${encodeURIComponent(value)}`);
        const data = await res.json();
        data.data.map((elem, idx) => {
            let item = {
                item_name: elem.name,
                item_author: elem.album.artists.map((elem, idx) => {
                    return `${elem.name}, `
                }),
                item_id: elem.uri,
                item_image: elem.album.images[2].url
            }
            setSongs(prev => [...prev, item]);
        });
    };

    function handleKey(e) {
        if(e.keyCode === 13) handleSearch();
    }

    async function handlePlay(item: Playing) {

    };

    return(
        <>
        <Div
            height="6rem"
            maxHeight="6rem">
        </Div>
        <Div
            display="flex"
            flexDirection="column"
            marginBottom="6rem">
            <Div
                display="flex"
                alignItems="center"
                justifyContent="center"
                overflowY="auto"
                marginBottom="20px">
                    <Input value={value} onChange={e => setValue(e.target.value)} onKeyDown={handleKey} placeholder="Search..." type="text" />
                    <Button onClick={handleSearch}>Search</Button>
            </Div>
            <Div
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                overflowY="auto">
                    {songs && songs.map((elem, idx) => (
                        <MusicItem>
                            <MusicImage src={elem.item_image} />
                            <MusicDetails>
                                <MusicTitle>{elem.item_name}</MusicTitle>
                                <MusicArtist>{elem.item_author}</MusicArtist>
                            </MusicDetails>
                            <Spacer />
                            <Button onClick={() => handlePlay(elem)}>Play</Button>
                        </MusicItem>
                    ))}
            </Div>
        </Div>
        </>
    );
};

const Input = styled.input`
    font-size: 14px;
    border: 2px solid #e1e7f5;
    border-radius: 5px;
    padding: 5px;
    padding-left: 8px;
    margin-right: 5px;

    transition: 200ms ease-in-out all;

    outline: none;

    &:focus {
        border-color: var(--border);
    }
`;

const Button = styled.button`
    font-size: 18px;
    border: 0;    
    border-radius: 5px;
    padding: 4px 10px;
    color: #fff;
    height: 30px;
    background-color: #3854FC;
    cursor: pointer;
    transition: 200ms ease-in-out all;

    &:hover {
        opacity: 0.7;
    }
`;

const Spacer = styled.div`
    flex-grow: 1;
`;

const MusicItem = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 8px;
    width: 50%;
    color: var(--text);
`;

const MusicDetails = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 8px;
`;

const MusicImage = styled.img`
    border-radius: 10px;
    width: 64px;
    height: 64px;
`;

const MusicTitle = styled.h1`
    font-size: 18px;
    margin: 0;
`;

const MusicArtist = styled.span`
    font-size: 12px;
`;

export default Playback;