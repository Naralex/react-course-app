import React, {Fragment, Component} from 'react';
import AuthenticationService from '../../services/authentication-service'
import {Button} from 'reactstrap';

export class Login extends Component {
    static service = new AuthenticationService();

    handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const {email, password} = this.props.user;
            const credentials = {email, password};
            const result = await Login.service.login(credentials);
            this.props.setUsername(result.user.username);
            this.props.setToken(result.token);
            this.props.loggIn(result.success);

        } catch (e) {
            console.log(e);
        }
    };

    handleChange = ({target}) => {
        if (target.name === 'email') {
            this.props.setUserEmail(target.value);
        }else {
            this.props.setUserPassword(target.value);
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

export default Login;