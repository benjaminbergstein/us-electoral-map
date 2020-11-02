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
  const { title, resetUserSelections, changeData } = useContext(DataContext)

  return <div style={{ textAlign: 'center' }}>
    <h1 style={{
      lineHeight: '1.25',
      padding: '0 10px',
      fontSize: '1rem',
      margin: '0.75rem',
      color: 'lightslategray',
    }}>
      U.S Electoral College Map
    </h1>
    <h2 style={{ fontSize: '0.75rem', color: 'darkslategray' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Select value={title} options={Options} onChange={changeData} />
        <Button
          onClick={() => resetUserSelections()}
          style={{ marginLeft: '10px' }}
        >
          <FaUndoAlt />
        </Button>
      </div>
    </h2>
  </div>
};

const StatesList = () => {
  const data = useContext(DataContext)

  return <div style={{ display: 'flex', flexDirection: 'row', overflowX: 'scroll', width: '100vw' }}>
    <States data={data}/>
  </div>
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
    <Box>
      <Title />
    </Box>
    <Totals />
  </Box>
);

const Content = () => <DataProvider>
  <Wrapper>
    <StatesList />

    <Section>
      <Box>
        <InfoBar />
      </Box>
    </Section>

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
