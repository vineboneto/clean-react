import * as Helper from './http-mocks'

const localServerUrl = 'http://localhost:5050/api/signup'

export const mockEmailInUseError = (): void => Helper.mockEmailInUseError(localServerUrl)
export const mockUnexpectedError = (): void => Helper.mockUnexpectedError(localServerUrl, 'POST')
