import Document, { Head, Html, Main, NextScript } from "next/document";

import { ReactElement } from "react";

export default class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang={"en"}>
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="Content-Language" content={"en"} />
          <meta name="keywords" content="Twindove, Agriculture, Agribusiness" />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="revisit-after" content="1 days" />
          <meta name="author" content="Adam Illiyasu Kwarbai" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Rubik:wght@500;700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
