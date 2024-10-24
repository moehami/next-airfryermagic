// pages/_app.js
//import Head from 'next/head';
import { Roboto_Flex } from 'next/font/google';
//import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css";

import '../public/assets/bootstrap/css/bootstrap-grid.min_rnd1729249664608.css';
import '../public/assets/bootstrap/css/bootstrap.min_rnd1729249664608.css';
import '../public/assets/bootstrap/css/bootstrap.reboot.min_rnd1729249664608.css';

import '../public/assets/web/assets/mobirise-icons2/mobirise2_rnd1729249664608.css';
import '../public/assets/parallax/jarallax_rnd1729249664608.css';
import '../public/assets/socicon/css/styles_rnd1729249664608.css';
import '../public/assets/css/mbr-additional_rnd1729249664608.css';
import '../public/assets/dropdown/css/style_rnd1729249664608.css';
import '../public/assets/theme/css/style_rnd1729249664608.css';
import '../public/assets/css/mbr-additional_rnd1729249664608.css';
import '../styles/globals.css'

const roboto = Roboto_Flex({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})


function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default Application
