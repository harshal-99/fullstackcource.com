import * as process from "process";

interface AverageValues {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number
}

interface InputValues {
  target: number,
  averageValues: Array<number>
}

export const parseBMIArguments = (args: Array<string>): InputValues => {
  if (args.length < 4) throw new Error("Not enough arguments")
  let averageValues = []
  const target = Number(args[2])
  if (isNaN(target)) throw new Error(`${args[2]} is not a number.`)

  for (let i = 3; i < args.length; i++) {
    let num = Number(args[i])
    if (isNaN(num)) throw new Error(`${args[i]} is not a number.`)
    averageValues.push(num)
  }
  return {
    target,
    averageValues
  }
}

export const calculateExercise = (target: number, exerciseHours: Array<number>): AverageValues => {
  const periodLength = exerciseHours.length
  const trainingDays = exerciseHours.filter(day => day > 0).length
  const average = exerciseHours.reduce((a, b) => a + b, 0) / periodLength

  const success = average >= target

  let rating, ratingDescription

  if (average < target) {
    rating = 1
    ratingDescription = 'not too bad but could do better'
  } else if (average === target) {
    rating = 2
    ratingDescription = 'good'
  } else {
    rating = 3
    ratingDescription = 'very good'
  }


  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average
  }
}

try {
  const {target, averageValues} = parseBMIArguments(process.argv)
  console.log(calculateExercise(target, averageValues))
} catch (e: unknown) {
  let errorMessage = 'Something bad happened.'
  if (e instanceof Error) {
    errorMessage += ' Error: ' + e.message
  }
  console.log(errorMessage);
}

