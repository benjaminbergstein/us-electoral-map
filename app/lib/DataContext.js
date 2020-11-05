import React, { useState, useLayoutEffect, useEffect, useContext }  from 'react';
import fetch from 'isomorphic-unfetch'
import { DefaultMap } from './constants'
import throttle from 'lodash/throttle'

const DataContext = React.createContext({})

const initialData = typeof window === "undefined" ? {} : JSON.parse(window.localStorage.getItem('uselectoralmap')) ?? {}
const initialWhichData = initialData.whichData || DefaultMap
const initialUserSelections = initialData.selections || {}

const FillMap = {
  1: 'neutral',
  2: 'dems',
  3: 'GOP',
}

const calculateTotals = (data) => Object.entries(data).reduce((
  acc,
  [stateName, data]
) => {
  const fillKey = data.fillKey
  const electoralVotes = data['Electoral Votes']
  const group = FillMap[fillKey]

  return {
    ...acc,
    [group]: acc[group] + electoralVotes,
  }
}, {
  GOP: 0,
  dems: 0,
  neutral: 0,
})

const useData = (initialData) => {
  const [whichData, setWhichData] = useState(initialWhichData)
  const [data, setData] = useState(initialData)
  const [userSelections, setUserSelections] = useState({})
  const [focusedState, setFocusedState] = useState(false)
  const [windowSize, setWindowSize] = useState([])

  const stateOrder = Object.keys(data)

  if (typeof window === "undefined") return {
    stateOrder,
    data,
    title: whichData,
    windowSize,
    totals: calculateTotals(data),
  }

  useEffect(() => {
    fetch(`results/president/${whichData}.json`)
      .then((res) => res.json())
      .then((res) => { setData(res) })
  }, [whichData])

  useEffect(() => {
    setUserSelections(initialUserSelections)
    setWindowSize([window.innerWidth, window.innerHeight])

    const listener = () => {
      setWindowSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener('resize', listener)

    return () => {
      window.removeEventListener('resize', listener)
    }
  }, [])

  if (typeof data === "undefined") return { loading: true, windowSize, stateOrder }

  const dataWithUserSelections = {
    ...data,
    ...userSelections,
  }

  console.debug(JSON.stringify(dataWithUserSelections))

  const totals = calculateTotals(dataWithUserSelections)

  const updateUserSelection = (stateName) => {
    const state = dataWithUserSelections[stateName]

    const updatedUserSelections = {
      ...userSelections,
      [stateName]: {
        ...state,
        fillKey: ((state.fillKey + 1) % 3) + 1,
      }
    }

    window.localStorage.setItem('uselectoralmap', JSON.stringify({ whichData: whichData, selections: updatedUserSelections }))
    setUserSelections(updatedUserSelections)
  }

  const resetUserSelections = () => {
    window.localStorage.setItem('uselectoralmap', JSON.stringify({ whichData }))
    setUserSelections({})
  }

  const changeData = (newData) => {
    window.localStorage.setItem('uselectoralmap', JSON.stringify({}))
    setUserSelections({})
    setWhichData(newData)
  }

  const throttledSetFocusedState = throttle(setFocusedState, 400)
  return {
    stateOrder,
    title: whichData,
    totals,
    windowSize,
    data: dataWithUserSelections,
    updateUserSelection,
    loading: false,
    resetUserSelections,
    changeData,
    focusedState,
    setFocusedState: throttledSetFocusedState,
  }
}

export const DataProvider = ({ initialData, children }) => {
  const data = useData(initialData)
  const { loading } = data

  return <DataContext.Provider value={data}>
    {children}
  </DataContext.Provider>
}


export default DataContext
