import { RemoteAddAccount } from '@/data/usecases'
import { AddAccount } from '@/domain/usecases'
import { EmailInUseError, UnexpectedError } from '@/domain/errors'
import { HttpClientSpy } from '@/tests/data/mocks'
import { mockAddAccountModel, mockAddAccountParams } from '@/tests/domain/mocks'
import { HttpStatusCode } from '@/data/protocols'

import faker from 'faker'

type SutTypes = {
  sut: RemoteAddAccount
  httpPostClientSpy: HttpClientSpy<AddAccount.Model>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpClientSpy<AddAccount.Model>()
  const sut = new RemoteAddAccount(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteAddAccount', () => {
  test('Should call HttpClientSpy Client with correct values', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)
    const addAccountParams = mockAddAccountParams()
    await sut.add(addAccountParams)
    expect(httpPostClientSpy.url).toBe(url)
    expect(httpPostClientSpy.method).toBe('post')
    expect(httpPostClientSpy.body).toBe(addAccountParams)
  })

  test('Should throw EmailInUseError if HttpPostClient returns 403', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.forbidden
    }
    const promise = sut.add(mockAddAccountParams())
    await expect(promise).rejects.toThrow(new EmailInUseError())
  })

  test('Should throw UnexpectedError if HttpPostClient returns 400', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.badRequest
    }
    const promise = sut.add(mockAddAccountParams())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpPostClient returns 500', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.serverError
    }
    const promise = sut.add(mockAddAccountParams())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpPostClient returns 404', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.notFound
    }
    const promise = sut.add(mockAddAccountParams())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should return an AddAccount.Model if HttpPostClient returns 200', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    const httpResult = mockAddAccountModel()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult
    }
    const account = await sut.add(mockAddAccountParams())
    expect(account).toEqual(httpResult)
  })
})
