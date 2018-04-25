import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

// props.history.push(<route to page>)

const AddExpensePage = (props) => (
	<div>
		<p>Add Expense</p>
		<ExpenseForm 
			onSubmit={(expense) => {
				// invocation from before adding mapDispatchToProps
				// props.dispatch(addExpense(expense));

				// More testable format with mapDispatchToProps
				props.onSubmit(expense);
				props.history.push('/');
			}}
		/>
	</div>
);

const mapDispatchToProps = (dispatch) => ({
	onSubmit: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);