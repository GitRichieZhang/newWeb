import './App.css';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

function App() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        var data = { name: name, message: message, email: email };
      
        emailjs
            .send(
                'service_txwu3km',
                'template_6so515l',
                data,
                'X6i0v4RuLeYs-rfOg'
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        setName('');
        setEmail('');
        setMessage('');
        // setPassword('');
    };
    // const sendEmail = (e) => {

    return (
        <div className='App'>

            <form ref={form} onSubmit={sendEmail}>
            <input
                    type='name'
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <input
                    type='email'
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <input
                    type='message'
                    value={message}
                    onChange={(e) => {
                        setMessage(e.target.value);
                    }}
                />
                <button type='submit'> Sumbit </button>
            </form>
        </div>
    );
}

export default App;
