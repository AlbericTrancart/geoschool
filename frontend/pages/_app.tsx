import React from "react";
import type { AppProps } from "next/app";
import { CssResets } from "components/CssResets.style";
import { IntlProvider } from "react-intl";
import { getLocale } from "services/intl/getLocale";

export default function App({ Component, pageProps }: AppProps) {
  const locale = getLocale();

  return (
    <IntlProvider locale={locale.code} messages={locale.messages}>
      <CssResets />
      <Component {...pageProps} />
    </IntlProvider>
  );
}
