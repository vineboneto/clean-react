import { HttpPostClient } from '@/data/protocols'

export class HttpPostClientSpy implements HttpPostClient {
  params?: HttpPostClient.Params

  async post (url: HttpPostClient.Params): Promise<void> {
    this.params = url
    return Promise.resolve()
  }
}
