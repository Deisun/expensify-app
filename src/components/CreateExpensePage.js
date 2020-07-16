import React from "react";
import ExpenseForm from "./ExpenseForm";
import {connect} from 'react-redux';
import {addExpense} from "../actions/expenses";

const CreateExpensePage = (props) => (
    <div>
        <h3>Create Expense</h3>
        <ExpenseForm
            onSubmit={(expense) => {
                props.dispatch(addExpense(expense));
                // uses browser routing to go back to dashboard
                props.history.push('/');
                console.log("created: ", expense)
            }}
        />
    </div>
)

export default connect()(CreateExpensePage);
