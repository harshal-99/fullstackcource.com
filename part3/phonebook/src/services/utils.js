import axios from "axios";

const baseUrl = "/api/persons"

const getAll = () => {
	const req = axios.get(baseUrl)
	return req.then(res => res.data)
}

const create = newPerson => {
	const req = axios.post(baseUrl, newPerson)
	return req.then(res => res.data)
}

const deletePerson = (id) => {
	const req = axios.delete(`${baseUrl}/${id}`)
	return req.then(res => res.data)
}

const updatePerson = (id, newData) => {
	const req = axios.put(`${baseUrl}/${id}`, newData)
	return req.then(res => res.data)
}

const utils = {getAll, create, deletePerson, updatePerson}

export default utils