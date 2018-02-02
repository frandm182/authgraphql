import React, { Component } from 'react';
import AuthForm from './AuthForm';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
    }
    render() {
        return (
            <div>
                <h3>Login</h3>
                <AuthForm />
            </div>
        )
    }
}

export default LoginForm;