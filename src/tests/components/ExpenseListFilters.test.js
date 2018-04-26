import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import expenses from '../fixtures/expenses';


let onSubmit, history, wrapper;

beforeEach(() => {
    onDatesChange = jest.fn();
    onFocusChange = jest.fn();
    onTextChange = jest.fn();
    onSortChange = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<ExpenseListFilters 
        onSubmit={onSubmit} 
        history={history} />);
});