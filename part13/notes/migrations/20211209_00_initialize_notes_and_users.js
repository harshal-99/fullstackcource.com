import {DataTypes} from "sequelize";

export const up = async ({context: queryInterface}) => {
	await queryInterface.createTable('notes', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		important: {
			type: DataTypes.BOOLEAN
		},
		date: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW
		}
	})
	await queryInterface.createTable('users', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		username: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
	})
	await queryInterface.addColumn('notes', 'user_id', {
		type: DataTypes.INTEGER,
		allowNull: false,
		references: {model: 'users', key: 'id'},
	})
}

export const down = async ({context: queryInterface}) => {
	await queryInterface.dropTable('notes')
	await queryInterface.dropTable('users')
}
