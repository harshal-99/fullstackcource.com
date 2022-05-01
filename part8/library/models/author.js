import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
		minlength: 4,
	},
	born: {
		type: Number
	}
})

const Author = mongoose.model('Author', AuthorSchema)

export default Author
