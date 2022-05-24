import {Router} from "express";

import {User, Note} from "../models/index.js";
import bcrypt from "bcrypt";

const usersRouter = Router()

usersRouter.get('/', async (request, response) => {
	const users = await User.findAll({
		include: {
			model: Note,
			attributes: {exclude: ['userId']}
		}
	})
	response.json(users)
})

usersRouter.post('/', async (request, response) => {
	const {username, name, password} = request.body
	const saltRounds = 10
	try {
		const passwordHash = await bcrypt.hash(password, saltRounds)
		const user = await User.create({username, name, passwordHash})
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
