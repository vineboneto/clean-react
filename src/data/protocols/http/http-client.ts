export interface HttpClient<R = any> {
  request (data: HttpRequest): Promise<HttpResponse<R>>
}

export enum HttpStatusCode {
  noContent = 201,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  ok = 200,
  notFound = 404,
  serverError = 500
}

export type HttpMethod = 'post' | 'get' | 'put' | 'delete'

export type HttpRequest = {
  url: string
  method: HttpMethod
  headers?: any
  body?: any
}

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode
  body?: T
}
