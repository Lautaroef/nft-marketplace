import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Buy your NFT in the AXIES market" />
          <meta name="keywords" content="NFT, AXIES, market" />
          <meta name="author" content="Axies Market" />
          {/* <meta name="theme-color" content="#000000" /> */}
          {/* <link rel="icon" href="/static/assets/images/favicon.ico" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
