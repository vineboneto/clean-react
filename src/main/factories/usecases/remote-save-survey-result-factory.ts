import { makeAuthorizeHttpClientDecorator } from '@/main/factories/decorators'
import { makeApiUrl } from '@/main/factories/http'
import { SaveSurveyResult } from '@/domain/usecases'
import { RemoteSaveSurveyResult } from '@/data/usecases'

export const makeRemoteSaveSurveyResult = (id: string): SaveSurveyResult => {
  return new RemoteSaveSurveyResult(makeAuthorizeHttpClientDecorator(), makeApiUrl(`/surveys/${id}/results`))
}
