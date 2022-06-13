import {Router}                                                 from "express";
import {addPatient, getNonSensitivePatientInfo, getPatientById} from "../services/patientsService";
import {toNewPatientEntry}                                      from "../utils";

const patientsRouter = Router()

patientsRouter.get('/', (_request, response) => {
  response.json(getNonSensitivePatientInfo())
})

patientsRouter.post('/', (request, response) => {
  try {
    const newPatient = toNewPatientEntry(request.body)

    const addedEntry = addPatient(newPatient)
    response.json(addedEntry)
  } catch (error) {
    let errorMessage = 'Something went wrong'
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message
    }
    response.status(400).send(errorMessage)
  }
})

patientsRouter.get('/:id', (request, response) => {
  const id = request.params.id.toString()
  const patient = getPatientById(id)
  if (patient) {
    return response.json(patient)
  }
  return response.status(404).end()
})

export default patientsRouter
