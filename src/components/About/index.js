import React from "react";
import myself from "../../../src/assets/img/portrait.png";
import { MdBolt } from "react-icons/md";
import { MdOutlineWavingHand } from "react-icons/md";
import travel from "../../../src/assets/img/travelphotos.jpg";


function About() {
    return (
        <section className="about-page d-flex flex-column justify-content-center align-items-center">

        <section className="portrait">
            <img src={myself} alt="portrait" />
            <div className="about-me">
                <h1>Welcome! <MdOutlineWavingHand /> I'm Sarah</h1>
                <p>I am an Austin-based Full-Stack Web Developer. I earned my certificate from UT Austin, where I spent a long and enjoyable six months learning how to become a Full-Stack Web Developer.</p>
            </div>
        </section>
        <section className="moreInfo">
                <div className="moreInfoText">
                    <h1 className="bioHeading">My Story</h1>
                    <p className="bio">
                    I was born and raised in central Illinois before moving to Austin, TX eight years ago. I graduated from Illinois State Universty, majoring in studio arts with a focus in Video and a minoring in Business Administration.  While in college, I studied abroad in England which is where my love of world traveling started.  I have a life goal to visit all seven continents before I am 40.<br />For the past six years, I have been fulfilling several different positions within one small sign company.  My most notiable abilities in my postions have been using Adobe creative suite to create artwork for customers and maintaning our website via SpaceCraft by updating product information, writing blogs, and updating SEO keywords.
                        <br />
                        <br />
                        My background in design and website management has eased the transition into Web Development. Both require critical thinking and creativity to come up with a solution. I am looking forward to new challenges and continuing to learn skills in this fast-paced industry.
                    </p>
                </div>
                <div>
                <img src={travel} alt="travel photos" />
                </div>
        </section>
        </section>
    )
}

export default About;