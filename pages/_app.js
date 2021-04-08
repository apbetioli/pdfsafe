import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import "assets/css/global.css";
import theme from "assets/js/theme";
import Head from "next/head";
import React from "react";

export default function App({ Component, pageProps }) {
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

export const getInitialProps = async ({ Component, router, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};
