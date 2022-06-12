import {NewPatient, NonSensitivePatientInfo, Patient} from "../types";
import patients                                       from "../../data/patients";
import {v1 as uuid}                                   from "uuid"

export const getNonSensitivePatientInfo = (): Array<NonSensitivePatientInfo> => {
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
