import moment from 'moment';

export default [{
    id: '1',
    description: 'Ramen',
    note: '',
    amount: 750,
    createdAt: 0
}, {
    id: '2',
    description: 'Sushi',
    note: '',
    amount: 350,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},{
    id: '3',
    description: 'Donburri',
    note: '',
    amount: 900,
    createdAt: moment(0).add(4, 'days').valueOf()
}];