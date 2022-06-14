import { SignUpController } from './signup'

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'any_email@email.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const htttpResponse = sut.handle(httpRequest)
    expect(htttpResponse.statusCode).toBe(400)
    expect(htttpResponse.body).toEqual(new Error('Missing param: name'))
  })
})

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'any_name',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const htttpResponse = sut.handle(httpRequest)
    expect(htttpResponse.statusCode).toBe(400)
    expect(htttpResponse.body).toEqual(new Error('Missing param: email'))
  })
})
