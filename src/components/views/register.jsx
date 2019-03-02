import React, {Fragment, Component} from 'react';

class Register extends Component {
    render() {
        return (
            <Fragment>
                <div className="form-wrapper">
                    <h1>Register</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input type="text" name="email" id="email" placeholder="Enter e-mail" value=""/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" id="username" placeholder="Enter username" value=""/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" placeholder="Enter password" value=""/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" name="confirmPassword" id="confirmPassword"
                                   placeholder="Enter your password again" value=""/>
                        </div>
                        <button type="submit">Resiter</button>
                    </form>
                </div>
            </Fragment>
        )
    }
}

export default Register;