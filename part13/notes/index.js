import express from "express"
import morgan from "morgan"
import noteRouter from "./controllers/notes.js";
import {connectToDatabase} from "./util/db.js";
import {PORT} from "./util/config.js";

const app = express()


app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/notes', noteRouter)


const start = async () => {
	await connectToDatabase()
	app.listen(PORT, () => {
		console.log(`server running on port ${PORT}`)
	})
}

start()
