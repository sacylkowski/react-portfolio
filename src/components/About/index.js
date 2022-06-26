import React from "react";
import myself from "../../../src/assets/img/portrait.png";

function About() {
    return (
        <section className="portrait">
            <img src={myself} style={{ width: "30% " }} alt="portrait" />
            <div className="about-me">
                <h2>Sarah Cylkowski</h2>
                <p>I was born and raised in Illinois before moving to Austin, TX in 2014. I graduated from Illinois State
                    Universty in 2013 with a studio art degree with a focus in Video and a minor in Business Adminastruation. I
                    have a background in sales, human resources, and marketing and have been working in those areas for 7+ years.
                    I am very excited to be on a new carrer path and to continue to learn and grow in this field.  Check out my projects and contact me for more information.</p>
            </div>
        </section>
    )
}

export default About;