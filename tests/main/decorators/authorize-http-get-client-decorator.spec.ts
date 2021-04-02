import { AuthorizeHttpGetClientDecorator } from '@/main/decorators'
import { mockGetRequest, GetStorageSpy } from '@/tests/data/mocks'

type SutTypes = {
  sut: AuthorizeHttpGetClientDecorator
  getStorageSpy: GetStorageSpy
}

const makeSut = (): SutTypes => {
  const getStorageSpy = new GetStorageSpy()
  const sut = new AuthorizeHttpGetClientDecorator(getStorageSpy)
  return {
    sut,
    getStorageSpy
  }
}

describe('AuthorizeHttpGetClientDecorator', () => {
  test('Should call GetStorage with correct value', async () => {
    const { sut, getStorageSpy } = makeSut()
    await sut.get(mockGetRequest())
    expect(getStorageSpy.key).toBe('account')
  })
})
