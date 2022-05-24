import {DataTypes, Model} from "sequelize/types/index.js";
import {sequelize} from "../util/db.js";

class Note extends Model {
}

Note.init({
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	content: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	important: {
		type: DataTypes.BOOLEAN
	},
	date: {
		type: DataTypes.DATE,
		defaultValue: DataTypes.NOW
	}
}, {
	sequelize,
	underscored: true,
	timestamps: false,
	modelName: 'note'
})

await Note.sync()

export default Note
