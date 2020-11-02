import React, { useContext } from 'react'
import DataContext from './DataContext'
import { partyColors } from './constants'
import Box from './Box';

const PartyTotal = ({ party }) => {
  const { totals } = useContext(DataContext)

  if (!totals) return null

  return <h1
    id={`${party}Total`}
    style={{
      flex: '1',
      color: partyColors[party],
      padding: '0 2px',
      textShadow: '0px 1px 1px #444',
      textAlign: 'center',
      fontSize: '1.15rem',
      margin: 0,
    }}>{totals[party]}</h1>
};

const Totals = () => (
  <Box flex="1" display="flex" flexDirection="row" justifyContext="space-between" style= {{ margin: "0px 8%" }}>
    <PartyTotal party='dems' />
    <PartyTotal party='neutral' />
    <PartyTotal party='GOP' />
  </Box>
);


export default Totals
