import React, {Fragment, Component} from 'react';

class Login extends Component {
    render(){
        return (
            <Fragment>
                <div className="form-wrapper">
                    <h1>Login</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input type="text" name="email" id="email" placeholder="Enter e-mail" value="" />
                        </div>
                        <div className="form-group"><label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" placeholder="Enter password"  value="" />
                        </div>
                        <button type="submit"> Login</button>
                    </form>
                </div>
            </Fragment>
        )
    }
}

export default Login;