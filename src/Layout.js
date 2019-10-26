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
    textWrap: 'nowrap',
  }}>
    2016 U.S Electoral College Map
  </h1>
);

const StatesList = () => (
  <div>
    <div id="statesList" style={{ display: "flex", flexWrap: "nowrap" }}>
      <span>Loading.</span>
    </div>
  </div>
);

const Copyright = () => (
  <>
    <Box>
      <small>
        <copyright>
          &copy;2017-2019 Ben Bergstein
        </copyright>
      </small>
      &nbsp;&nbsp;•&nbsp;&nbsp;
      <a href='https://goo.gl/forms/THky9dqIPI9AezJb2' target="_BLANK">
        <small>
          <i class="glyphicon glyphicon-send">
            Feedback
          </i>
        </small>
      </a>
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

const Content = () => (
  <Wrapper>
    <Section style={{ overflowX: 'scroll' }}>
      <StatesList />
    </Section>

    <Section>
      <Box display='flex'>
        <Box display='flex' flex="0 0 50%" alignItems='center'>
          <Title />
        </Box>
        <Box display='flex' flex="0 0 50%">
          <Totals />
        </Box>
      </Box>
    </Section>

    <Section flex='1'>
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
