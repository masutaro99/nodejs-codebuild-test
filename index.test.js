const fizzbuzz = require('./index')

test('fizzbuzz', () => {
  expect(fizzbuzz(30)).toBe('FizzBuzz')
  expect(fizzbuzz(9)).toBe('Fizz')
  expect(fizzbuzz(10)).toBe('Buzz')
  expect(fizzbuzz(7)).toBe('7')
})
