export interface HttpGetClient {
  get (params: HttpGetClient.Params): HttpGetClient.Result
}

export namespace HttpGetClient {
  export type Params = {
    url: string
  }

  export type Result = Promise<void>
}
