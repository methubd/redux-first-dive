const {createStore} = require('redux');

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_USER = 'ADD_USER'

// state
const InitialCounterState = {
    count: 0,
    
}


// action object - type, payload

// INCREMENT

const incrementCounter = () => {
    return {
        type: INCREMENT,
    }
}

const decrementCounter = () => {
    return {
        type: DECREMENT,
    }
}

// DECREMENT

// create Reducer for counter
const counterReducer = (state={InitialCounterState}, action) => {

    switch (action.type) {
        case INCREMENT:
            return {
                count: state.count + 1
            }

        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }            
    
        default:
            state;
    }

}


// create store
const store = createStore(counterReducer)
store.subscribe(() => {
    console.log(store.getState());
})

// dispatch action
store.dispatch(incrementCounter())