import React from 'react';
import { connect } from 'react-router';
import ExpenseForm from './ExpenseForm';

const EditExpense = () => (
	<div>
		<ExpenseForm
			onSubmit={() => {
				console.log('updated, ', expense);
			}} 
		/>
	</div>
);

const mapStateToProps = (state, props) => {
	return {
		expense: state.expenses.find((expense) => {
			return expense.id === props.match.params.id;
		})
	};
};

export default connect(mapStateToProps)(EditExpense);

