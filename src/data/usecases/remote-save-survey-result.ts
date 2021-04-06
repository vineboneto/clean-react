import { HttpClient } from '@/data/protocols'
import { SaveSurveyResult } from '@/domain/usecases'
import { RemoteSurveyResultModel } from '@/data/models'

export class RemoteSaveSurveyResult implements SaveSurveyResult {
  constructor (
    private readonly httpClient: HttpClient<RemoteSaveSurveyResult.Model>,
    private readonly url: string) {}

  async save (params: SaveSurveyResult.Params): Promise<SaveSurveyResult.Model> {
    await this.httpClient.request({ url: this.url, method: 'put' })
    return null
  }
}

export namespace RemoteSaveSurveyResult {
  export type Model = RemoteSurveyResultModel
}
