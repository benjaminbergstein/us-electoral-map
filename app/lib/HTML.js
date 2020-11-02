import React from 'react';
import Head from 'next/head'
import Layout from './Layout';

const HTML = () => (
  <>
    <Head>
      <title>US Electoral College Map</title>
      <link rel="shortcut icon" href="favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    </Head>

    <Layout />
  </>
);

export default HTML;
