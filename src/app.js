// Application entry point
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
// Wipes slate for browser stylings
import 'normalize.css/normalize.css';
import './styles/styles.scss';

console.log('app.js is running');

const ExpenseDashboard = () => (
	<div>
		<p>This is from my Dashboard component</p>
	</div>
);

const AddExpensePage = () => (
	<div>
		<p>This is from my AddExpensePage component</p>
	</div>
);

const HelpPage = () => (
	<div>
		<p>This is from my HelpPage component</p>
	</div>
);

const EditExpense = () => (
	<div>
		<p>This is from my EditExpense component</p>
	</div>
);

const routes = (
    <BrowserRouter>
		<div>
			<Route path="/" component={ExpenseDashboard} exact={true} />
			<Route path="/create" component={AddExpensePage} exact={true} />
			<Route path="/help" component={HelpPage} exact={true} />
			<Route path="/edit" component={EditExpense} exact={true} />
		</div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));