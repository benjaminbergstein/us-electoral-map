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

const Box = React.forwardRef(({
  key,
  id,
  onMouseEnter,
  onMouseLeave,
  onClick,
  children,
  ...styleProps
}, ref) => (
  <div
    id={id}
    key={key}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    ref={ref}
    style={boxOptions(styleProps)}
  >
    {children}
  </div>
));

export default Box;
