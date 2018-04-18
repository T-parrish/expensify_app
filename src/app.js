// Application entry point
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter.js'

import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter, sortByDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

// Wipes slate for browser stylings
import 'normalize.css/normalize.css';
import './styles/styles.scss';

console.log('app.js is running');

const store = configureStore();

store.dispatch(addExpense({ description:'water bill', amount: 2000, createdAt:1000 }));
store.dispatch(addExpense({ description:'gas bill', amount: 1500, createdAt:2000 }));
store.dispatch(setTextFilter('bill'));
console.log(store.getState());

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

// //addExpense -> water bill
// //addExpense -> gas bill
// // setTextFilter -> bill
// // getVisibleExpenses -> print to screen
// console.log(store.getState());

ReactDOM.render(<AppRouter />, document.getElementById('app'));