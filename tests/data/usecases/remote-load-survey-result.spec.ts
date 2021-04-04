import { RemoteLoadSurveyResult } from '@/data/usecases'
import { HttpGetClientSpy } from '@/tests/data/mocks'
import faker from 'faker'

describe('RemoteLoadSurveyResult', () => {
  test('Should call HttpGetClient with correct URL', async () => {
    const httpGetClientSpy = new HttpGetClientSpy()
    const url = faker.internet.url()
    const sut = new RemoteLoadSurveyResult(httpGetClientSpy, url)
    await sut.load()
    expect(httpGetClientSpy.url).toBe(url)
  })
})
