import {Sequelize} from "sequelize";
import {DATABASE_URL} from "./config.js";

export const sequelize = new Sequelize(DATABASE_URL)

export const connectToDatabase = async () => {
	try {
		await sequelize.authenticate()
		console.log('Connected to the Database')
	} catch (error) {
		console.log('failed to connect to database')
		return process.exit(1)
	}
	return null
}
