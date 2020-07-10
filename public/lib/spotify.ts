import dotenv from "dotenv";
import SpotifyWebApi from "spotify-web-api-js";
dotenv.config();

const spotify = new SpotifyWebApi();

const client_id = process.env.spotifyClientId;
const client_secret = process.env.spotifyClientSecret;
const redirect_uri = process.env.redirectUri;

const scopes = "user-read-playback-state user-read-current-playing";

export const Spotify = {
  SpotifyAuth: () => {
    window.location.href = `https://accounts.spotify.com/authorize?response_type=code&client_id=${client_id}&scopes=${encodeURIComponent(
      scopes
    )}&redirect_uri=${encodeURIComponent(redirect_uri)}`;
  },
  SpotifyToken: () => {
      
  }
};
