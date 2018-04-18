import { createStore } from 'redux';

// action generators

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count = 0 } = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

const store = createStore((state={ count:0 }, action ) => {
    // switch is preferable to if-else statements
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
});

// Does something whenever the state changes
// call unsubscribe to cut subscription later
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 4 }));

store.dispatch(decrementCount({ decrementBy: 100 }));

store.dispatch(setCount({count: 20}));

store.dispatch(resetCount());


// // Value of action type is all caps by convention
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

// store.dispatch({
//     type: 'INCREMENT'
// });

// unsubscribe();

// store.dispatch({
//     type: 'RESET'
// });

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });
