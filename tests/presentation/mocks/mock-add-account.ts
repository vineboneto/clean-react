import { AddAccount } from '@/domain/usecases'
import { mockAccountModel } from '../../domain/mocks'

export class AddAccountSpy implements AddAccount {
  params: AddAccount.Params
  result = mockAccountModel()

  async add (params: AddAccount.Params): Promise<AddAccount.Result> {
    this.params = params
    return this.result
  }
}
