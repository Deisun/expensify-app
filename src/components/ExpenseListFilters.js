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
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input
                            type="text"
                            className="text-input"
                            placeholder="Search Expenses"
                            value={this.props.filters.text}
                            onChange={this.onTextChange}
                        />
                    </div>
                    <div className="input-group__item">
                        <select
                            value={this.props.filters.sortBy}
                            className="select"
                            onChange={this.onSortChange}>
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DatePicker
                            className="datePicker"
                            selectsStart
                            isClearable
                            placeholderText="Start date"
                            selected={this.props.filters.startDate}
                            onChange={date => this.props.setStartDate(date)}
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                        />
                    </div>
                    <div className="input-group__item">
                        <DatePicker
                            className="datePicker"
                            selectsEnd
                            isClearable
                            placeholderText="End date"
                            selected={this.props.filters.endDate}
                            onChange={date => this.props.setEndDate(date)}
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            minDate={this.props.filters.startDate}
                        />
                    </div>
                </div>
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
