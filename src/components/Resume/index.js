import React from "react";
import resume from "../../assets/img/Resume.jpg";

function Resume() {
    return(
        <section className="resume">
            <h2>
                Checkout out my Resume below: </h2>
                <img src={resume} style={{ width: "50% " }} alt="resume" />
        </section>
    )
};

export default Resume;