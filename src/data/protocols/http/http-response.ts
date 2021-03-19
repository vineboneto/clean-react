export enum HttpStatusCode {
  noContent = 201,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  ok = 200,
  notFound = 404,
  serverError = 500
}

export type HttpResponse<T> = {
  statusCode: HttpStatusCode
  body?: T
}
