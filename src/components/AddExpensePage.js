import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

// props.history.push(<route to page>)

const AddExpensePage = (props) => (
	<div>
		<p>This is from my AddExpensePage component</p>
		<ExpenseForm 
			onSubmit={(expense) => {
				props.dispatch(addExpense(expense));
				props.history.push('/')
			}}
		/>
	</div>
);

export default connect()(AddExpensePage);