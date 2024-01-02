import { useEffect } from 'react'
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
    </>
  )
}
