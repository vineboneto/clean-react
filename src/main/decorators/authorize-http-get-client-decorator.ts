import { GetStorage, HttpGetClient, HttpResponse } from '@/data/protocols'

export class AuthorizeHttpGetClientDecorator implements HttpGetClient {
  constructor (
    private readonly getStorage: GetStorage,
    private readonly httpGetClient: HttpGetClient
  ) {}

  async get (params: HttpGetClient.Params): Promise<HttpResponse> {
    const account = await this.getStorage.get('account')
    if (account?.accessToken) {
      Object.assign(params, {
        headers: Object.assign(params.headers || {}, {
          'x-access-token': account.accessToken
        })
      })
    }
    const httpResponse = await this.httpGetClient.get(params)
    return httpResponse
  }
}
