import { useEffect, useState } from "react";
import countryServices from '../Service/country.js'
import { spread } from "axios";

export default function InfoCountry({ country }) {
  const [dataCountry, setDataCountry] = useState({})

  useEffect(() => {
    countryServices.getCountry(country).then(response => setDataCountry(response))
  }, [country])

  return (
    <section >
      {Object.keys(dataCountry).length !== 0 ?
        <>
          <h2>{dataCountry.name}</h2>
          <p>Capital: {dataCountry.capital} <br />
          Area: {dataCountry.area}</p>
          <h3>Languages:</h3>
          <ul>
            {
              Object.keys(dataCountry.languages).map((keys) => <li key={keys} >{dataCountry.languages[keys]}</li> )}
          </ul>
          <img src={dataCountry.flag.png} height={150} width="auto" alt={`flag of the ${dataCountry.flag.alt}`} />
        </> :
        <p>Cargando...</p>
        }
    </section>
  );
}
