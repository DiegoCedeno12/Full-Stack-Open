import { useEffect, useState } from "react";
import countryServices from '../Service/country.js'
import Button from "./Button.jsx";

export default function Country({ country, show }) {
  const [dataCountry, setDataCountry] = useState({})
  const [view, setView] = useState(show)


  const handleClick = () => {
    setView(!view)
  }

  useEffect(() => {
    countryServices.getCountry(country).then(response => setDataCountry(response))
  }, [country, view])

  if (view) {
    return (
      <section >
        {Object.keys(dataCountry).length !== 0 ?
          <>
            <h2>{dataCountry.name} <Button show={view} handleClick={handleClick} /></h2>
            <p>Capital: {dataCountry.capital} <br />
              Area: {dataCountry.area}</p>
            <h3>Languages:</h3>
            <ul>
              {
                Object.keys(dataCountry.languages).map((keys) => <li key={keys} >{dataCountry.languages[keys]}</li>)
              }
            </ul>
            <img src={dataCountry.flag.png} height={150} width="auto" alt={`flag of the ${dataCountry.flag.alt}`} />
          </> :
          <p>Cargando...</p>
        }
      </section>
    )
  }
  
  return (
    <li>
      {country} <Button show={view} handleClick={handleClick} />
    </li>
  )
}
