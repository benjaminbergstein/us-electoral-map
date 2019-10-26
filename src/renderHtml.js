import ReactDOMServer from 'react-dom/server';
import HTML from './HTML';
import fs from 'fs';
import React from 'react';

const renderedHTML = (<HTML />);

const renderToStaticMarkup = () => ReactDOMServer.renderToStaticMarkup(renderedHTML);

const writeToFile = () => fs.writeFile('index.html', renderToStaticMarkup(), _ => _);

if (!module.parent) writeToFile();

export { renderToStaticMarkup, writeToFile }
