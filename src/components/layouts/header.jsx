import React, {Component, Fragment} from 'react';
import {NavLink} from 'react-router-dom'

export default class extends Component {
    render() {
        return <header>
            <nav className="navbar-menu">
                <NavLink to='/'>Home</NavLink>
                {
                    this.props.isLoggedIn
                        ? <Fragment>
                            <NavLink to='/products' activeClassName="active">Products</NavLink>
                            <input type='text' name='search'/>
                            <button type='button' onClick={`href='/results'`}>Search</button>
                            <label>{this.props.user}</label>
                            <NavLink to='/orders'>My Orders</NavLink>
                            <NavLink to='/cart'>Cart</NavLink>
                            <NavLink to="javascript:void(0)">Logout</NavLink>
                        </Fragment>
                        : <Fragment>
                            <div>
                                {
                                    this.props.showMenu
                                        ? (<div>
                                                <button onClick={() => this.props.toggleMenu(false)}>
                                                    Show menu
                                                </button>
                                                <div className="menu">
                                                    <button> Menu item 1</button>
                                                    <button> Menu item 2</button>
                                                    <button> Menu item 3</button>
                                                </div>
                                            </div>

                                        )
                                        : (
                                            <div>
                                                <button onClick={() => this.props.toggleMenu(true)}>
                                                    Show menu
                                                </button>
                                            </div>
                                        )
                                }
                            </div>
                            {/*<NavLink to='/register' activeClassName="active">Register</NavLink>*/}
                            {/*<NavLink to='/login' activeClassName="active">Login</NavLink>*/}
                        </Fragment>
                }
            </nav>
        </header>
    }
}