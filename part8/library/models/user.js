import mongoose from "mongoose"
import uniqueValidator from "mongoose-unique-validator"

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		minlength: 3
	},
	favoriteGenre: {
		type: String,
		required: true
	}
})

userSchema.plugin(uniqueValidator)

const User = mongoose.model('User', userSchema)

export default User
