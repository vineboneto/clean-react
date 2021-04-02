import { GetStorage, HttpGetClient, HttpResponse } from '@/data/protocols'

export class AuthorizeHttpGetClientDecorator implements HttpGetClient {
  constructor (
    private readonly getStorage: GetStorage,
    private readonly httpGetClient: HttpGetClient
  ) {}

  async get (params: HttpGetClient.Params): Promise<HttpResponse> {
    await this.getStorage.get('account')
    await this.httpGetClient.get(params)
    return null
  }
}
