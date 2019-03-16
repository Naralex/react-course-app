import React, {Fragment, Component} from 'react';
import {Route, Redirect} from 'react-router-dom'
import AuthenticationService from '../../services/authentication-service'
import {Button} from 'reactstrap';
import connect from "react-redux/es/connect/connect";
import Login from './login'

class Register extends Component {
    static service = new AuthenticationService();

    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const {email, username, password} = this.props.user;
            const credentials = {email, password, username};
            const result = await Register.service.register(credentials);
            if (result.success) {
                const {email, password} = this.props.user;
                const credentials = {email, password};
                const result = await Login.service.login(credentials);
                if (result.success) {
                    this.props.setRole(result.user.roles.includes('Admin') ? 'Admin' : '');
                    this.props.setToken(result.token);
                    this.props.setLoggedIn(result.success);
                }
            }

        } catch (e) {
            console.log(e);
        }
    };

    handleChange = ({target}) => {
        switch (target.name) {
            case 'email':
                this.props.setEmail(target.value);
                break;
            case 'username':
                this.props.setName(target.value);
                break;
            case 'password':
                this.props.setPassword(target.value);
                break;
            default:
                console.log('switch error');
        }
    };

    render() {
        const {email, username, password} = this.props.user;
        return (
            <Fragment>
                <Route exact path="/register" render={() => (
                    this.props.user.isLoggedIn
                        ? (
                            <Redirect to="/"/>
                        )
                        : (<div className="form-wrapper">
                                <h1>Register</h1>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="email">E-mail</label>
                                        <br/>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Enter e-mail"
                                            value={email}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <br/>
                                        <input
                                            type="text"
                                            name="username"
                                            id="username"
                                            placeholder="Enter username"
                                            value={username}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <br/>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="Enter password"
                                            value={password}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="confirmPassword">Confirm Password</label>
                                        <br/>
                                        <input type="password"
                                               name="confirmPassword"
                                               id="confirmPassword"
                                               placeholder="Enter your password again"
                                        />
                                    </div>
                                    <Button type="submit" className="bg-warning text-dark rounded mr-5 ml-5">
                                        Resiter
                                    </Button>
                                </form>
                            </div>
                        )
                )}/>

            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch({
                type: "SETNAME",
                payload: name
            })
        },
        setPassword: (password) => {
            dispatch({
                type: "SETPASSWORD",
                payload: password
            })
        },
        setEmail: (email) => {
            dispatch({
                type: "SETEMAIL",
                payload: email
            })
        },
        setToken: (token) => {
            dispatch({
                type: "SETTOKEN",
                payload: token
            })
        },
        setRole: (role) => {
            dispatch({
                type: "SETROLE",
                payload: role
            })
        },
        setLoggedIn: (toggle) => {
            dispatch({
                type: "SETLOGGEDIN",
                payload: toggle
            })
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);

// export default Register;