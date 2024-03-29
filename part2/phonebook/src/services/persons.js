import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = newObject => {
    return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
    console.log("persons.update called with id", id, " and data", newObject.name, newObject.number)
    return axios.put(`${baseUrl}/${id}`, newObject)
}

const deleteItem = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

export default {
    getAll,
    create,
    update,
    deleteItem
}