import React from 'react';
import Box from './Box';

const Totals = () => (
  <Box display='flex' width="100%">
    <Box display='flex' flex="0 0 33%" justifyContent='center'>
      <h1 id="demsTotal"></h1>
    </Box>
    <Box display='flex' flex="0 0 33%" justifyContent='center'>
      <h1 id="neutralTotal"></h1>
    </Box>
    <Box display='flex' flex="0 0 33%" justifyContent='center'>
      <h1 id="GOPTotal"></h1>
    </Box>
  </Box>
);

const Container = () => (<div id="container"></div>);

const Title = () => (<h1 style={{ fontSize: '1.25rem', textWrap: 'nowrap' }}>2016 U.S Electoral College Map</h1>);

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
          &copy; Copyright 2017-2019, Benjamin Bergstein
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
  <Box display="flex" flexDirection='column' height='100%' style={{ minHeight: '550px' }}>
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
