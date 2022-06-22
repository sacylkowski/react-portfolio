import React from "react";
import resume from "../../assets/img/sunrise.jpeg";

function Resume() {
    return(
        <section>
            <h2>
                Checkout out my Resume below:
                <img src={resume} style={{ width: "30% " }} alt="resume" />
            </h2>
        </section>
    )
};

export default Resume;