"use client";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import './globals.css';
import Head from 'next/head';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <html lang="en">
      <head>
        <Head>
          <title>Microdose Muse</title>
          <meta name="description" content="Microdose Muse" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
