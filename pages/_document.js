import Document, { Head, Main, NextScript } from "next/document";
// css/styles.less -> ../assets/css/styles.less
// see .babelrc for more detail
import styles from "styles/index.less";
import { ServerStyleSheet } from "styled-components";

//   <style dangerouslySetInnerHTML={{ __html: styles }} />
// <link rel='stylesheet' href='https://unpkg.com/antd@3/dist/antd.min.css' />
export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet={process.env.CHARSET} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="shortcut icon"
            type="images/x-icon"
            href="/static/favicon.ico"
          />
          {this.props.styleTags}
          <style dangerouslySetInnerHTML={{ __html: styles }} />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
