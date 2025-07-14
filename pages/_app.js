// pages/_app.js

import '../styles/globals.css';
import Head from 'next/head';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head><meta name="viewport" content="width=device-width, initial-scale=1.0" /></Head><Component {...pageProps} /></>
  );
}
