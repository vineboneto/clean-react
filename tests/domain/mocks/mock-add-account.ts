import { AddAccount } from '@/domain/usecases'
import { mockAccountModel } from '@/tests/domain/mocks'

import faker from 'faker'

export const mockAddAccountParams = (): AddAccount.Params => {
  const password = faker.internet.password()
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password,
    passwordConfirmation: password
  }
}

export const mockAddAccountModel = (): AddAccount.Model => mockAccountModel()

export class AddAccountSpy implements AddAccount {
  params: AddAccount.Params
  account = mockAddAccountModel()
  callsCount = 0

  async add (params: AddAccount.Params): Promise<AddAccount.Model> {
    this.callsCount++
    this.params = params
    return this.account
  }
}
