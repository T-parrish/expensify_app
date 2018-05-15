import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboard from '../components/ExpenseDashboard.js';
import AddExpensePage from '../components/AddExpensePage.js';
import HelpPage from '../components/HelpPage.js';
import PageNotFound from '../components/PageNotFound.js';
import EditExpense from '../components/EditExpense.js';
import LoginPage from '../components/LoginPage.js';
import PrivateRoute from './PrivateRoute.js';

export const history = createHistory();

// Switch goes through all the routes until it finds a match
const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>
				<Route path="/" component={LoginPage} exact={true} />
				<PrivateRoute path="/dashboard" component={ExpenseDashboard} exact={true} />
				<PrivateRoute path="/create" component={AddExpensePage} exact={true} />
				<PrivateRoute path="/help" component={HelpPage} exact={true} />
				<PrivateRoute path="/edit/:id" component={EditExpense} />
				<Route component={PageNotFound} />
			</Switch>
		</div>
    </Router>
);

export default AppRouter;