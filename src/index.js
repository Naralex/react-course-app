import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';

const userReducer = (state = {
    user: {
        username: '',
        email: '',
        password: '',
        token: '',
        role: '',
        isLoggedIn: false
    },
    basket: {
        products: [],
        productsCount: 0,
        productsCost: 0
    },
    catalogItems: {},
    errors: []
}, action) => {
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
        case 'SETROLE':
            state = {
                ...state,
                user: {
                    ...state.user,
                    role: action.payload
                }
            };
            break;
    }
    return state
};

const newProductReducer = (state = {
                               productName: '',
                               manufacturer: '',
                               description: '',
                               imageLink: '',
                               retailPrice: '',
                               wholesalePrice: ''
                           }
    , action) => {
    switch (action.type) {
        case 'SETPRODUCTNAME':
            state = {
                ...state,
                productName: action.payload,
            };
            break;
        case 'SETMANUFACTURER':
            state = {
                ...state,
                manufacturer: action.payload,

            };
            break;
        case 'SETDESCTIPRTION':
            state = {
                ...state,
                description: action.payload,

            };
            break;
        case 'SETIMAGELINK':
            state = {
                ...state,
                imageLink: action.payload,
            };
            break;
        case 'SETWHOLESALEPRICE':
            state = {
                ...state,
                retailPrice: action.payload,

            };
            break;
        case 'SETRETAILPRICE':
            state = {
                ...state,
                wholesalePrice: action.payload,

            };
            break;
    }
    return state
};

const store = createStore(combineReducers({userReducer, newProductReducer}),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));