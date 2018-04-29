import moment from 'moment';

const filters = {
    text: '',
    sortBy: 'date',
    StartDate: undefined,
    endDate: undefined
};

const altFilters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: moment(0).add(3, 'days')
};

export { filters, altFilters };