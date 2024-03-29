import axios from "axios";
const url = "http://localhost:3001/persons";

async function getAll() {
  const request = axios.get(url)
  return request.then(response => response.data)
}

async function createPerson(newPerson) {
  const request = axios.post(url, newPerson)
  return request.then(response => response.data)
}

async function updatePerson(id, updatePerson) {
  const request = axios.put(`${url}/${id}`, updatePerson)
  return request.then(response => response.data)
}

async function deletePerson (id){
  const request = axios.delete(`${url}/${id}`)
  return request.then(response => response.data)
}

export default { getAll, create: createPerson, update: updatePerson, delete: deletePerson }