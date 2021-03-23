import { HttpPostClient } from '@/data/protocols'

import axios, { AxiosResponse } from 'axios'

export class AxiosHttpClient implements HttpPostClient {
  async post (params: HttpPostClient.Params): Promise<HttpPostClient.Result> {
    let httpResponse: AxiosResponse
    try {
      httpResponse = await axios.post(params.url, params.body)
    } catch (error) {
      httpResponse = error.response
    }
    return {
      statusCode: httpResponse.status,
      body: httpResponse.data
    }
  }
}
