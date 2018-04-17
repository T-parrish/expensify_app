// Application entry point
import React from 'react';
import ReactDOM from 'react-dom';
// Wipes slate for browser stylings
import 'normalize.css/normalize.css';
import './styles/styles.scss';

console.log('app.js is running');

ReactDOM.render(<p>This is my boilerplate</p>, document.getElementById('app'));
