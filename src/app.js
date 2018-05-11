// Application entry point
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import AppRouter from './routers/AppRouter.js';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter, sortByDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

// Wipes slate for browser stylings
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// Initiates firebase connection
import './firebase/firebase';

console.log('app.js is running');

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Loading... </p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
});

