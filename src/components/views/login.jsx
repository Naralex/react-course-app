import React, {Fragment, Component} from 'react';
import AuthenticationService from '../../services/authentication-service'
import {Button} from 'reactstrap';
import connect from "react-redux/es/connect/connect";

class Login extends Component {
    static service = new AuthenticationService();

    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const {email, password} = this.props.user;
            const credentials = {email, password};
            const result = await Login.service.login(credentials);
            this.props.setName(result.user.username);
            this.props.setRole(result.user.roles.includes('Admin')?'Admin':'User');
            this.props.setToken(result.token);
            this.props.setLoggedIn(result.success);
        } catch (e) {
            console.log(e);
        }
    };

    handleChange = ({target}) => {
        switch (target.name) {
            case 'email': this.props.setEmail(target.value); break;
            case 'password': this.props.setPassword(target.value); break;
            default: console.log('switch error');
        }
    };

    render() {
        const {email, password} = this.props.user;
        return (
            <Fragment>
                <div className="form-wrapper">
                    <h1>Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Enter e-mail"
                                value={email}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={this.handleChange}
                            />
                        </div>
                        <Button
                            className="bg-warning text-dark rounded mr-5 ml-5"
                            type="submit">Login
                        </Button>
                    </form>
                </div>
            </Fragment>
        )
    }
};
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);