import { FieldValidation } from '@/validation/protocols'
import { InvalidFieldError } from '@/validation/errors'

export class MinLengthValidation implements FieldValidation {
  constructor (readonly field: string, minLength: number) {}
  validate (value: string): Error {
    return new InvalidFieldError()
  }
}
