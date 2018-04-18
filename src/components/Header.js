import React from 'react';
import {NavLink} from 'react-router-dom'

const Header = () => (
	<div>
		<h1>Expensify!</h1>
		<ol>
			<li><NavLink to='/' activeClassName="is-active" exact={true}>Home page</NavLink></li>
			<li><NavLink to='/create' activeClassName="is-active">Create Expense</NavLink></li>
			<li><NavLink to='/help' activeClassName="is-active">Help Page</NavLink></li>
		</ol>
	</div>
);

export default Header;