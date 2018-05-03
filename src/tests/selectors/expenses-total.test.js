import expenses from '../fixtures/expenses';
import getExpensesTotal from '../../selectors/expenses-total';
import moment from 'moment';

test('Should return 0 if no expenses', () => {
    const result = getExpensesTotal([]);
    expect(result).toBe(0);
});

test('Should correctly add up a single expense', () => {
    const result = getExpensesTotal([expenses[0]]);
    expect(result).toBe(750);
});

test('Should correctly add up multiple expenses', () => {
    const result = getExpensesTotal(expenses);
    expect(result).toBe(2000);
});