interface BMI {
  height: number,
  weight: number
}


const parseArguments = (args: Array<string>): BMI => {
  if (args.length < 4) throw new Error("Not enough arguments")
  if (args.length > 4) throw new Error("Too many arguments")

  const height = Number(args[2])
  const weight = Number(args[3])

  if (!isNaN(height) && !isNaN(weight)) {
    return {
      height,
      weight
    }
  } else {
    throw new Error("Provided values were not numbers!")
  }
}

export const calculateBmi = (height: number, weight: number): string => {
  const bmi = (weight / height / height) * 10000

  if (bmi < 15) {
    return 'Very severely underweight';
  } else if (bmi > 15 && bmi < 16) {
    return 'Severely underweight';
  } else if (bmi > 16 && bmi < 18.5) {
    return 'Underweight';
  } else if (bmi > 18.5 && bmi < 25) {
    return 'Normal (healthy weight)';
  } else if (bmi > 25 && bmi < 30) {
    return 'Overweight';
  } else if (bmi > 30 && bmi < 35) {
    return 'Obese Class I (Moderately obese)';
  } else if (bmi > 35 && bmi < 40) {
    return 'Obese Class II (Severely obese)';
  } else {
    return 'Obese Class III (Very severely obese)	';
  }
}

try {
  const {height, weight} = parseArguments(process.argv)
  console.log(calculateBmi(height, weight))
} catch (error) {
  let errorMessage = 'Something bad happened.'
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message
  }
  console.log(errorMessage)
}

