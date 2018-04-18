import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header.js';
import ExpenseDashboard from '../components/ExpenseDashboard.js';
import AddExpensePage from '../components/AddExpensePage.js';
import HelpPage from '../components/HelpPage.js';
import PageNotFound from '../components/PageNotFound.js';
import EditExpense from '../components/EditExpense.js';

// Switch goes through all the routes until it finds a match
const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={ExpenseDashboard} exact={true} />
				<Route path="/create" component={AddExpensePage} exact={true} />
				<Route path="/help" component={HelpPage} exact={true} />
				<Route path="/edit/:id" component={EditExpense} />
				<Route component={PageNotFound} />
			</Switch>
		</div>
    </BrowserRouter>
);

export default AppRouter;