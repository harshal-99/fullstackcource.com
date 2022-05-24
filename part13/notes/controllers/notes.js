import {Router} from "express"
import {Note, User} from "../models/index.js"
import {Op} from "sequelize";
import jwt from "jsonwebtoken";

const noteRouter = Router()

const tokenExtractor = (req, res, next) => {
	const authorization = req.get('authorization')
	if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
		try {
			req.decodedToken = jwt.verify(authorization.substring(7), SECRET)
		} catch {
			res.status(401).json({error: 'token invalid'})
		}
	} else {
		res.status(401).json({error: 'token missing'})
	}
	next()
}

const noteFinder = async (request, response, next) => {
	request.note = await Note.findByPk(request.params.id)
	next()
}

noteRouter.get('/', async (request, response) => {
	const where = {}

	if (request.query.important) {
		where.important = request.query.important === 'true'
	}

	if (request.query.search) {
		where.content = {
			[Op.substring]: request.query.search
		}
	}
	const notes = await Note.findAll({
		attributes: {exclude: ['userId']},
		include: {
			model: User,
			attributes: ['name']
		},
		where
	})
	response.json(notes)
})

noteRouter.post('/', tokenExtractor, async (request, response) => {
	try {
		const user = await User.findByPk(request.decodedToken.id)
		const note = await Note.create({...request.body, userId: user.id})
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
