import React from 'react';

const boxOptions = ({
  justifyContent,
  alignItems,
  display,
  flex,
  flexDirection,
  flexWrap,
  width,
  height,
  style
}) => ({
  ...style,
  justifyContent,
  alignItems,
  height,
  width,
  display,
  flexDirection,
  flex,
  flexWrap,
});

const Box = ({ children, ...styleProps }) => (
  <div style={boxOptions(styleProps)}>{children}</div>
);

export default Box;
