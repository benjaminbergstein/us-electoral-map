import React from 'react';

const boxOptions = ({
  justifyContent,
  alignItems,
  display,
  flex,
  flexDirection,
  flexWrap,
  order,
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
  order,
  flexDirection,
  flex,
  flexWrap,
  flexGrow,
  flexShrink,
  flexBasis,
});

const Box = ({ onMouseEnter, onMouseLeave, onClick, children, ...styleProps }) => (
  <div
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    style={boxOptions(styleProps)}>{children}</div>
);

export default Box;
