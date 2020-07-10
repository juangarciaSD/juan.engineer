require('dotenv').config()
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withOffline = require('next-offline')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = {
  mode: "production",
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/upload': { page: '/upload' }
    }
  },
  webpack: (config) => {
    config.module.rules.push(
      {test: /\.(png|jpeg)$/, loader: 'url-loader?limit=8192'}
    )
    config.node = {
      fs: 'empty'
    }
    return config
  },
  env: {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID,
    notificationKey: process.env.NOTIFICATION_KEY,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    spotifyClientId: process.env.SPOTIFY_CLIENT_ID,
    spotifyClientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    redirectUri: process.env.SPOTIFY_REDIRECT_URI
  }
}
withImages({})
withBundleAnalyzer()
withOffline({ dontAutoRegisterSw: true })
withCSS({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIndentName: "[local]___[hash:base64:5]"
    },
    postcssLoaderOptions: {
        parser: true,
        config: {
          ctx: {
            theme: JSON.stringify(process.env.REACT_APP_THEME)
          }
        }
    }
})