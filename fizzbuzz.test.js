import { expect, test } from '@jest/globals'
import { fizzBuzz } from './fizzbuzz.js'

describe('FizzBuzz Tests', () => {
  test('returns error for not a positive integer', () => {
    expect(() => fizzBuzz(-5)).toThrow('Accepts only postive integer')
  })

  test('returns " " if number not divisible by 3 and 5', () => {
    expect(fizzBuzz(1)).toEqual('')
    expect(fizzBuzz(8)).toEqual('')
  })

  test('returns "fizzbuzz" if number divisible by 3 and 5', () => {
    expect(fizzBuzz(0)).toEqual('fizzbuzz')
    expect(fizzBuzz(30)).toEqual('fizzbuzz')
    expect(fizzBuzz(90)).toEqual('fizzbuzz')
  })

  test('returns "fizz" if number divisible by 3', () => {
    expect(fizzBuzz(24)).toEqual('fizz')
    expect(fizzBuzz(33)).toEqual('fizz')
  })

  test('returns "buzz" if number divisible by 5', () => {
    expect(fizzBuzz(20)).toEqual('buzz')
    expect(fizzBuzz(50)).toEqual('buzz')
  })
})
