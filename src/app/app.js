// pages/_app.js
'use client'
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, [router.events]);

    return (
        <>
            <Head>
                <link rel="icon" href="./favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
