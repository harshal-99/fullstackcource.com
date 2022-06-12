import {Router}                 from "express";
import {getNonSensitiveEntries} from "../services/diaryService";

const router = Router()

router.get('/', (_request, response) => {
  response.send(getNonSensitiveEntries())
})

router.post('/', (_request, response) => {
  response.send('Saving a diary!')
})

export default router
