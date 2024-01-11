import { useEffect } from 'react'
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import '@mantine/core/styles.css'
import { createTheme, MantineProvider } from '@mantine/core'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const theme = createTheme({
    
})

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <MantineProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </MantineProvider>
  )
}
