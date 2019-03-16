import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import {Header, Footer, Cart, SearchResults, Products, Orders} from './components/layouts'
import {Home, NotFound, Register, AddProduct} from './components/views'
import {connect} from 'react-redux'
import './index.css'

class App extends Component {
    render() {
        return (
            <Router>
                <div style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                    <Header
                        // loggIn={this.props.setLoggedIn}
                        // setUserEmail={this.props.setEmail}
                        // setUserPassword={this.props.setPassword}
                        user={this.props.user}
                        // setUsername={this.props.setName}
                        // setToken={this.props.setToken}
                        // setRole={this.props.setRole}
                    />
                    <div className="" style={{ paddingLeft: '35%', paddingRight: '20%' }}>
                        <Switch>
                            <Route path='/' exact component={Home}/>
                            <Route path='/cart' exact component={Cart}/>
                            <Route path='/create' exact component={AddProduct}/>
                            <Route path='/results' exact component={SearchResults}/>
                            <Route path='/products' exact component={Products}/>
                            <Route path='/register' exact component={Register}/>
                            <Route path='/orders' exact component={Orders}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setName: (name) => {
//             dispatch({
//                 type: "SETNAME",
//                 payload: name
//             })
//         },
//         setPassword: (password) => {
//             dispatch({
//                 type: "SETPASSWORD",
//                 payload: password
//             })
//         },
//         setEmail: (email) => {
//             dispatch({
//                 type: "SETEMAIL",
//                 payload: email
//             })
//         },
//         setToken: (token) => {
//             dispatch({
//                 type: "SETTOKEN",
//                 payload: token
//             })
//         },
//         setRole: (role) => {
//             dispatch({
//                 type: "SETROLE",
//                 payload: role
//             })
//         },
//         setLoggedIn: (toggle) => {
//             dispatch({
//                 type: "SETLOGGEDIN",
//                 payload: toggle
//             })
//         },
//     };
// };

export default connect(mapStateToProps)(App);
