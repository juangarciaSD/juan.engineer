const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withOffline = require('next-offline')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = {
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
    apiKey: "AIzaSyC5bjC8_lMCtfQrHhUudTh-TffGJWiLIuc",
    authDomain: "school-public-app.firebaseapp.com",
    databaseURL: "https://school-public-app.firebaseio.com",
    projectId: "school-public-app",
    storageBucket: "school-public-app.appspot.com",
    messagingSenderId: "673458185679",
    appId: "1:673458185679:web:13306a171aaa71bad01eba",
    measurementId: "G-JVEZQPNBTG",
    notificationKey: "BCbIHkaJuwqApqu2g7M_vy86CZzIPcj4yrQ9M180eM-ufTXuYxbNHws8IrFj0C2XnV2QfN_ew-iXoS4Synfjy2w",
    clientId: "673458185679-hs4bdnvq29lg2onvf4a5kd0ivhj10f6g.apps.googleusercontent.com",
    clientSecret: "0P0cerVp24vHOsAZSWblLRmz"
  }
}
withImages()
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