import { LocalStorageAdapter } from '@/infra/cache/local-storage'

import faker from 'faker'
import { cleanup } from '@testing-library/react'
import 'jest-localstorage-mock'

const makeSut = (): LocalStorageAdapter => new LocalStorageAdapter()

describe('LocalStorageAdapter', () => {
  afterEach(cleanup)
  beforeEach(() => {
    localStorage.clear()
  })

  test('Should call localStorage.setItem with correct values', () => {
    const sut = makeSut()
    const key = faker.database.column()
    const value = faker.random.objectElement<{ anyField: string }>()
    sut.set(key, value)
    expect(localStorage.setItem).toHaveBeenCalledWith(key, JSON.stringify(value))
  })

  test('Should call localStorage.getItem with correct values', () => {
    const sut = makeSut()
    const key = faker.database.column()
    const value = faker.random.objectElement<{ anyField: string }>()
    const getItemSpy = jest.spyOn(localStorage, 'getItem').mockReturnValueOnce(JSON.stringify(value))
    const obj = sut.get(key)
    expect(obj).toEqual(value)
    expect(getItemSpy).toHaveBeenCalledWith(key)
  })
})
