import React from "react";
import resume from "../../assets/img/Resume.pdf";
import { FaRegFileAlt } from "react-icons/fa";

function Resume() {
    return (
        <div className="resumeContainer">
            <section className="resume">
                <h2>
                <a href={resume} target="_blank" rel="noreferrer" className="resumeIcon"><FaRegFileAlt size={80}/> </a><br/>
                    Feel free to download<br />my resume.
                </h2>
            </section>
            <section className="skills">
                <h2>Front-End Skills:</h2>
                <p>
                    <ul>
                        <li>HTML</li>
                        <li>CSS/Bootstrap</li>
                        <li>JavaScript</li>
                        <li>SEO</li>
                        <li>React</li>
                    </ul>
                </p>
                <h2>Back-End Skills:</h2>
                <p>
                    <ul>
                        <li>APIs</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                        <li>REST APIs</li>
                        <li>IndexedDB</li>
                        <li>Progressive Web Applications</li>
                        <li>GraphQL</li>
                    </ul>
                </p>
            </section>
        </div>
    )
};

export default Resume;