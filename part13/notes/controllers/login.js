import jwt from "jsonwebtoken"
import {Router} from "express"
import {compare} from "bcrypt";

import {User} from "../models/index.js";
import {SECRET} from "../util/config.js";

const loginRouter = Router()

loginRouter.post('/', async (request, response) => {
	const {username, password} = request.body

	const user = await User.findOne({
		where: {
			username
		}
	})

	const passwordCorrect = user === null
		? false
		: await compare(password, user.passwordHash)

	if (!(user && passwordCorrect)) {
		return response.status(401).json({
			error: 'invalid username or password'
		})
	}

	const userForToken = {
		username: user.username,
		id: user.id
	}

	const token = jwt.sign(userForToken, SECRET)

	response
		.status(200)
		.send({token, username: user.username, name: user.name})
})

export default loginRouter
