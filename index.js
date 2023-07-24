const {createStore} = require('redux');

// Variable Declared for action type
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_USER = 'ADD_USER';

// State Declaration
const initialCounter = {
    count: 0,
}

// Action Declaration 
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

// Reducer
const counterReducer = (state=initialCounter, action) => {
    switch (action.type) {
        case INCREMENT:
            
            return {
                ...state,
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


// Create Store
const store = createStore(counterReducer);
store.subscribe(() => {
    console.log(store.getState());
})

// Dispatch action
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())

// Alhdmulillah
