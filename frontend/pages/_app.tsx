import React from "react";
import type { AppProps } from "next/app";
import { CssResets } from "../components/CssResets.style";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssResets />
      <Component {...pageProps} />
    </>
  );
}
