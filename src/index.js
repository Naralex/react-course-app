import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';

const initialState = {
    user: {
        username: '',
        email: '',
        password: '',
        token: '',
        isLoggedIn: false
    },
    basket: {
        products: [],
        productsCount: 0,
        productsCost: 0
    },
    catalogItems: {},
    errors: []
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SETNAME':
            state = {
                ...state,
                user: {
                    ...state.user,
                    username: action.payload,
                }
            };
            break;
        case 'SETPASSWORD':
            state = {
                ...state,
                user: {
                    ...state.user,
                    password: action.payload,
                }
            };
            break;
        case 'SETEMAIL':
            state = {
                ...state,
                user: {
                    ...state.user,
                    email: action.payload,
                }
            };
            break;
        case 'SETLOGGEDIN':
            state = {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: action.payload
                }
            };
            break;
        case 'SETTOKEN':
            state = {
                ...state,
                user: {
                    ...state.user,
                    token: action.payload
                }
            };
            break;
    }
    return state
};

// const basketReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'TOGGLE_MENU':
//             state = {
//                 ...state,
//                 layout: {
//                     showMenu: (state.layout.showMenu ? false : true)
//                 }
//             };
//             break;
//     }
//     return state
// };

const store = createStore(userReducer, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));