import {Router} from "express";

import {User, Note} from "../models/index.js";

const usersRouter = Router()

usersRouter.get('/', async (request, response) => {
	const users = await User.findAll({
		include: {
			model: Note
		}
	})
	response.json(users)
})

usersRouter.post('/', async (request, response) => {
	try {
		const user = await User.create(request.body)
		response.json(user)
	} catch (error) {
		return response.status(400).json({error})
	}
})

usersRouter.get('/:id', async (request, response) => {
	const user = await User.findByPk(request.params.id)
	if (user) {
		response.json(user)
	} else {
		response.status(404).end()
	}
})

export default usersRouter
