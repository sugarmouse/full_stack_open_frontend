import axios from "axios";
const baseUrl = "http://localhost:3001/api/notes";

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}
const noteService = { getAll, create, update };

export default noteService
