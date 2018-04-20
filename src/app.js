// Application entry point
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'react-dates/initialize';

import AppRouter from './routers/AppRouter.js';
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
store.dispatch(addExpense({ description:'rent', amount: 23456, createdAt:100 }));

// store.dispatch(setTextFilter('gas'));
console.log(store.getState());

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

// //addExpense -> water bill
// //addExpense -> gas bill
// // setTextFilter -> bill
// // getVisibleExpenses -> print to screen
// console.log(store.getState());


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));