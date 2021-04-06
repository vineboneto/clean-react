import { AccessDeniedError, UnexpectedError } from '@/domain/errors'
import { HttpClient, HttpStatusCode } from '@/data/protocols'
import { LoadSurveyResult } from '@/domain/usecases'
import { RemoteSurveyResultModel } from '@/data/models'

export class RemoteLoadSurveyResult implements LoadSurveyResult {
  constructor (
    private readonly httpClient: HttpClient<RemoteLoadSurveyResult.Model>,
    private readonly url: string) {}

  async load (): Promise<LoadSurveyResult.Model> {
    const httpResponse = await this.httpClient.request({ url: this.url, method: 'get' })
    const remoteSurveyResult = httpResponse.body
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return { ...remoteSurveyResult, date: new Date(remoteSurveyResult.date) }
      case HttpStatusCode.forbidden: throw new AccessDeniedError()
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteLoadSurveyResult {
  export type Model = RemoteSurveyResultModel
}
