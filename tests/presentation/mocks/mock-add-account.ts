import { AddAccount } from '@/domain/usecases'
import { mockAccountModel } from '../../domain/mocks'

export class AddAccountSpy implements AddAccount {
  params: AddAccount.Params
  result = mockAccountModel()
  callsCount = 0

  async add (params: AddAccount.Params): Promise<AddAccount.Result> {
    this.callsCount++
    this.params = params
    return this.result
  }
}
