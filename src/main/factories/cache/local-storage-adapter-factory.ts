import { SetStorage } from '@/data/protocols'
import { LocalStorageAdapter } from '@/infra/cache/local-storage'

export const makeLocalStorageAdapter = (): SetStorage => {
  return new LocalStorageAdapter()
}
