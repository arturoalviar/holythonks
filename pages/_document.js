import Document, { Html, Head, Main, NextScript } from 'next/document'
import { SITE_NAME } from '../utils/constants'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" key="charset" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="format-detection"
            content="telephone=no"
            key="format-detection"
          />
          <meta
            name="mobile-web-app-capable"
            content="yes"
            key="mobile-web-app-capable"
          />
          <meta name="full-screen" content="yes" key="full-screen" />
          <meta name="browsermode" content="application" key="browsermode" />

          <meta
            name="msapplication-TileColor"
            content="#ffffff"
            key="msapplication-TileColor"
          />
          <meta
            name="msapplication-TileImage"
            content="/icons/icon-144x144.png"
            key="msapplication-TileImage"
          />
          <meta
            name="msapplication-config"
            content="/icons/browserconfig.xml"
            key="msapplication-config"
          />

          <meta
            name="application-name"
            content={SITE_NAME}
            key="application-name"
          />
          <meta
            name="apple-mobile-web-app-capable"
            content="yes"
            key="apple-mobile-web-app-capable"
          />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
            key="apple-mobile-web-app-status-bar-style "
          />
          <meta
            name="apple-mobile-web-app-title"
            content={SITE_NAME}
            key="apple-mobile-web-app-title"
          />
          <link
            rel="apple-touch-icon"
            sizes="48x48"
            href="/icons/icon-48x48.png"
            key="apple-icon48"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/icons/icon-72x72.png"
            key="apple-icon72"
          />
          <link
            rel="apple-touch-icon"
            sizes="96x96"
            href="/icons/icon-96x96.png"
            key="apple-icon96"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/icons/icon-144x144.png"
            key="apple-icon144"
          />
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="/icons/icon-192x192.png"
            key="apple-icon192"
          />
          <link
            rel="apple-touch-icon"
            sizes="256x256"
            href="/icons/icon-256x256.png"
            key="apple-icon256"
          />
          <link
            rel="apple-touch-icon"
            sizes="384x384"
            href="/icons/icon-384x384.png"
            key="apple-icon384"
          />
          <link
            rel="apple-touch-icon"
            sizes="512x512"
            href="/icons/icon-512x512.png"
            key="apple-icon512"
          />

          <link
            href="icons/icon-32x32.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
            key="icon32"
          />
          <link
            href="icons/icon-48x48.png"
            rel="icon"
            type="image/png"
            sizes="48x48"
            key="icon48"
          />
          <link
            href="icons/icon-128x128.png"
            rel="icon"
            type="image/png"
            sizes="128x128"
            key="icon128"
          />
          <link
            href="icons/icon-256x256.png"
            rel="icon"
            type="image/png"
            sizes="256x256"
            key="icon256"
          />
          <link
            href="icons/icon-512x512.png"
            rel="icon"
            type="image/png"
            sizes="512x512"
            key="icon512"
          />
          <link rel="manifest" href="/manifest.json" key="manifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
