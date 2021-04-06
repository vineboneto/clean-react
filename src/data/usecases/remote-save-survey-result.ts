import { HttpClient, HttpStatusCode } from '@/data/protocols'
import { SaveSurveyResult } from '@/domain/usecases'
import { RemoteSurveyResultModel } from '@/data/models'
import { AccessDeniedError } from '@/domain/errors'

export class RemoteSaveSurveyResult implements SaveSurveyResult {
  constructor (
    private readonly httpClient: HttpClient<RemoteSaveSurveyResult.Model>,
    private readonly url: string) {}

  async save (params: SaveSurveyResult.Params): Promise<SaveSurveyResult.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'put',
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.forbidden: throw new AccessDeniedError()
      default: return null
    }
  }
}

export namespace RemoteSaveSurveyResult {
  export type Model = RemoteSurveyResultModel
}
