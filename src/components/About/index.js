import React from "react";
import myself from "../../../src/assets/img/picture-of-me.png";

function About() {
    return (
        <section>
            <h1>Sarah Cylkowski</h1>
            <img src={myself} style={{ width: "30% " }} alt="portrait" />
            <p>I was born and raised in Illinois before moving to Austin, TX in 2014. I graduated from Illinois State
            Universty in 2013 with a studio art degree with a focus in Video and a minor in Business Adminastruation. I
            have a background in sales, human resources, and marketing and have been working in those areas for 7+ years.  
            I am very excited to be on a new carrer path and to continue to learn and grow in this field.  Check out my projects and contact me for more information.</p>
        </section>
    )
}

export default About;