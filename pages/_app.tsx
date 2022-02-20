import { CssBaseline, ThemeProvider } from "@mui/material";
import Head from "next/head";
import React from "react";
import { AppProps } from 'next/app'
import "../assets/css/global.css";
import theme from "../assets/js/theme";

export default function App({ Component, pageProps }: AppProps) {
  const title = (pageProps.title ? pageProps.title + " | " : "") + "PDF Safe";

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content=""
        />
        <meta
          name="keywords"
          content=""
        />
        <meta name="robots" content="index,follow"></meta>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export const getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};
