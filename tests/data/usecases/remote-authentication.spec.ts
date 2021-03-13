import { RemoteAuthentication } from '@/data/usecases'
import { HttpPostClientSpy } from '@/tests/data/mocks'

describe('Remote Authentication', () => {
  test('Should call HttpClient with correct URL', async () => {
    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
