import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { login, logout, startLogin, startLogout} from '../../actions/auth';

const mockStore = configureStore([thunk]);

test('should setup login action object', () => {
    const action = login('abc123');
    expect(action).toEqual({
        type: 'LOGIN',
        uid: 'abc123'
    });
});

test('should setup logout action object', () => {
    const action = logout();
    expect(action).toEqual({
        type:'LOGOUT'
    });
});