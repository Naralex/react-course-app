import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Header, Footer, Cart, SearchResults, Products, Orders} from './components/layouts'
import {Home, NotFound, Register, Login} from './components/views'
import {connect} from 'react-redux'
import './index.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Fragment>
                        <Header user={this.props.user} isLoggedIn={this.props.isLoggedIn} showMenu={this.props.showMenu} toggleMenu={this.props.toggleMenu}/>
                        <Switch>
                            <Route path='/' exact component={Home} />
                            <Route path='/cart' exact component={Cart} />
                            <Route path='/results' exact component={SearchResults} />
                            <Route path='/products' exact component={Products} />
                            <Route path='/register' exact component={Register} />
                            <Route path='/login' exact component={Login} />
                            <Route path='/orders' exact component={Orders} />
                            <Route component={NotFound} />
                        </Switch>
                        <Footer/>
                    </Fragment>
                </Router>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.username,
        isLoggedIn: state.isLoggedIn,
        showMenu: state.showMenu
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch({
                type: "SET_NAME",
                payload: name
            })
        },
        toggleMenu: (menu) => {
            dispatch({
                type: "TOGGLE_MENU",
                payload: menu
            })
        },
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
