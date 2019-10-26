import React from 'react';
import Layout from './Layout';

const Head = () => (
  <head>
    <title>US Electoral College Map</title>
    <link rel="shortcut icon" href="favicon.ico" />
    <link type='text/css' rel='stylesheet' href='style.css' />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  </head>
);

const HTML = () => (
  <html>
    <Head />

    <body>
      <Layout />

      <script type='text/javascript' src='index.js' />
    </body>
  </html>
);

export default HTML;
