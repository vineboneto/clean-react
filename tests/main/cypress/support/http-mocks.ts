import { Method } from 'axios'
import faker from 'faker'

export const mockInvalidCredentialsError = (url: string): void => {
  cy.intercept('POST', url, {
    statusCode: 401,
    body: {
      error: faker.random.words()
    }
  }).as('request')
}

export const mockUnexpectedError = (url: string, method: Method): void => {
  cy.intercept(method, url, {
    statusCode: faker.helpers.randomize([400, 404, 500]),
    body: {
      error: faker.random.words()
    }
  }).as('request')
}

export const mockOk = (url: string, method: Method, body: any): void => {
  cy.intercept(method, url, {
    statusCode: 200,
    body
  }).as('request')
}
