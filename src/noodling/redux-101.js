import { createStore } from 'redux';

const store = createStore((state={ count:0 }, action ) => {
    // switch is preferable to if-else statements
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
            return {
                count: state.count - decrementBy
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

// Value of action type is all caps by convention
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

store.dispatch({
    type: 'INCREMENT'
});

// unsubscribe();

store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});
