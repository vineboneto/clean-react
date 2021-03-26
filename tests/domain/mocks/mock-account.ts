import { Authentication } from '@/domain/usecases'

import faker from 'faker'

export const mockAccountModel = (): Authentication.Result => ({
  accessToken: faker.random.uuid(),
  name: faker.name.findName()
})

export const mockAuthentication = (): Authentication.Params => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})
