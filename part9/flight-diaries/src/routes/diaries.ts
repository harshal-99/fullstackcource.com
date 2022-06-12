import {Router}                                     from "express";
import {addDiary, findById, getNonSensitiveEntries} from "../services/diaryService";
import {toNewDiaryEntry}                            from "../utils";

const router = Router()

router.get('/', (_request, response) => {
  response.send(getNonSensitiveEntries())
})

router.post('/', (request, response) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(request.body)

    const addedEntry = addDiary(newDiaryEntry)
    response.json(addedEntry)
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong'
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message
    }
    response.status(400).send(errorMessage)
  }
})

router.get('/:id', (request, response) => {
  const diary = findById(Number(request.params.id))

  if (diary) {
    response.send(diary)
  } else {
    response.sendStatus(404)
  }
})

export default router
