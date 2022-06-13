import {NewPatient, PublicPatient, Patient} from "../types";
import patients                             from "../../data/patients";
import {v1 as uuid}                         from "uuid"

export const getNonSensitivePatientInfo = (): Array<PublicPatient> => {
  return patients
    .map(({id, name, dateOfBirth, gender, occupation}) =>
      ({
        id,
        name,
        occupation,
        dateOfBirth,
        gender
      }))
}

export const addPatient = (entry: NewPatient): Patient => {
  const newPatient = {
    id: uuid(),
    ...entry
  }
  patients.push(newPatient)
  return newPatient
}

export const getPatientById = (id: string): Patient | undefined => {
  return patients.find(p => p.id === id)
}
