// import React from 'react'
// import { Helmet } from 'react-helmet'
// import NextDocument from 'next/document'
// import { ServerStyleSheet as StyledComponentSheets } from 'styled-components'
// export default class Document extends NextDocument {
//   static async getInitialProps (ctx) {
//     const styledComponentSheet = new StyledComponentSheets()
//     const originalRenderPage = ctx.renderPage
//     try {
//       ctx.renderPage = () =>
//         originalRenderPage()
//       const initialProps = await NextDocument.getInitialProps(ctx)
//       return {
//         ...initialProps,
//         styles: [
//           <React.Fragment key="styles">
//             {initialProps.styles}
//             {styledComponentSheet.getStyleElement()}
//           </React.Fragment>,
//         ],
//       }
//     } finally {
//       styledComponentSheet.seal()
//     }
//   }
// }

import Document from 'next/document'

class MyDoc extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        // useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }
}

export default MyDoc