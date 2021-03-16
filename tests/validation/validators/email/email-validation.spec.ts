import { InvalidFieldError } from '@/validation/errors'
import { EmailValidation } from '@/validation/validators'

describe('EmailValidation', () => {
  test('Should return error if email is invalid', () => {
    const sut = new EmailValidation('email')
    const error = sut.validate('')
    expect(error).toEqual(new InvalidFieldError())
  })
})
