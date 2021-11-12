import React, { useState } from 'react';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';

function Contact() {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'fullName') {
            setFullName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        // Check for required inputs.
        if (!email || !fullName || !message) {
            setErrorMessage('Please enter your name, email and a message.');
            return;
            // Then we check to see if the email is valid.
        } else if (!validateEmail(email)) {
            setErrorMessage('Please enter a valid email.');
            return;
        }
        alert(`Thank you for getting in touch.  I'll get back to you shortly.`);

        // Clear out the input after a successful registration.
        setFullName('');
        setEmail('');
        setMessage('');
        setErrorMessage('');
    };

    return (
        <div className="container">
            <h1 style={{ textAlign: 'center', marginTop: 50 }}>Contact Me</h1>
            <p>Want to get in touch? Fill out this form to send me a message.</p>
            <form className="form">
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Your Full Name"
                        value={fullName}
                        name="fullName"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="name@example.com"
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        type="textarea"
                        placeholder="message"
                        className="form-control"
                        rows="3"
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleFormSubmit} >Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    );
}

export default Contact;