import React from 'react';

const boxOptions = ({
  justifyContent,
  alignItems,
  display,
  flex,
  flexDirection,
  flexWrap,
  flexGrow,
  flexShrink,
  flexBasis,
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
  flexGrow,
  flexShrink,
  flexBasis,
});

const Box = ({ children, ...styleProps }) => (
  <div style={boxOptions(styleProps)}>{children}</div>
);

export default Box;
