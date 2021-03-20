import { ValidationBuilder, ValidationComposite } from '@/validation/validators'

export const makeSignUpValidation = (): ValidationComposite => {
  return ValidationComposite.build([
    ...ValidationBuilder.field('name').required().min(5).build(),
    ...ValidationBuilder.field('email').required().email().build(),
    ...ValidationBuilder.field('password').required().sameAs('passwordConfirmation').min(5).build(),
    ...ValidationBuilder.field('passwordConfirmation').required().min(5).build()
  ])
}
