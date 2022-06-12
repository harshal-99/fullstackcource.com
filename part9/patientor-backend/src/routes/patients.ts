import {Router}                     from "express";
import {getNonSensitivePatientInfo} from "../services/patientsService";

const patientsRouter = Router()

patientsRouter.get('/', (_request, response) => {
  response.json(getNonSensitivePatientInfo())
})

export default patientsRouter
