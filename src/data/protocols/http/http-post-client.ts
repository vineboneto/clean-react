import { HttpResponse } from '@/data/protocols'

export interface HttpPostClient<ResponseType = any> {
  post: (params: HttpPostClient.Params) => Promise<HttpPostClient.Result<ResponseType>>
}

export namespace HttpPostClient {
  export type Params = {
    url: string
    body?: any
  }

  export type Result<ResponseType = any> = HttpResponse<ResponseType>
}
