import * as Http from './http-mocks'

import faker from 'faker'

const localServerUrl = 'http://localhost:5050/api/login'

export const mockInvalidCredentialsError = (): void => Http.mockUnauthorizedError(localServerUrl)
export const mockUnexpectedError = (): void => Http.mockServerError(localServerUrl, 'POST')
export const mockOk = (): void => Http.mockOk(localServerUrl, 'POST', { accessToken: faker.random.uuid(), name: faker.name.findName() })
