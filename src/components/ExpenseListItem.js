import React from 'react'
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({dispatch, description, amount, createdAt, id}) => (
    <div>
        <h3>{description} - <Link to={`/edit/${id}`}> edit </Link> </h3>
        <p>{amount} - {createdAt}</p>
        <button
            onClick={() => {
                dispatch(removeExpense({ id }))
            }}
        > Remove </button>
    </div>
);


export default connect()(ExpenseListItem)