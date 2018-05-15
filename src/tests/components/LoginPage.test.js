import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

let startLogin, wrapper

beforeEach(() => {
    startLogin = jest.fn();
    wrapper = shallow(<LoginPage startLogin = {startLogin}/>);
});

test('should render Login Page correctly', () => {
    expect(wrapper).toMatchSnapshot();
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});

