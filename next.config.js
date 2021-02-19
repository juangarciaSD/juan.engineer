const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withFonts = require('next-fonts');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withFonts({
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }

    return config;
  },
}),
{
  webpack: (config) => {
    config.module.rules.push(
      {test: /\.(png|jpeg)$/, loader: 'url-loader?limit=8192'}
    )
    return config
  },
}
withImages({})
withBundleAnalyzer()
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