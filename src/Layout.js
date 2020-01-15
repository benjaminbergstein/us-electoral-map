import React from 'react';
import Box from './Box';
import { partyColors } from './constants'

const PartyTotal = ({ party }) => (
  <Box
    display='flex'
    flex="0 0 33%"
    justifyContent='center'
    alignItems='center'
  >
    <h1
      id={`${party}Total`}
      style={{
        color: partyColors[party],
        padding: '0 2px',
        textShadow: '0px 1px 1px #444',
        textAlign: 'center',
        fontSize: '1.15rem',
        margin: 0,
      }}></h1>
  </Box>
);

const Totals = () => (
  <Box display='flex' width="100%">
    <PartyTotal party='dems' />
    <PartyTotal party='neutral' />
    <PartyTotal party='GOP' />
  </Box>
);

const Container = () => (<div id="container"></div>);

const Title = () => (
  <h1 style={{
    lineHeight: '1.25',
    padding: '0 10px',
    fontSize: '1.25rem',
    margin: '0.75rem',
  }}>
    2020 U.S Electoral College Map - Sanders vs. Trump
  </h1>
);

const StatesList = () => (
  <div>
    <div id="statesList" style={{ display: "flex", flexWrap: "nowrap" }}>
      <span>Loading.</span>
    </div>
  </div>
);

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
  <Box
    height={height}
    flex={flex}
    display='flex'
    flexDirection='column'
    justifyContent='center'
    {...props}
  >
    {children}
  </Box>
)

const Wrapper = ({ children }) => (
  <Box display="flex" flexDirection='column' height='100%' style={{ minHeight: '65vw' }}>
    {children}
  </Box>
);

const InfoBar = () => (
    <Box display='flex' width="100%">
      <Box display='flex' flex="0 0 50%" alignItems='center'>
        <Title />
      </Box>
      <Box display='flex' flex="0 1 50%">
        <Totals />
      </Box>
    </Box>
);

const Content = () => (
  <Wrapper>
    <Section style={{ overflowX: 'scroll' }}>
      <StatesList />
    </Section>

    <Section>
      <Box display="flex" height="0" alignItems="baseline" width="100%">
        <InfoBar />
      </Box>
    </Section>

    <Section flex='1' style={{ position: 'relative' }}>
      <Container />
    </Section>

    <Section>
      <Box>
        <Copyright />
      </Box>
    </Section>
  </Wrapper>
);

export default Content;
