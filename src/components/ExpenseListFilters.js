import React from "react";
import DatePicker from "react-datepicker";
import { connect } from "react-redux"
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "../actions/filters";

class ExpenseListFilters extends React.Component {

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
                    onChange={date => this.props.dispatch(setStartDate(date))}
                    selectsStart
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                />
                <DatePicker
                    selected={this.props.filters.endDate}
                    onChange={date => this.props.dispatch(setEndDate(date))}
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
