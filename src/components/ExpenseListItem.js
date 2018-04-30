import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
    <div>
        <h3>{description} - <Link to={`/edit/${id}`}> edit </Link> </h3>
        <p>
            {numeral(amount / 100).format('$0,0.00')} 
            - 
            {moment(createdAt).format('MMMM Do, YYYY')}
        </p>
    </div>
);


export default ExpenseListItem