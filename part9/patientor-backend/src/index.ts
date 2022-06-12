import express         from "express"
import morgan          from "morgan"
import cors            from "cors"
import diagnosesRouter from "./routes/diagnoses";
import patientsRouter  from "./routes/patients";

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

const PORT = 3001

app.get('/api/ping', (_request, response) => {
  console.log('ping')
  response.json('pong')
})

app.use('/api/diagnoses', diagnosesRouter)
app.use('/api/patients', patientsRouter)


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
