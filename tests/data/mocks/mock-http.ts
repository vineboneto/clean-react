import { HttpPostClient, HttpStatusCode } from '@/data/protocols'

import faker from 'faker'

export const mockPostRequest = (): HttpPostClient.Params<any> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement()
})

export class HttpPostClientSpy<T, R> implements HttpPostClient<T, R> {
  url?: string
  body?: T
  response: HttpPostClient.Result<R> = {
    statusCode: HttpStatusCode.ok
  }

  async post (params: HttpPostClient.Params<T>): Promise<HttpPostClient.Result<R>> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve(this.response)
  }
}