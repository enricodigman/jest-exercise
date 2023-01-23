export function fizzBuzz(number){
  let resultString = ''

  if (number % 3 === 0 && number % 5 === 0) {
    resultString += 'fizzbuzz'
  } else if (number % 3 === 0) {
    resultString += 'fizz'
  } else if (number % 5 === 0) {
    resultString += 'buzz'
  } else {
    resultString += ''
  }

  return resultString
}
