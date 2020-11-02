import dynamic from 'next/dynamic'
import React, { useContext, useState, useEffect }  from 'react';
import fetch from 'isomorphic-unfetch'
import Box from './Box';
import Select from './Select';
import { FaUndoAlt } from 'react-icons/fa'

import States from './States'
import Totals from './Totals'
import DataContext, { DataProvider } from './DataContext'

const Map = dynamic(
  () => import('./Map'),
  { ssr: false }
)

const Options = [
  "2008 Presidential Election",
  "2012 Presidential Election",
  "2016 Presidential Election",
  "2020 Presidential Election",
  "2020 Presidential Election - Predictions",
]

const Button = ({ onClick, style = {}, children }) => <button
  onClick={() => onClick()}
  style={{ marginLeft: '10px', border: '0px solid transparent', background: 'transparent', cursor: 'pointer', ...style }}>
  {children}
</button>

const Title = () => {
  const { title, resetUserSelections, changeData, windowSize } = useContext(DataContext)
  const width = windowSize[0]
  const flexBasis = width && width < 500 ? `${width}px` : "33%"

  return <Box style={{ textAlign: 'center' }} display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-between" alignItems="center">
    <Box flexGrow="1" flexShrink="1" flexBasis={flexBasis} style={{ margin: '3vh 0' }}>
      <h1 style={{
        lineHeight: '1.25',
        padding: '0 10px',
        fontSize: '1rem',
        margin: '0',
        color: 'lightslategray',
        whiteSpace: 'nowrap',
      }}>
        U.S Electoral College Map
      </h1>
    </Box>
    <Box flexGrow="1" flexShrink="1" flexBasis={flexBasis} style={{ margin: '3vh 0' }}>
      <h2 style={{ fontSize: '0.75rem', color: 'darkslategray', margin: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Select
            value={title}
            options={Options}
            maxWidth={width ? width - 100 : undefined}
            onChange={changeData}
          />

          <Button
            onClick={() => resetUserSelections()}
            style={{ marginLeft: '10px' }}
          >
            <FaUndoAlt />
          </Button>
        </div>
      </h2>
    </Box>
    <Box flexGrow="1" flexShrink="1" flexBasis={flexBasis} style={{ margin: '3vh 0' }} display="flex">
      <Totals />
    </Box>
  </Box>
};

const FooterItem = ({ children }) => (
  <Box flex="0 1 0" style={{ padding: '5px 0', marginLeft: '15px', whiteSpace: 'nowrap' }}>
    {children}
  </Box>
);

const Copyright = () => (
  <>
    <Box display="flex">
      <FooterItem>
        <a href='https://github.com/benjaminbergstein/us-electoral-map' target="_BLANK">
          <img src="docs/github.png" height="14px" width="14px" alt="Source on Github" title="Source on Github" />
        </a>
      </FooterItem>
      <FooterItem>
        <a href='https://goo.gl/forms/THky9dqIPI9AezJb2' target="_BLANK" style={{ textDecoration: 'none' }}>
          Feedback
        </a>
      </FooterItem>
      <FooterItem>
        <copyright>
          &copy; 2017-2019 Ben Bergstein
        </copyright>
      </FooterItem>
    </Box>
  </>
);

const Section = ({ height, flex, children, ...props }) => (
  <Box>
    {children}
  </Box>
)

const Wrapper = ({ children }) => (
  <Box display="flex" flexDirection="column" height="100%">
    {children}
  </Box>
);

const InfoBar = () => (
  <Box>
    <Title />
  </Box>
);

const Content = () => <DataProvider>
  <Wrapper>
    <div style={{ display: 'flex', flexDirection: 'row', overflowX: 'scroll', width: '100vw' }}>
      <States />
    </div>

    <InfoBar />

    <Box flex="1" style={{ overflowY: 'hidden' }}>
      {typeof window !== 'undefined' && <Map />}
    </Box>

    <Section>
      <Box>
        { false && <Copyright />}
      </Box>
    </Section>
  </Wrapper>
</DataProvider>

export default Content;
