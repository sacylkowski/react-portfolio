import React from "react";
import resume from "../../assets/img/Resume.jpg";

function Resume() {
    return (
        <div>
            <section className="resume">
                <h2>
                    Feel free to download my <a href={resume} target="_blank" rel="noreferrer">resume</a>.
                </h2>
            </section>
            <section className="skills">
                <h2>Front-End Skills:</h2>
                <p>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Bootstrap</li>
                        <li>SEO</li>
                        <li>React</li>
                    </ul>
                </p>
                <h2>Back-End Skills:</h2>
                <p>
                    <ul>
                        <li>APIs</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                        <li>REST</li>
                        <li>GraphQL</li>
                    </ul>
                </p>
            </section>
        </div>
    )
};

export default Resume;