import {Router}       from "express";
import {getDiagnosis} from "../services/diagnosisService";

const diagnosesRouter = Router()

diagnosesRouter.get('/', (_request, response) => {
  response.json(getDiagnosis())
})

export default diagnosesRouter
