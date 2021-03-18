import { LocalStorageAdapter } from '@/infra/cache/local-storage'

import faker from 'faker'
import { cleanup } from '@testing-library/react'
import 'jest-localstorage-mock'

describe('LocalStorageAdapter', () => {
  afterEach(cleanup)
  beforeEach(() => {
    localStorage.clear()
  })

  test('Should call localStorage with correct values', async () => {
    const sut = new LocalStorageAdapter()
    const key = faker.database.column()
    const value = faker.random.word()
    await sut.set(key, value)
    expect(localStorage.setItem).toHaveBeenCalledWith(key, value)
  })
})
