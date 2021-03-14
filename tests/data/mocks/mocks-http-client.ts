import { HttpPostClient, HttpStatusCode } from '@/data/protocols'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  body?: object
  response: HttpPostClient.Result = {
    statusCode: HttpStatusCode.ok
  }

  async post (params: HttpPostClient.Params): Promise<HttpPostClient.Result> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve(this.response)
  }
}
