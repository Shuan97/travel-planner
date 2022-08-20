/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import type { AppProps } from "next/app";
import Script from "next/script";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src='/theme.js' strategy='beforeInteractive' />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
