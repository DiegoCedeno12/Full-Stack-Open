import { useState, useEffect } from 'react'
import countryServices from './Service/country.js'
import Country from './Components/Country.jsx'
import InfoCountry from './Components/InfoCountry.jsx'

function App() {
  const [dataCountries, setDataCountries] = useState([])
  const [searchCountry, setSearchCountry] = useState("")
  const [dataFilter, setDataFilter] = useState([])

  useEffect((() => {
    countryServices.getAll()
      .then(response => setDataCountries(response))
  }), [])

  const handleSearchCountry = (e) => {
    setSearchCountry(e.target.value)
    if (e.target.value.length > 1) setDataFilter(dataCountries.filter(country => country.toLowerCase().includes(e.target.value)))
  }

  return (
    <>
      <h1>Informacion de Paises</h1>
      Búscar país:
      <input value={searchCountry} onChange={handleSearchCountry} />
      {Object.keys(dataFilter).length !== 0 ?
        dataFilter.length === 1 ? <InfoCountry country={dataFilter[0]} />
          : <ul>{dataFilter.map((country, index) => <Country key={index} country={country} />)}</ul>
        : <p>Ingrese mas caracteres, para buscar</p>
      }
    </>
  )
}

export default App
