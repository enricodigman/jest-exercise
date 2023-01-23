import { expect, test } from '@jest/globals'
import { fizzBuzz } from './fizzbuzz.js'

describe('FizzBuzz Tests', () => {
  test('returns " " for number 2', () => {
    expect(fizzBuzz(1)).toEqual('')
  })

  test('returns " " for number 8', () => {
    expect(fizzBuzz(8)).toEqual('')
  })

  test('returns "fizz" for number 24', () => {
    expect(fizzBuzz(24)).toEqual('fizz')
  })

  test('returns "fizz" for number 33', () => {
    expect(fizzBuzz(33)).toEqual('fizz')
  })

  test('returns "buzz" for number 20', () => {
    expect(fizzBuzz(20)).toEqual('buzz')
  })

  test('returns "buzz" for number 50', () => {
    expect(fizzBuzz(50)).toEqual('buzz')
  })

  test('returns "fizzbuzz" for number 0', () => {
    expect(fizzBuzz(0)).toEqual('fizzbuzz')
    })

  test('returns "fizzbuzz" for number 30', () => {
    expect(fizzBuzz(30)).toEqual('fizzbuzz')
  })

  test('returns "fizzbuzz" for the number 90', () => {
    expect(fizzBuzz(90)).toEqual('fizzbuzz')
  })
})
