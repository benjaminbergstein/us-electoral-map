import dynamic from 'next/dynamic'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import React, { useState, useContext, useEffect, useRef } from 'react';
import DataContext from './DataContext'
import { PossibleFills } from './constants';

import Datamap from 'datamaps'

const POPUP_TEMPLATE = (state, data) => `<span style="position: relative; left: 30px; top: 200px; color: white; font-weight: 900; text-shadow: 0 0 1px #000, 1px 1px 1px #000;">${state.properties.name} (${data['Electoral Votes']})</span>`;

const initalizeMap = (node, data) => {
  if (window !== undefined) {
    const map = new Datamap({
      element: node,
      scope: 'usa',
      data,
      fills: PossibleFills,
      geographyConfig: {
        highlightOnHover: true,
        highlightFillColor: false,
        highlightBorderColor: "white",
        highlightBorderOpacity: '0.65',
        highlightBorderWidth: "4px",
        highlightFillOpacity: '0.85',
        popupTemplate: POPUP_TEMPLATE,
      },
    })

    return map
  }
}

const Toggle = ({ background = 'white', onClick, children }) => (
  <div
    onClick={onClick}
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.2)',
      cursor: 'pointer',
      borderRadius: '30px',
      background: background,
      color: 'black',
      height: '30px',
      width: '30px'
    }}
  >
    {children}
  </div>
)

const StateToggle = ({ stateName }) => {
  const { data, updateUserSelection } = useContext(DataContext)

  const color = PossibleFills[data[stateName].fillKey]

  return <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignContent: 'center',
      padding: '5px 15px',
      width: '200px',
    }}
  >
    {stateName} <Toggle onClick={() => updateUserSelection(stateName)} background={color} />
  </div>
}

const Panel = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={{ position: 'absolute', top: '15px', left: '15px', background: 'white' }}>
      {!isOpen && <Toggle onClick={() => setIsOpen(true)}>+</Toggle>}
      {isOpen && <>
        <Toggle onClick={() => setIsOpen(false)}>&times;</Toggle>
        <div style={{
          boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.2)',
          marginTop: '15px',
        }}>
          <StateToggle stateName="ME1" />
          <StateToggle stateName="ME2" />
          <StateToggle stateName="NE2" />
          <StateToggle stateName="DC" />
          <StateToggle stateName="RI" />
        </div>
      </>}
    </div>
  )
}

const Container = () => {
  const { data, windowSize, updateUserSelection } = useContext(DataContext)
  const ref = useRef(null)
  const mapRef = useRef(null)

  useEffect(() => {
    if (data === undefined) return
    if (ref.current === null) return

    ref.current.innerHTML = ''
    mapRef.current = initalizeMap(ref.current, data)

    mapRef.current.svg.selectAll('.datamaps-subunit').on('click', function(data) {
      updateUserSelection(data.id)
    });
  }, [data, ...windowSize])

  return <div style={{ position: 'relative', height: "100%" }}>
    <Panel />
    <div style={{ height: '100%' }} ref={ref}></div>
  </div>
};

export default Container
