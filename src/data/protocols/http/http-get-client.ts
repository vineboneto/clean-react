import { HttpResponse } from '@/data/protocols/http'

export interface HttpGetClient<R> {
  get (params: HttpGetClient.Params): Promise<HttpResponse<R>>
}

export namespace HttpGetClient {
  export type Params = {
    url: string
  }
}
