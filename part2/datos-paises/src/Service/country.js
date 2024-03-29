import axios from "axios";
const url = "https://studies.cs.helsinki.fi/restcountries/api/"

const getAll = async () => {
  const response = axios.get(`${url}all`)
  return response.then(res => {
    const data = res.data.map(country => {
      return country.name.common
    })
    return data
  })
}

const getCountry = async (country) => {
  const response = axios.get(`${url}name/${country}`)
  return response.then(response => {
    return {
      name: response.data.name.common,
      capital: response.data.capital,
      languages: response.data.languages,
      area: response.data.area,
      flag: response.data.flags
    }

  })
}

export default { getCountry, getAll }