import Head from 'next/head'
import '../styles/globals.css'

export default function Aaryandehade({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Aaryan Dehade</title>

        <meta name="description" content="Aaryan Dehade" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
