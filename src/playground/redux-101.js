import React from "react";
import { createStore} from "redux";

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            // check if incrementBy is a number
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 0;
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
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

const unsubscribe = store.subscribe( () => {
    console.log(store.getState());
})

store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

// unsubscribe();

store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'DECREMENT'
});

store.dispatch({
    type: 'SET',
    count: 101
})

const Redux101 = () => (
    <div>
        Hello
    </div>
);

export default Redux101
