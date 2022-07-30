import React, { useState } from "react";
import validateEmail from "../../utils/helpers";
import { MdOutlineMail } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";

function Contact() {

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

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        if (!validateEmail(email) || !name) {
            setErrorMessage('Email or name is invalid');
            return;
        }

        // clear the input after
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <section id="contact-info" className="contactMe">
            {/* <div className="contact">
                <p className="section-title">Get In Touch!< br />
                    Fill out the form, or feel free to e-mail me at:  <a href="mailto:sacylkowski@gmail.com" className="myEmail">Sacylkowski@gmail.com</a></p>
            </div> */}
            <form action="" className="contact-form">
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
                <button type="submit" className="messageBtn" onClick={handleFormSubmit} onChange={handleInputChange}>Send message</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <div className="contacts">
                <article className="contactEmail">
                    <MdOutlineMail />
                    <p className="">E-mail</p>
                    <p className="">Sacylkowski@gmail.com</p>
                    <a href="mailto:sacylkowski@gmail.com">Send me an E-mail</a>
                </article>
                <article className="contactLinkedin">
                    <BiMessageDetail />
                    <p className="">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/sarahcylkowski/" target="_blank" rel="noreferrer" className="">Message me on LinkedIn</a>
                </article>
            </div>
        </section>
    );
}

export default Contact;