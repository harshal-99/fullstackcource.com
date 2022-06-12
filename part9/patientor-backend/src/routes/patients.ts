import {Router}                                 from "express";
import {addPatient, getNonSensitivePatientInfo} from "../services/patientsService";
import {toNewPatientEntry}                      from "../utils";

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

export default patientsRouter
