import { login, logout } from '../../actions/auth'

test('should generate login object', () => {
    const action = login('xyz')
    expect(action).toEqual({
        type: 'LOGIN',
        uid: 'xyz'
    })
})

test('should generate logout object', () => {
    const action = logout()
    expect(action).toEqual({
        type: 'LOGOUT'
    })
})
