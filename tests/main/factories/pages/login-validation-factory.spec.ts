import { makeLoginValidation } from '@/main/factories/pages'
import {
  EmailValidation,
  MinLengthValidation,
  RequiredFieldValidation,
  ValidationComposite
} from '@/validation/validators'

describe('LoginValidationFactory', () => {
  test('Should make ValidationsComposite return correct validations', () => {
    const composite = makeLoginValidation()
    expect(composite).toEqual(ValidationComposite.build([
      new RequiredFieldValidation('email'),
      new EmailValidation('email'),
      new RequiredFieldValidation('password'),
      new MinLengthValidation('password', 5)
    ]))
  })
})
