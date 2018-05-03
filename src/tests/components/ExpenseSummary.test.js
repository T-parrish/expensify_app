import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';

test('should correctly render Expense totals with one expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={456} />)
    expect(wrapper).toMatchSnapshot();
}); 

test('should correctly render Expense totals with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={3} expensesTotal={5367} />)
    expect(wrapper).toMatchSnapshot();
});
