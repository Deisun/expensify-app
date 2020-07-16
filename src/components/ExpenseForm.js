import React from "react";
import DatePicker from "react-datepicker";
import {format} from "date-fns";

import "react-datepicker/dist/react-datepicker.css";

// const now = format(new Date(), "MMM do, yyyy")

export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount: '',
        createdAt: new Date(),
        calendarFocused: false
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    }

    onAmountChange = (e) => {
        const amount = e.target.value;

        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}));
        }
    }

    onDateChange = (createdAt) => {
       this.setState(() => ({createdAt}));
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />

                    <DatePicker
                        selected={this.state.createdAt}
                        onChange={this.onDateChange}
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value = {this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}
