import Head from 'next/head'
import '../styles/globals.css'
import Layout from '../components/layout'

export default function Aaryandehade({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Aaryan Dehade</title>

        <meta name="description" content="Aaryan Dehade" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
