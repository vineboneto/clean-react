import { makeSignUpValidation } from '@/main/factories/pages'
import { ValidationBuilder, ValidationComposite } from '@/validation/validators'

describe('SignUpValidationFactory', () => {
  test('Should make ValidationsComposite return correct validations', () => {
    const composite = makeSignUpValidation()
    expect(composite).toEqual(ValidationComposite.build([
      ...ValidationBuilder.field('name').required().min(5).build(),
      ...ValidationBuilder.field('email').required().email().build(),
      ...ValidationBuilder.field('password').required().sameAs('passwordConfirmation').min(5).build(),
      ...ValidationBuilder.field('passwordConfirmation').required().min(5).build()
    ]))
  })
})
