export function fizzBuzz(number){
  let resultString = ''

  if (number >= 0) {
    if (number % 3 === 0) resultString += 'fizz'
    if (number % 5 === 0) resultString += 'buzz'
  } else {
    throw new Error('Accepts only postive integer')
  }

  return resultString
}
