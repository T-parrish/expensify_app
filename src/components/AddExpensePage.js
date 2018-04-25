import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
	onSubmit = (expense) => {
		this.props.onSubmit(expense);
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
	onSubmit: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);