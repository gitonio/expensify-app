import authReducer from '../../reducers/auth'

test('should login', () => {
    const action = {
        type: 'LOGIN',
        uid: 'xyz'

    }

    const state = authReducer({}, action)
    expect(state).toEqual({uid: 'xyz'})
})

test('should logout', () => {
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer({ uid: 'abc123'}, action)
    expect(state).toEqual({})
})