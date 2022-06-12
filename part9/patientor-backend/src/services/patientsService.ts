import {NonSensitivePatientInfo} from "../../types";
import patients                  from "../../data/patients";


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
