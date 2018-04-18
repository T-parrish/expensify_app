// Application entry point
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter.js'

// Wipes slate for browser stylings
import 'normalize.css/normalize.css';
import './styles/styles.scss';

console.log('app.js is running');

ReactDOM.render(<AppRouter />, document.getElementById('app'));