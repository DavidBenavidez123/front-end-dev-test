import React, { useState } from 'react';
import './Login.css';
import { Link, } from 'react-router-dom'
import { Input, Form, Label, Loader } from 'semantic-ui-react'

function Login(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState('')
    const [emptyNameText, setEmptyNameText] = useState('')
    const [emptyNameErr, setEmptyNameErr] = useState(false)
    const [emptyPasswordErr, setemptyPasswordErr] = useState(false)
    const [emptyPasswordText, setemptyPasswordText] = useState('')
    const [loginError, setLoginError] = useState(false)
    const [loginButton, setloginButton] = useState('Login')


    const login = () => {
        const err = fieldCheck()
        if (err) {
            setloginButton('')
        }
    }

    console.log(loginError)
    const fieldCheck = () => {
        let isError = false
        if (!username.length) {
            setEmptyNameText('Username cannot be empty')
            setEmptyNameErr(true)
        }
        else {
            setEmptyNameText('')
            setEmptyNameErr(false)
        }
        if (!password.length) {
            setemptyPasswordText('Password cannot be empty')
            setemptyPasswordErr(true)
        }
        else {
            setemptyPasswordText('')
            setemptyPasswordErr(false)
        }

        if (username.length && password.length) {
            isError = true
        }
        return isError
    }

    return (
        <div className="login">
            <div className="login-content">
                <h1 className='heading'>
                    Login
                </h1>
                <Form>
                    <Form.Field error={(emptyNameErr || loginError)}>
                        {
                            (emptyNameErr) &&
                            <Label basic color='red' pointing='below'>{emptyNameText}</Label>
                        }
                        <Input placeholder='Full name' className='joinInput' onChange={(event) => { setUsername(event.target.value) }} />
                    </Form.Field>
                    <Form.Field error={emptyPasswordErr || loginError}>
                        {
                            (emptyPasswordErr) &&
                            <Label basic color='red' pointing='below'>{emptyPasswordText}</Label>
                        }
                        <Input placeholder='Password' className='joinInput mt-20' type='password' onChange={(event) => { setPassword(event.target.value) }} />
                    </Form.Field>
                    {
                        (loginError) &&
                        <Label basic color='red' pointing>Username/Password is incorrect</Label>
                    }
                </Form>

                {loginButton.length ? (
                    <button onClick={login} className="login-button" type="submit">
                        {loginButton}
                    </button>
                ) : (
                        <div className='loader'>
                            <Loader active />
                        </div>
                    )}

                <div class="login-text">
                    <p>Don't have an account?</p>
                    <Link to="/Register">
                        <p>Signup</p>
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default Login;
