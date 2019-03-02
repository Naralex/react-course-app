import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const initialState = {
    username: 'Pesho',
    isLoggedIn: false,
    showMenu: false
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        // case 'SET_NAME':
        //     state = {
        //         ...state,
        //         name: action.payload
        //     };
        //     break;
        // case 'SET_AGE':
        //     state = {
        //         ...state,
        //         age: action.payload
        //     };
        //     break;
        case 'TOGGLE_MENU':
            state = {
                ...state,
                showMenu: action.payload
            };
            break;
    }
    return state
};

const store = createStore(userReducer, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));