import React from "react";
import DatePicker from "react-datepicker";
import { connect } from "react-redux"
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "../actions/filters";

export class ExpenseListFilters extends React.Component {
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };

    onSortChange = (e) => {
        if (e.target.value === 'date') {
            this.props.sortByDate();
        } else if (e.target.value === 'amount') {
            this.props.sortByAmount();
        }
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.props.filters.text}
                    onChange={this.onTextChange}
                />
                <select
                    value={this.props.filters.sortBy}
                    onChange={this.onSortChange}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>

                <DatePicker
                    selected={this.props.filters.startDate}
                    onChange={date => this.props.setStartDate(date)}
                    selectsStart
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                />
                <DatePicker
                    selected={this.props.filters.endDate}
                    onChange={date => this.props.setEndDate(date)}
                    selectsEnd
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    minDate={this.props.filters.startDate}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ( {filters: state.filters} );


const mapDispatchToProps = (dispatch) => ( {
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
} )

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
