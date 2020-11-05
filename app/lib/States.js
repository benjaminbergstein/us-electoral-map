import dynamic from 'next/dynamic'
import React, { useContext, useLayoutEffect, useRef } from 'react';
import DataContext from './DataContext'
import { PossibleFills } from './constants';

import Box from './Box';

const State = ({ stateName }) => {
  const { focusedState, stateOrder, data, updateUserSelection } = useContext(DataContext)
  const stateData = data[stateName]
  const stateRef = useRef(null)

  const { fillKey } = stateData
  const [isHovered, setIsHovered] = React.useState(false)
  const fillColor = PossibleFills[fillKey]
  const electoralVotes = stateData['Electoral Votes']

  if (typeof window !== "undefined") {
    useLayoutEffect(() => {
      console.log(focusedState)
      console.log(stateRef)
      if (stateRef.current === null) return

      if (focusedState === stateName) {
        stateRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        })
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }, [focusedState])
  }

  return <Box
    ref={stateRef}
    flexBasis={`${electoralVotes*7}px`}
    flexShrink={0}
    flexGrow={1}
    key={stateName}
    order={stateOrder.indexOf(stateName)}
    onClick={() => { updateUserSelection(stateName, fillKey) }}
    onMouseEnter={() => { setIsHovered(true) }}
    onFocus={() => { setIsHovered(true) }}
    onBlur={() => { setIsHovered(true) }}
    onMouseLeave={() => { setIsHovered(false) }}
    id={stateName}
    className="State"
    style={{
      textAlign: 'center',
      cursor: 'pointer',
      marginRight: '1px',
      borderBottom: `8px solid ${isHovered ? fillColor : 'white'}`,
      boxShadow: isHovered ? 'inset 1px 12px 13px -5px rgba(255, 255, 255, 0.4)' : undefined,
      background: fillColor,
      color: 'white',
      padding: '10px',
    }}
  >
    <Box>{stateName}</Box>
    <Box style={{ fontSize: '0.5rem' }}>{electoralVotes}</Box>
  </Box>
}

const Container = () => {
  const { data } = useContext(DataContext)

  if (data === undefined) return null

  return <Box
    display='flex'
    flexDirection='row'
    style={{ overflowX: 'scroll' }}
    width='100vw'
  >
    {Object.entries(data).map(([stateName]) => (
      <State key={stateName} stateName={stateName} />
    ))}
  </Box>
};

export default Container
