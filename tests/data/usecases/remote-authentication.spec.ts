import { RemoteAuthentication } from '@/data/usecases'
import { HttpStatusCode } from '@/data/protocols'
import { InvalidCredentialsError, UnexpectedError } from '@/domain/errors'
import { Authentication } from '@/domain/usecases'
import { HttpPostClientSpy } from '@/tests/data/mocks'
import { mockAuthenticationModel, mockAuthenticationParams } from '@/tests/domain/mocks'

import faker from 'faker'

type SutTypes = {
  httpPostClientSpy: HttpPostClientSpy<Authentication.Model>
  sut: RemoteAuthentication
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy<Authentication.Model>()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy
  }
}

describe('Remote Authentication', () => {
  test('Should call HttpClient with correct URL', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.auth(mockAuthenticationParams())
    expect(httpPostClientSpy.url).toBe(url)
  })

  test('Should call HttpClient with correct body', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    const authenticationParams = mockAuthenticationParams()
    await sut.auth(authenticationParams)
    expect(httpPostClientSpy.body).toEqual(authenticationParams)
  })

  test('Should throw InvalidCredentialError if HttpPostClient returns 401', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.unauthorized
    }
    const promise = sut.auth(mockAuthenticationParams())
    await expect(promise).rejects.toThrow(new InvalidCredentialsError())
  })

  test('Should throw UnexpectedError if HttpPostClient returns 400', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.badRequest
    }
    const promise = sut.auth(mockAuthenticationParams())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpPostClient returns 500', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.serverError
    }
    const promise = sut.auth(mockAuthenticationParams())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpPostClient returns 404', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.notFound
    }
    const promise = sut.auth(mockAuthenticationParams())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should return an Authentication.Model if HttpPostClient returns 200', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    const httpResult = mockAuthenticationModel()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult
    }
    const account = await sut.auth(mockAuthenticationParams())
    expect(account).toEqual(httpResult)
  })
})
