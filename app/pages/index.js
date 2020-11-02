import React from 'react';
import ElectoralMap from '../lib/ElectoralMap';
import Head from 'next/head'
import initialData from '../lib/initialData'

export default function Home({ initialData }) {
  return <>
    <Head>
      <title>US Electoral College Map</title>
      <link rel="shortcut icon" href="favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    </Head>

    <ElectoralMap initialData={initialData} />
  </>
}

export const getStaticProps = () => {
  return { props: { initialData } }
}
