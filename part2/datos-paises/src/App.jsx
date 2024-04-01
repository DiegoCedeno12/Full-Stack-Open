import { useState, useEffect } from 'react'
import countryServices from './Service/country.js'
import Country from './Components/Country.jsx'

function App() {
  const [dataCountries, setDataCountries] = useState([])
  const [searchCountry, setSearchCountry] = useState("")
  const [dataFilter, setDataFilter] = useState([])
  const [message, setMessage] = useState("")

  useEffect((() => {
    countryServices.getAll()
      .then(response => setDataCountries(response))
  }), [])

  const handleSearchCountry = (e) => {
    setSearchCountry(e.target.value)
    if (e.target.value.length > 1) setDataFilter(dataCountries.filter(country => country.toLowerCase().includes(e.target.value)))
    setMessage("No se encuentra dicho pais, ingrese otro")
  }

  return (
    <>
      <h1>Informacion de Paises</h1>
      Búscar país:
      <input value={searchCountry} onChange={handleSearchCountry} />
      {dataFilter.length > 0 ?
        dataFilter.length === 1 ?
          <Country country={dataFilter[0]} show={true} />
          : <ul>{dataFilter.map((country, index) => <Country key={index} country={country} show={false} />)}</ul>
        : <p>{message}</p>
      }
    </>
  )
}

export default App
