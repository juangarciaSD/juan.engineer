import React from "react";
import styled from "styled-components";
import * as fetch from "node-fetch";
import axios from "axios";
import AppContext from "../utils/AppContext";

import Div from "../components/Div";
import Loading from "../components/loader";
import Spotify from "../components/spotify";

export interface Playing {
    item_name: string;
    item_author: string;
    item_id: string;
    item_image: string;
    item_url: string;
    id?: number;
  }

  interface DevicesRes {
    id: string;
    is_active: boolean;
    is_private_session: boolean;
    is_restricted: boolean;
    name: string;
    type: string;
    volume_percent: number;
  }

const Playback = (props: { devices, playing }) => {
    const context = React.useContext(AppContext);

    const [loading, isLoading] = React.useState<boolean>(false);
    const [display, isDisplay] = React.useState<boolean>(false);
    const [value, setValue] = React.useState<string>("");
    const [songs, setSongs] = React.useState<Playing[]>([]);
    const [isSearch, setSearch] = React.useState<boolean>(false);
    const [devices, setDevices] = React.useState<DevicesRes[]>([]);
    
    const [playing, setPlaying] = React.useState(props.playing);

    //selected items
    const [selectedDevice, setSelectedDevice] = React.useState<DevicesRes>(devices?.[0]);
    const [selectedSong, setSelectedSong] = React.useState<Playing>();

    React.useEffect(() => {
        props.devices.map((elem, idx) => {
            if(!devices.includes(elem)) setDevices(prev => [...prev, elem]);
        });
    }, [props.devices]);

    async function handleSearch() {
        context.revalidate();
        if(value != "") {
            isLoading(true);
            setSongs([]);
            const res = await fetch(`https://api.juan.engineer/api/spotify/search?q=${encodeURIComponent(value)}`);
            const data = await res.json();
            data.data.map((elem, idx) => {
                let item = {
                    item_name: elem.name,
                    item_author: elem.album.artists.map((elem, idx) => {
                        return `${elem.name}, `
                    }),
                    item_id: elem.uri,
                    item_image: elem.album.images[2].url,
                    item_url: elem.external_urls.spotify
                }
                setSongs(prev => [...prev, item]);
            });
            setSearch(true);
            isLoading(false);
        }
    };

    function handleKey(e) {
        if(e.keyCode === 13) handleSearch();
    }

    async function handleSpotifyStatus() {
        const res = await fetch("https://go.juan.engineer/api/spotify");
        const data = await res.json();
        setPlaying(data);
        return data;
    }

    async function handlePlay(item: Playing) {
        setSelectedSong(item);
        const res = await axios({
            method: "POST",
            url: `https://api.juan.engineer/api/spotify/play?device_id=${selectedDevice.id}`,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            data: {
                uris: [item.item_id]
            }
        });
        if(res) handleSpotifyStatus();
        setSelectedSong(null);
    };

    return(
        <>
        <Div
            height="6rem"
            maxHeight="6rem">
                {playing ? <Spotify float="right" position="absolute" margin={15} playing={playing} /> : null}
        </Div>
        <Div
            display="flex"
            flexDirection="column"
            marginBottom="6rem">
            <Div
                display="flex"
                alignItems="center"
                justifyContent="center"
                overflowY="hidden"
                marginBottom="10px">
                    <Input value={value} onChange={e => setValue(e.target.value)} onKeyDown={handleKey} placeholder="Search..." type="text" />
                    {loading ? <Loading loading={true} /> : <Button onClick={handleSearch}>Search</Button>}
            </Div>
            <DropdownContainer onClick={() => isDisplay(!display)}>
                <p style={{ padding: "5px 10px", margin: "5px" }}>{selectedDevice ? selectedDevice.name : "Select Device"}</p>
                <DropdownContent display={display}>
                    {devices.map((elem, idx) => (
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <p style={{ padding: "5px 10px", margin: 0 }} onClick={() => setSelectedDevice(elem)} >{elem.name}</p>
                            <Spacer />
                            <DeviceStatus active={elem.is_active} />
                        </div>
                    ))}
                </DropdownContent>
            </DropdownContainer>
            <Div
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                overflowY="auto"
                color="var(--text)">
                    {songs.length != 0 ? songs.map((elem, idx) => (
                        <MusicItem>
                            <a href={elem.item_url} target="_blank">
                                <MusicImage src={elem.item_image} />
                            </a>
                            <MusicDetails>
                                <MusicTitle>{elem.item_name}</MusicTitle>
                                <MusicArtist>{elem.item_author}</MusicArtist>
                            </MusicDetails>
                            <Spacer />
                            {elem.item_id === selectedSong?.item_id ? <Loading loading={true} /> : <Button onClick={() => handlePlay(elem)}>Play</Button>}
                        </MusicItem>
                    )) : isSearch ? <span>No songs found</span> : <span>Search a song...</span>}
            </Div>
        </Div>
        </>
    );
};

const DropdownContainer = styled.div`
    display: inline-block;
    position: relative;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin: auto;
    background-color: #f0f0f0;
    cursor: pointer;
    user-select: none;
    margin-bottom: 10px;
`;

const DropdownContent = styled.div<{ display: boolean }>`
    display: ${props => props.display ? "block" : "none"};
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1;
    width: 225px;
    cursor: pointer;
`;

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

const DeviceStatus = styled.div<{ active: boolean }>`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: auto;
    background-color: ${props => props.active ? `#006400` : `#e0dcdc`};
    ${props => props.active ? `animation: flash 2s linear infinite;` : null}

    @keyframes flash {
        50% {
            opacity: 0.5;
        }
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

export async function getServerSideProps() {
    const spotifyRes = await fetch("https://go.juan.engineer/api/spotify");
    const res = await fetch("https://go.juan.engineer/api/spotify?type=getDevices");
    const spotifyData = await spotifyRes.json();
    const data = await res.json();

    return {
        props: {
            devices: data,
            playing: spotifyData
        }
    }
};

export default Playback;