import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDoc extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return(
      <Html>
        <Head>
          <link rel="shortcut icon" type="image/jpg" href="../assets/profile.jpg" />
          <link rel="shortcut icon" type="image/jpg" href="../assets/background.jpg" />
          <link rel="preload" href="../assets/icons/twitter.svg" as="image" type="image/svg+xml"/>
          <link rel="preload" href="../assets/icons/github.svg" as="image" type="image/svg+xml"/>
          <link rel="preload" href="../assets/icons/linkedin.svg" as="image" type="image/svg+xml"/>
          <link rel="preload" href="../assets/icons/notify.svg" as="image" type="image/svg+xml"/>
          <meta property="og:title" content="Juan Garcia - Full-Stack Developer" />
          <meta property="og:description" content="Full-Stack Developer" />
          <meta property="og:image" content="../assets/profile.jpg" />
          <meta property="og:url" content="https://juan.engineer" />
          <meta property="og:type" content="summary" />

          <meta property="twitter:title" content="Juan Garcia - juan.engineer" />
          <meta property="twitter:description" content="Full-Stack Developer" />
          <meta property="twitter:image" content="../assets/profile.jpg" />
          <meta property="twitter:card" content="summary" />
          <meta property="twitter:site" content="https://juan.engineer" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDoc