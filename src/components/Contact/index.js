import React from "react";

function Contact() {
    return(
        <section id="contact-info" className="contact-me">
        <div className="contact">
            <p className="section-title">Fill out the form, or feel free to e-mail me at:  <a href="mailto:sacylkowski@gmail.com">Sacylkowski@gmail.com</a></p>
           </div>
           <form className="contact-form">
            <div>
                <label htmlFor="name">Name:    </label>
                <input type="text" name="name"/>
            </div> <div>
                <label htmlFor="email">E-mail:    </label>
                <input type="email" name="email"/>
            </div>
            <div>
                <label htmlFor="message">Message: </label>
                <textarea name="name"/>
            </div>
            <button type="submit">Submit</button>
           </form>
           </section>
    );
}

export default Contact;