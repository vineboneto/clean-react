import * as Http from './http-mocks'

import faker from 'faker'

const localServerUrl = 'http://localhost:5050/api/signup'

export const mockEmailInUseError = (): void => Http.mockForbiddenError(localServerUrl, 'POST')
export const mockUnexpectedError = (): void => Http.mockServerError(localServerUrl, 'POST')
export const mockOk = (): void => Http.mockOk(localServerUrl, 'POST', { accessToken: faker.random.uuid(), name: faker.name.findName() })
