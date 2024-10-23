// pages/_app.js
import Head from 'next/head';
import { Roboto, Flex } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/assets/web/assets/mobirise-icons2/mobirise2_rnd1729249664608.css';
import '../public/assets/parallax/jarallax_rnd1729249664608.css';
import '../public/assets/socicon/css/styles_rnd1729249664608.css';
import '../public/assets/css/mbr-additional_rnd1729249664608.css';
import '../public/assets/dropdown/css/style_rnd1729249664608.css';
//import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Air Fryer Magic',
  description: 'Discover the ultimate air fryer hacks and delicious recipes that will transform your cooking experience'
}

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default Application
