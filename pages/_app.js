import Head from "next/head";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
        name="description"
        content="LD BEETZ, the freshest beats on the market."
        />
        <title>LD BEETZ</title>
      </Head>
      
      <Component {...pageProps} />
    </>
  );
}

export default MyApp