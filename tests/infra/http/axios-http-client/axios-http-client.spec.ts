import { AxiosHttpClient } from '@/infra/http/axios-http-client'
import { mockAxios, mockedAxiosResult } from '@/tests/infra/mocks'
import { mockPostRequest } from '@/tests/data/mocks'

import axios from 'axios'

jest.mock('axios')

type SutTypes = {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxios()
  return {
    sut,
    mockedAxios
  }
}

describe('AxiosHttpClient', () => {
  describe('POST', () => {
    test('Should call axios.post with correct values', async () => {
      const request = mockPostRequest()
      const { sut, mockedAxios } = makeSut()
      await sut.post(request)
      expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
    })

    test('Should return the correct response on axios.post', async () => {
      const { sut } = makeSut()
      const httpResponse = await sut.post(mockPostRequest())
      expect(httpResponse).toEqual({
        body: mockedAxiosResult.data,
        statusCode: mockedAxiosResult.status
      })
    })

    test('Should return the correct error on axios.post', async () => {
      const { sut, mockedAxios } = makeSut()
      mockedAxios.post.mockRejectedValueOnce({
        response: mockedAxiosResult
      })
      const httpResponse = await sut.post(mockPostRequest())
      expect(httpResponse).toEqual({
        body: mockedAxiosResult.data,
        statusCode: mockedAxiosResult.status
      })
    })
  })

  describe('GET', () => {

  })
})
