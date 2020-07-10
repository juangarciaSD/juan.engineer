import { App } from './pulse'
import { Spotify } from './spotify.interface'

export const api = App.API({
    baseURL: "https://accounts.spotify.com",
    options: {

    }
})

export const SpotifyToken = async (params: Spotify) => {
    try {
        const response = api.post(`api/token?grant_type=authorization_code&code=${params.code}&redirect_uri=${encodeURIComponent(process.env.redirectUri)}&client_id=${process.env.spotifyClientId}&client_secret=${process.env.spotifyClientSecret}`)
        return response
    } catch(err) {
        console.log(err)
    }
}

export default {
    api: api,
    SpotifyToken: SpotifyToken
}