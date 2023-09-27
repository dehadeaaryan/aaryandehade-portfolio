import Head from 'next/head'
import '../styles/globals.css'

export default function Aaryandehade({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Aaryan Dehade</title>

        <meta name="description" content="Aaryan Dehade" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Pixelify+Sans" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
