import './app.css'
import {Provider} from 'react-redux'
import {store} from '../store'

import React from "react";
import Head from "next/head";
import Router from "next/router";

import {CacheProvider, ThemeProvider} from "@emotion/react";
import createEmotionCache from '../../lib/createEmotionCache';
import theme from "../theme";
import {CssBaseline} from "@mui/material";
const clientSideEmotionCache = createEmotionCache();

import Amplify from 'aws-amplify'
import config from '../aws-exports'
Amplify.configure({...config, ssr: true})

import Layout from "../features/layout/Layout";


const MyApp = (props) => {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
        const start = () => setIsLoading(true);
        const end = () => setIsLoading(false);
        Router.events.on("routeChangeStart", start);
        Router.events.on("routeChangeComplete", end);
        Router.events.on("routeChangeError", end);
        return () => {
            Router.events.off("routeChangeStart", start);
            Router.events.off("routeChangeComplete", end);
            Router.events.off("routeChangeError", end);
        };
    }, []);

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>GiftRibbit</title>
            </Head>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <Layout isLoading={isLoading}>
                        <Component {...pageProps} />
                    </Layout>
                </ThemeProvider>
            </Provider>
        </CacheProvider>
    )
}

export default MyApp
