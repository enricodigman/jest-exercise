export function fizzBuzz(number){
  let resultString = ''

  if (number % 3 === 0) resultString += 'fizz'
  if (number % 5 === 0) resultString += 'buzz'

  return resultString
}
