import { useState, useEffect, createContext } from 'react'

export const DataContext = createContext()

function DataProvider({ children }) {
  // Déclaration d'une variable d'état
  const [locations, setLocations] = useState([])

  // Simulation appel API
  useEffect(() => {
    fetch('/data/logements.json').then((response) =>
      response
        .json()
        .then((locations) => {
          setLocations(locations)
        })
        .catch((err) => {
          console.log('Error: ', err)
        })
    )
  }, [])

  return (
    <DataContext.Provider value={{ locations, setLocations }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider
