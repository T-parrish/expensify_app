import React from 'react';
import { shallow } from 'enzyme';
import PageNotFound from '../../components/PageNotFound';
import expenses from '../fixtures/expenses';

test('Should render 404 page', () => {
    const wrapper = shallow(<PageNotFound />);
    expect(wrapper).toMatchSnapshot();
});