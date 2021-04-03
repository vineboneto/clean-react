import * as Http from './http-mocks'

const localServerUrl = 'http://localhost:5050/api/surveys'

export const mockUnexpectedError = (): void => Http.mockServerError(localServerUrl, 'GET')
export const mockAccessDeniedError = (): void => Http.mockForbiddenError(localServerUrl, 'GET')
