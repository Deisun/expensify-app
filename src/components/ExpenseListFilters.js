import React from "react";
import DatePicker from "react-datepicker";
import { connect } from "react-redux"
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "../actions/filters";

class ExpenseListFilters extends React.Component {
    state = {

    }

    onStartDateChange = (date) => {
        this.props.dispatch(setStartDate(date));
    };

    onEndDateChange = (date) => {
        this.props.dispatch(setEndDate(date));
    };

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.props.filters.text}
                    onChange={(e) => {
                        this.props.dispatch(setTextFilter(e.target.value));
                    }}
                />
                <select
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        if (e.target.value === 'date') {
                            this.props.dispatch(sortByDate());
                        } else if (e.target.value === 'amount') {
                            this.props.dispatch(sortByAmount());
                        }
                    }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>

                <DatePicker
                    selected={this.props.filters.startDate}
                    onChange={this.onStartDateChange}
                    selectsStart
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                />
                <DatePicker
                    selected={this.props.filters.endDate}
                    onChange={this.onEndDateChange}
                    selectsEnd
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    minDate={this.props.filters.startDate}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }

}

export default connect(mapStateToProps)(ExpenseListFilters);
