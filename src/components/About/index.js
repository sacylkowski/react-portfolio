import React from "react";
import myself from "../../../src/assets/img/portrait.png";

function About() {
    return (
        <section className="portrait">
            <img src={myself} style={{ width: "30% " }} alt="portrait" />
            <div className="about-me">
                <h2>Sarah Cylkowski</h2>
                <p>I was born and raised in Illinois before moving to Austin, TX in 2014. I graduated from Illinois State
                    Universty, majoring in studio arts with a focus in Video and a minoring in Business Administration.  I love Harry Potter and enjoy baking new creations.
                    I am looking forward to my new career path and to continue to learn and grow in this field.  Check out my projects and contact me for more information.</p>
            </div>
        </section>
    )
}

export default About;