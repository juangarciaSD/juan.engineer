//@ts-nocheck
import { App } from './pulse'
import { Spotify } from './spotify.interface'

//state
export const ACCESS_TOKEN = App.State().type(String)

export const api = App.API({
    baseURL: "https://accounts.spotify.com",
    options: {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${ACCESS_TOKEN}`
        }
    }
})

if (ACCESS_TOKEN.value === "") {
    delete api.config.options.headers.authorization;
  } else if (
    typeof api.config.options.headers.authorization === "undefined" &&
    ACCESS_TOKEN.value != ""
  ) {
    api.config.options.headers.authorization = `Bearer ${ACCESS_TOKEN.value}`;
  }

//api route
export const SpotifyToken = async (params: Spotify) => {
    try {
        const response = api.post(`api/token?grant_type=authorization_code&code=${params.code}&redirect_uri=${encodeURIComponent(process.env.redirectUri)}&client_id=${process.env.spotifyClientId}&client_secret=${process.env.spotifyClientSecret}`)
        return response
    } catch(err) {
        console.log(err)
    }
}

export const SpotifyData = async() => {
    try {
        const response = api.post('v1/me?grant_type=refresh_token')
        return repsonse
    } catch(err) {
        console.log(err)
    }
}


export default {
    api: api,
    SpotifyToken: SpotifyToken,
    SpotifyData: SpotifyData,
    state: {
        ACCESS_TOKEN
    }
}