import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="author" content="Saeed Altout" />
        <link rel="author" href="https://portfolio-creative.vercel.app" />
        <meta name="generator" content="Saeed Altout" />
        <meta name="creator" content="Saeed Altout" />
        <meta name="publisher" content="Saeed Altout" />
        <meta name="me" content="saeedaltoutpro@gmail.com" />
        <meta name="me" content="https://portfolio-creative.vercel.app" />

        <meta name="keywords" content="phone,website,nextjs,reactjs" />

        <meta name="category" content="technology" />

        <meta name="color-scheme" content="light" />
        <meta name="theme-color" content="white" />

        <link rel="icon" href="favicon.ico" />

        <meta property="description" content="Karios website 2023" />

        <meta property="og:title" content="Karios" />
        <meta name="application-name" content="Karios" />
        <title>Karios</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
