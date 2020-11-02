import React, { useState, useLayoutEffect, useEffect, useContext }  from 'react';
import fetch from 'isomorphic-unfetch'

const DataContext = React.createContext({})

const initialData = typeof window === "undefined" ? {} : JSON.parse(window.localStorage.getItem('uselectoralmap'))
const initialWhichData = initialData.whichData || '2020 Presidential Election'
const initialUserSelections = initialData.selections || {}

const useData = () => {
  const [whichData, setWhichData] = useState(initialWhichData)
  const [data, setData] = useState(undefined)
  const [userSelections, setUserSelections] = useState(initialUserSelections)
  const [windowSize, setWindowSize] = useState([])

  if (typeof window === "undefined") return {}

  useEffect(() => {
    fetch(`results/president/${whichData}.json`)
      .then((res) => res.json())
      .then((res) => { setData(res) })
  }, [whichData])

  useEffect(() => {
    const listener = () => {
      setWindowSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener('resize', listener)

    return () => {
      window.removeEventListener('resize', listener)
    }
  }, [])

  if (typeof data === "undefined") return { loading: true }

  const dataWithUserSelections = {
    ...data,
    ...userSelections,
  }

  console.debug(JSON.stringify(dataWithUserSelections))

  const totals = Object.entries(dataWithUserSelections).reduce((
    acc,
    [stateName, data]
  ) => {
    const fillKey = data.fillKey
    const electoralVotes = data['Electoral Votes']
    const group = fillKey === 1 ? 'neutral' : (fillKey === 2 ? 'dems' : 'GOP')

    return {
      ...acc,
      [group]: acc[group] + electoralVotes,
    }
  }, {
    GOP: 0,
    dems: 0,
    neutral: 0,
  })

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

  return {
    title: whichData,
    totals,
    windowSize,
    data: dataWithUserSelections,
    updateUserSelection,
    loading: false,
    resetUserSelections,
    changeData,
  }
}

export const DataProvider = ({ children }) => {
  const data = useData()

  return <DataContext.Provider value={data}>
    {children}
  </DataContext.Provider>
}


export default DataContext
