import axios from 'axios'
const baseUrl = 'http://localhost:3000/api/notes'

async function getAll() {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

async function create(newObject) {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

async function update(id, newObject) {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default { getAll, create, update }