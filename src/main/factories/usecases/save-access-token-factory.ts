import { LocalSaveAccessToken } from '@/data/usecases'
import { SaveAccessToken } from '@/domain/usecases'
import { LocalStorageAdapter } from '@/infra/cache/local-storage'

export const makeSaveAccessToken = (): SaveAccessToken => {
  const localStorageAdapter = new LocalStorageAdapter()
  return new LocalSaveAccessToken(localStorageAdapter)
}
