import express             from "express"
import {calculateBmi}      from "./bmiCalculator";
import morgan              from "morgan"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan("dev"))


app.get('/ping', (_req, res) => {
  res.send('pong');
});

app.get('/', (request, response) => {
  response.send('Hello Full Stack')
})

app.get('/bmi', (request, response) => {
  const height = parseFloat(request.query.height as string)
  const weight = parseFloat(request.query.weight as string)

  if (isNaN(height) || isNaN(weight)) {
    response.json({error: "malformed parameters"}).end()
  }

  let bmi = calculateBmi(height, weight)
  response.json({
    weight,
    height,
    bmi
  })
})

const PORT = 3003

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/ping`)
})
