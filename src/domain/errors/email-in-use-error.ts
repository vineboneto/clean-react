export class EmailInUseError extends Error {
  constructor () {
    super('Esse e-mail já em uso')
    this.name = 'EmailInUseError'
  }
}
