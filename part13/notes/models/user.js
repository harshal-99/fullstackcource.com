import {DataTypes, Model} from "sequelize";
import {sequelize} from "../util/db.js";

class User extends Model {
}

User.init({
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	username: {
		type: DataTypes.STRING,
		unique: true,
		allowNull: false,
		validate: {
			isAlphanumeric: true,
			notEmpty: true
		}
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			isAlpha: true,
			notEmpty: true
		}
	},
	passwordHash: {
		type: DataTypes.STRING,
		allowNull: false,
		notEmpty: true
	}
}, {
	sequelize,
	underscored: true,
	timestamps: false,
	modelName: 'user'
})

export default User
