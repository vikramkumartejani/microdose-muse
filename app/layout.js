"use client";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import './globals.css';
import Head from 'next/head';

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <html lang="en">
      <Head>
        <title>Microdose Muse</title>
        <meta name="description" content="Microdose Muse" />
      </Head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
