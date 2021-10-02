import './app.css'
import {Provider} from 'react-redux'
import {store} from '../store'
import React from "react";
import Layout from "../features/layout/Layout";
import Head from "next/head";
import Router from "next/router";
import Loading from "../features/loading/Loading";
import {CacheProvider, ThemeProvider} from "@emotion/react";
import createEmotionCache from '../../lib/createEmotionCache';
import Amplify from 'aws-amplify'
import config from '../aws-exports'
import theme from "../theme";
import {CssBaseline} from "@mui/material";
Amplify.configure({
    ...config,
    ssr: true
})

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    const [loading, setLoading] = React.useState(false);
    React.useEffect(() => {
        const start = () => setLoading(true);

        const end = () => setLoading(false);

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
                    <Loading isLoading={loading}/>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ThemeProvider>
            </Provider>
        </CacheProvider>
    )
}

export default MyApp
