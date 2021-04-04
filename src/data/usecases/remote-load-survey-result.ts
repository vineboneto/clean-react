import { AccessDeniedError, UnexpectedError } from '@/domain/errors'
import { HttpGetClient, HttpStatusCode } from '@/data/protocols'

export class RemoteLoadSurveyResult {
  constructor (
    private readonly httpGetClient: HttpGetClient,
    private readonly url: string) {}

  async load (): Promise<void> {
    const httpResponse = await this.httpGetClient.get({ url: this.url })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: break
      case HttpStatusCode.forbidden: throw new AccessDeniedError()
      default: throw new UnexpectedError()
    }
  }
}
