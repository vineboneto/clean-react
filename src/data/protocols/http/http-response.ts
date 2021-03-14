export enum HttpStatusCode {
  unauthorized = 401,
  noContent = 201,
  badRequest = 400,
  ok = 200,
  notFound = 404,
  serverError = 500
}

export type HttpResponse<T> = {
  statusCode: HttpStatusCode
  body?: T
}