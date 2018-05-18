import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate  } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused }))
    };

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    };

    onSortChange = (e) => {
        if (e.target.value === 'date') {
            this.props.sortByDate();
        } else if (e.target.value === 'amount') {
            this.props.sortByAmount();
        }
    };

    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-sub">
                        <div className="input-group__item">
                            <input 
                                className="text-input text-input__filter"
                                type="text" 
                                placeholder="search expenses"
                                value={this.props.filters.text} 
                                onChange={this.onTextChange}
                            />
                        </div>
                        <div className="input-group__item">
                            <select
                                className="select"
                                value = {this.props.filters.sortBy}
                                onChange={this.onSortChange}
                            >
                                <option value = "date"> Date </option>
                                <option value = "amount"> Amount </option>
                            </select>
                        </div>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker
                            startDate = {this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            startDateId='start'
                            endDateId='end'
                            showClearDates={true}
                            numberOfMonths = {1}
                            isOutsideRange= {() => false}
                        />
                    </div>
                </div>
            </div> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    setStartDate: (startDate) => dispatch(setStartDate(startDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);

