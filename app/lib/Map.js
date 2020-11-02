import dynamic from 'next/dynamic'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import React, { useContext, useEffect, useRef } from 'react';
import DataContext from './DataContext'
import { PossibleFills } from './constants';

import Datamap from 'datamaps'

const POPUP_TEMPLATE = (state, data) => `<span style="color: white; font-weight: 900; text-shadow: 0 0 1px #000, 1px 1px 1px #000;">${state.properties.name}: ${data['Electoral Votes']}</span>`;

const initalizeMap = (node, data) => {
  if (window !== undefined) {
    const map = new Datamap({
      element: node,
      scope: 'usa',
      data,
      fills: PossibleFills,
      geographyConfig: {
        highlightOnHover: false,
        popupTemplate: POPUP_TEMPLATE,
      },
    })

    return map
  }
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

  return <div style={{ height: '100%' }} ref={ref}></div>
};

export default Container
