import { AccessDeniedError, UnexpectedError } from '@/domain/errors'
import { HttpGetClient, HttpStatusCode } from '@/data/protocols'
import { LoadSurveyResult } from '@/domain/usecases'

export class RemoteLoadSurveyResult implements LoadSurveyResult {
  constructor (
    private readonly httpGetClient: HttpGetClient<RemoteLoadSurveyResult.Model>,
    private readonly url: string) {}

  async load (): Promise<LoadSurveyResult.Model> {
    const httpResponse = await this.httpGetClient.get({ url: this.url })
    const remoteSurveyResult = httpResponse.body
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return { ...remoteSurveyResult, date: new Date(remoteSurveyResult.date) }
      case HttpStatusCode.forbidden: throw new AccessDeniedError()
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteLoadSurveyResult {
  export type Model = {
    question: string
    date: string
    answers: AnswerModel[]
  }

  type AnswerModel = {
    image?: string
    answer: string
    count: number
    percent: number
  }
}
