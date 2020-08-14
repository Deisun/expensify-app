import React from "react";
import {Link} from "react-router-dom";
import { format } from 'date-fns'
import numeral from 'numeral';

const ExpenseListItem = ({id, description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>
            {numeral(amount / 100).format('$0,0.00')} - {format(createdAt, 'MMMM do, yyyy')}
        </p>
    </div>
);

export default ExpenseListItem;