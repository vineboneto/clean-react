import { HttpPostClient, HttpStatusCode } from '@/data/protocols'

import faker from 'faker'

export const mockPostRequest = (): HttpPostClient.Params => ({
  url: faker.internet.url(),
  body: faker.random.objectElement()
})

export class HttpPostClientSpy<ResponseType> implements HttpPostClient<ResponseType> {
  url?: string
  body?: any
  response: HttpPostClient.Result<ResponseType> = {
    statusCode: HttpStatusCode.ok
  }

  async post (params: HttpPostClient.Params): Promise<HttpPostClient.Result<ResponseType>> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve(this.response)
  }
}
