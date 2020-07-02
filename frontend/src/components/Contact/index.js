import React, { useState } from 'react';
import './Contact.css';
import { Input, Label, Form, TextArea, Loader } from 'semantic-ui-react'


function Contact(props) {
    const [username, setUsername] = useState('')
    const [email, setemail] = useState('')
    const [message, setMessage] = useState('')
    const [emailErr, setEmailErr] = useState('')
    const [nameErr, setNameErr] = useState('')
    const [emptyNameText, setEmptyNameText] = useState('')
    const [emptyNameErr, setEmptyNameErr] = useState(false)
    const [emptyEmailText, setEmptyEmailText] = useState('')
    const [emptyEmailErr, setEmptyEmailErr] = useState(false)
    const [emptyMessageErr, setemptyMessageErr] = useState(false)
    const [emptyMessageText, setemptyMessageText] = useState('')
    const [contactButton, setregisterButton] = useState('Send')

    const contact = (e) => {
        e.preventDefault();
        const data = { username, email, message }
        const err = fieldCheck()
        if (err) {
            setregisterButton('')
        }
    }

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
        if (email.indexOf('@') === -1) {
            setEmptyEmailText('This is not an email')
            setEmptyEmailErr(true)
        }
        else {
            setEmptyEmailText('')
            setEmptyEmailErr(false)
        }
        if (!message.length) {
            setemptyMessageText('Message cannot be empty')
            setemptyMessageErr(true)
        }
        else {
            setemptyMessageText('')
            setemptyMessageErr(false)
        }

        if (username.length && email.indexOf('@') !== -1 && message.length) {
            isError = true
        }
        return isError
    }

    return (
        <div className="contact">
            <div className="contact-content">
                <h1 className='heading'>
                    Contact Us
                </h1>
                <Form autoComplete="off">
                    <Form.Field error={(nameErr || emptyNameErr)}>
                        {
                            (nameErr || emptyNameErr) &&
                            <Label basic color='red' pointing='below'>{emptyNameText || nameErr}</Label>
                        }
                        <Input placeholder='Full name' className='joinInput' type='text' onChange={(event) => { setUsername(event.target.value) }} />
                    </Form.Field>
                    <Form.Field error={emailErr || emptyEmailErr}>
                        {
                            (emailErr || emptyEmailErr) &&
                            <Label basic color='red' pointing='below'>{emailErr || emptyEmailText}</Label>
                        }
                        <Input placeholder='Email' error={emailErr} className='joinInput mt-20' type='email' onChange={(event) => { setemail(event.target.value) }} />
                    </Form.Field>
                    <Form.Field error={emptyMessageErr}>
                        {
                            (emptyMessageErr) &&
                            <Label basic color='red' pointing='below'>{emptyMessageText}</Label>
                        }
                        <TextArea placeholder='Message' className='joinInput mt-20' type='text' onChange={(event) => { setMessage(event.target.value) }} />
                    </Form.Field>
                </Form>
                {contactButton.length ? (
                    <button onClick={contact} className="contact-button" type="submit">
                        {contactButton}
                    </button>
                ) : (
                        <div className='loader'>
                            <Loader active />
                        </div>
                    )}

            </div>

        </div>
    );
}

export default Contact
