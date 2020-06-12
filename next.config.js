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
      '/upload': { page: '/upload' },
      '/view': { page: '/view/[id]'}
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
    apiKey: "AIzaSyBXUC_xgFkUrE6rupZbtA7Q8iAseYV-EHM",
    authDomain: "tech-me-main.firebaseapp.com",
    databaseURL: "https://tech-me-main.firebaseio.com",
    projectId: "tech-me-main",
    storageBucket: "gs://tech-me-main.appspot.com",
    messagingSenderId: "265745515598",
    appId: "1:265745515598:web:a594aa7f20c5b0be3cef1f",
    measurementId: "G-FTMP58FLFV",
    notificationKey: "BCbIHkaJuwqApqu2g7M_vy86CZzIPcj4yrQ9M180eM-ufTXuYxbNHws8IrFj0C2XnV2QfN_ew-iXoS4Synfjy2w",
    clientId: "673458185679-hs4bdnvq29lg2onvf4a5kd0ivhj10f6g.apps.googleusercontent.com",
    clientSecret: "0P0cerVp24vHOsAZSWblLRmz"
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