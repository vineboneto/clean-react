import * as Helper from './http-mocks'

import faker from 'faker'

const localServerUrl = 'http://localhost:5050/api/login'

export const mockInvalidCredentialsError = (): void => Helper.mockInvalidCredentialsError(localServerUrl)
export const mockUnexpectedError = (): void => Helper.mockUnexpectedError(localServerUrl, 'POST')
export const mockOk = (): void => Helper.mockOk(localServerUrl, 'POST', { accessToken: faker.random.uuid(), name: faker.name.findName() })
export const mockInvalidData = (): void => Helper.mockOk(localServerUrl, 'POST', { invalid: faker.random.uuid() })
