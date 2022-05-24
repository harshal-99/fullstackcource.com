import {Router} from "express"
import {Note} from "../models/index.js"

const noteRouter = Router()

const noteFinder = async (request, response, next) => {
	request.note = await Note.findByPk(request.params.id)
	next()
}

noteRouter.get('/', async (request, response) => {
	const notes = await Note.findAll()
	response.json(notes)
})

noteRouter.post('/', async (request, response) => {
	try {
		const note = await Note.create(request.body)
		response.json(note)
	} catch (error) {
		return response.status(400).json({error})
	}
})

noteRouter.get('/:id', noteFinder, async (request, response) => {
	if (request.note) {
		response.json(request.note)
	} else {
		response.status(400).end()
	}
})

noteRouter.delete('/:id', noteFinder, async (request, response) => {
	if (request.note) {
		await request.note.destroy()
	}
	response.status(204).end()
})

noteRouter.put('/:id', noteFinder, async (request, response) => {
	if (request.note) {
		await request.note.update({important: request.body.important})
		response.json(request.note)
	} else {
		response.status(404).end()
	}
})

export default noteRouter
