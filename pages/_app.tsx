import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../src/material-ui/createEmotionCache';
import { ThemeProvider } from '@mui/material/styles';
import theme from 'src/material-ui/theme'

const clientSideEmotionCache = createEmotionCache();

interface IMyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: IMyAppProps) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;

  return (
    <CacheProvider value={emotionCache}>
     <Head> 
       <title> Summit Connections | Martin Wilkins </title>
       <meta name="description" content="..."></meta>
       <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
       <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
       <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
       <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
       <link rel="manifest" href="/site.webmanifest"/>
       <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
     </Head>
     <ThemeProvider theme={theme}>
       <CssBaseline />
       <AnimatePresence> 
         <Component {...pageProps}/> 
       </AnimatePresence>
     </ThemeProvider>
   </CacheProvider>
 )
}

export default MyApp
