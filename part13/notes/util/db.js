import {Sequelize} from "sequelize";
import {DATABASE_URL} from "./config.js";
import {SequelizeStorage, Umzug} from "umzug";

export const sequelize = new Sequelize(DATABASE_URL)

export const runMigrations = async () => {
	const migrator = new Umzug({
		migrations: {
			glob: 'migrations/*.js'
		},
		storage: new SequelizeStorage({sequelize, tableName: 'migrations'}),
		context: sequelize.getQueryInterface(),
		logger: console
	})
	const migrations = await migrator.up()
	console.log('Migrations up to date', {
		files: migrations.map(mig => mig.name)
	})
}

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
