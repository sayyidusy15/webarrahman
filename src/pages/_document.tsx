import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="/assets/vendor/swiper/swiper-bundle.min.css"/>
        <link rel="stylesheet" href="/assets/vendor/font-awesome/all.min.css"/>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
