import { HttpPostClient } from '@/data/protocols'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  body?: object

  async post (params: HttpPostClient.Params): Promise<void> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve()
  }
}
