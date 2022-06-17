import React from "react";
import myself from "../../../src/assets/img/picture-of-me.png";

function About() {
    return (
        <section>
            <h1>Sarah Cylkowski</h1>
            <img src={myself} style={{ width: "30% " }} alt="portrait" />
        </section>
    )
}

export default About;