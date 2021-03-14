import { HttpPostClient } from '@/data/protocols'
import { AxiosHttpClient } from '@/infra/http/axios-http-client'

import axios from 'axios'
import faker from 'faker'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

const mockPostRequest = (): HttpPostClient.Params<any> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement()
})

describe('AxiosHttpClient', () => {
  test('Should call axios with correct URL and verb', async () => {
    const request = mockPostRequest()
    const sut = makeSut()
    await sut.post({ url: request.url })
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url)
  })
})
