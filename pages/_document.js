import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import GlobalStyles from '../cssHelpers/GlobalStylesHelper';
import Animations from '../cssHelpers/Animations';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <link rel="apple-touch-icon" href="/static/icon.png" />
          <meta name="apple-mobile-web-app-title" content="Detective game!" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#333345" />

          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#333345"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" type="image/png" href="/static/favicon.png" />
          {this.props.styleTags}
          
        </Head>
        <body id="body">
          <GlobalStyles />
          <Main />
          <NextScript />
          <Animations />
        </body>
      </html>
    );
  }
}
