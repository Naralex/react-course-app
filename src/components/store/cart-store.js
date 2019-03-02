import { createStore } from 'redux'

const initialState = {
    username: 'Max'
};

function reduder(state = initialState, action) {
    switch (action.type) {
        case 'New': (
            state ={
                ...state,
                username: action.payload.username
            });
            break;
        default:
            return state
    }
}

let store = createStore(reduder,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;