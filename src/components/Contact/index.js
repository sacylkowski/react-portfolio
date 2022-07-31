import React, { useRef, useState } from 'react';
import validateEmail from "../../utils/helpers";
import { MdOutlineMail } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import emailjs from '@emailjs/browser';

function Contact() {
    // creating state variables for form fields
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7mowx4c', 'template_ps75pgk', form.current, 'xHGXUZw2o2tNSuXtL')
            .then((result) => {
                console.log(result.text);
                alert("Your message was successfully submitted!");
            }, (error) => {
                console.log(error.text);
            });

        // clear the input after
        setName("");
        setEmail("");
        setMessage("");
    };

    // const handleFormSubmit = (e) => {
    //     // Preventing the default behavior of the form submit (which is to refresh the page)
    //     e.preventDefault();

    //     // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    //     if (!validateEmail(email) || !name) {
    //         setErrorMessage('Email or name is invalid');
    //         return;
    //     } else {
    //         console.log(name, email, message);
    //         alert("Your message was successfully submitted!");
    //     }

    //     // clear the input after
    //     setName("");
    //     setEmail("");
    //     setMessage("");
    // };

    return (
        <section id="contact-info" className="contactMe">
            <form ref={form} className="contact-form">
                <h2>Get in touch:</h2>
                <div>
                    <label htmlFor="name">Name:    </label>
                    <input type="text" name="name" value={name} onChange={handleInputChange} />
                </div> <div>
                    <label htmlFor="email">E-mail:    </label>
                    <input type="email" name="email" value={email} onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="message">Message: </label>
                    <textarea name="message" rows="7" value={message} onChange={handleInputChange} />
                </div>
                <button type="submit" className="messageBtn" onClick={sendEmail}>Send message</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <div className="contacts">
                <article className="contactEmail">
                    <a href="mailto:sacylkowski@gmail.com"><MdOutlineMail size={70} /></a>
                    <p className="emailText">Send me an e-mail<br />Sacylkowski@gmail.com</p>
                </article>
                <article className="contactLinkedin">
                    <a href="https://www.linkedin.com/in/sarahcylkowski/" target="_blank" rel="noreferrer"><BiMessageDetail size={70} /></a>
                    <p className="">Send me a message on<br />LinkedIn</p>
                </article>
            </div>
        </section>
    );
}

export default Contact;