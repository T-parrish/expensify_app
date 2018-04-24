import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../../actions/filters';
import moment from 'moment';


test('Should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('Should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('Should generate set text filter action object', () => {
    const action = setTextFilter('loop')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'loop'
    });
});

test('Should generate set text filter action object without text input', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('Should generate sort by date action object', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('Should generate sort by amount action object', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});