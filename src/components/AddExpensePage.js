import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';
import { startAddExpense } from '../actions/expenses'

export class AddExpensePage extends React.Component {
	onSubmit = (expense) => {
		this.props.startAddExpense(expense);
		this.props.history.push('/');
	};
	render() {
		return (
			<div>
				<p>Add Expense</p>
				<ExpenseForm onSubmit={this.onSubmit}/>
			</div>
		);
	};
};

const mapDispatchToProps = (dispatch) => ({
	startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);