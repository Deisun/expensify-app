import React from "react";
import ExpenseForm from "./ExpenseForm";
import {connect} from 'react-redux';
import {startAddExpense} from "../actions/expenses";

export class CreateExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.addExpense(expense);
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <h3>Create Expense</h3>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

// const CreateExpensePage = (props) => (
//     <div>
//         <h3>Create Expense</h3>
//         <ExpenseForm
//             onSubmit={(expense) => {
//                 //props.dispatch(startAddExpense(expense));
//                 props.onSubmit(expense);
//
//                 // uses browser routing to go back to dashboard
//                 props.history.push('/');
//                 console.log("created: ", expense)
//             }}
//         />
//     </div>
// )

const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(CreateExpensePage);
