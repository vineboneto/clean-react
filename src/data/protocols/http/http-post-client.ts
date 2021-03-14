import { HttpResponse } from '@/data/protocols'

export interface HttpPostClient {
  post: (params: HttpPostClient.Params) => Promise<HttpPostClient.Result>
}

export namespace HttpPostClient {
  export type Params = {
    url: string
    body?: Object
  }

  export type Result = HttpResponse
}
