import { HttpGetClient } from 'data/protocols'

export class RemoteLoadSurveyResult {
  constructor (
    private readonly httpGetClient: HttpGetClient,
    private readonly url: string) {}

  async load (): Promise<void> {
    await this.httpGetClient.get({ url: this.url })
    return null
  }
}
