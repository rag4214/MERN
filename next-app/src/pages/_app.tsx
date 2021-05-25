import "./globals.scss";

import { ApolloProvider } from "@apollo/client";
import { NextComponentType } from "next";
import { AppContext, AppInitialProps, AppProps } from "next/app";
import Head from "next/head";

import Footer from "components/Footer";
import Header from "components/Header";
import { useClient } from "lib/apollo";

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => (
  <>
    <Head>
      <title>Create Next App</title>
      <meta
        name="description"
        content="Website created using Create Next App"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
    <ApolloProvider client={useClient(pageProps.initialApolloState)}>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </ApolloProvider>
  </>
);

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps };
// };

export default MyApp;
