/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import type { AppProps } from "next/app";
import Script from "next/script";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import toast from "../components/Toast";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    toast({ type: "info", message: "Hello world!", title: "Title" });
    toast({ type: "success", message: "Hello world!" });
    toast({ type: "warning", message: "Hello world!" });
    toast({ type: "error", message: "Hello world!" });
  }, []);

  return (
    <>
      <Script src='/theme.js' strategy='beforeInteractive' />
      <Component {...pageProps} />
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        closeOnClick
        pauseOnHover
      />
    </>
  );
}

export default MyApp;
