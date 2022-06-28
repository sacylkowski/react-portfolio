import React, {useState} from "react";
import validateEmail from "../../utils/helpers";

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
        <section id="contact-info" className="contact-me">
            <div className="contact">
                <p className="section-title">Fill out the form, or feel free to e-mail me at:  <a href="mailto:sacylkowski@gmail.com">Sacylkowski@gmail.com</a></p>
            </div>
            <form className="contact-form">
                <div>
                    <label htmlFor="name">Name:    </label>
                    <input type="text" name="name" value={name} onChange={handleInputChange} />
                </div> <div>
                    <label htmlFor="email">E-mail:    </label>
                    <input type="email" name="email" value={email} onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="message">Message: </label>
                    <textarea name="name" value={message} onChange={handleInputChange}/>
                </div>
                <button type="submit" onClick={handleFormSubmit} onChange={handleInputChange}>Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </section>
    );
}

export default Contact;