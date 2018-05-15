import authReducer from '../../reducers/auth';

test('should setup default auth values', () => {
    const state = authReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({});
});

test('should set uid', () => {
    const currentstate = {};
    const action = {
        type: 'LOGIN',
        uid: 'abc123'
    };

    const state = authReducer(currentstate, action);
    expect(state.uid).toBe('abc123');
});

test('should logout and remove uid', () => {
    const currentstate = {uid:'abc123'};
    const action = {type:'LOGOUT'};

    const state = authReducer(currentstate, action);
    expect(state).toEqual({});
});