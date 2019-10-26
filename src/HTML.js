import React from 'react';
import Layout from './Layout';
import fs from 'fs';

const jsSource = fs.readFileSync('./index.js');
const cssSource = fs.readFileSync('./style.css');
const Head = () => (
  <head>
    <title>US Electoral College Map</title>
    <link rel="shortcut icon" href="favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <style type="text/css" dangerouslySetInnerHTML={{__html: cssSource}} />
  </head>
);

const HTML = () => (
  <html>
    <Head />

    <body>
      <Layout />

      <script type='text/javascript' dangerouslySetInnerHTML={{__html: jsSource}} />
    </body>
  </html>
);

export default HTML;
