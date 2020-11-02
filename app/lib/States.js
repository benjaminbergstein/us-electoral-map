import dynamic from 'next/dynamic'
import React, { useContext, useLayoutEffect, useRef } from 'react';
import DataContext from './DataContext'
import { PossibleFills } from './constants';

const Container = () => {
  const { data, updateUserSelection } = useContext(DataContext)

  if (data === undefined) return null

  return <>
    {Object.entries(data).map(([stateName, { fillKey }]) => (
      <div
        key={stateName}
        onClick={() => { updateUserSelection(stateName, fillKey) }}
        id={stateName}
        className="State"
        style={{
          background: PossibleFills[fillKey],
          color: 'white',
          padding: '10px',
        }}
      >
        {stateName}
      </div>
    ))}
  </>
};

export default Container
