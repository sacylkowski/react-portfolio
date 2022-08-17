import React from "react";
import myself from "../../../src/assets/img/portrait.png";
import { MdBolt } from "react-icons/md";
import { MdOutlineWavingHand } from "react-icons/md";
import { MdOutlineBakeryDining } from "react-icons/md";
import { GiCommercialAirplane } from "react-icons/gi";
import { MdPedalBike } from "react-icons/md";
import travel from "../../../src/assets/img/travelphotos.jpg";
import { useSpring, animated } from "react-spring";


function About() {
    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 800 })
    return (
        <animated.div style={props}>
        <section className="about-page d-flex flex-column justify-content-center align-items-center">
            <section className="portrait">
                <img src={myself} alt="portrait" />
                <div className="about-me">
                    <h1>Welcome! <MdOutlineWavingHand /> I'm Sarah.</h1>
                    <p>I am an Austin-based Full-Stack Web Developer. I earned my certificate from UT Austin, where I spent a long and enjoyable six months learning how to become a Full-Stack Web Developer.</p>
                </div>
            </section>

            <section className="moreInfo">
                <div className="moreInfoText">
                    <h1 className="bioHeading">My Story</h1>
                    <p className="bio">
                        I was born and raised in central Illinois before moving to Austin, TX eight years ago. I graduated from Illinois State University, majoring in studio arts with a focus in Video and a minoring in Business Administration.  While in college, I studied abroad in England which is where my love of world traveling started.  I have a life goal to visit all seven continents before I am 40.<br />For the past six years, I have been fulfilling several different positions within one small sign company.  My most notable abilities in my positions have been using Adobe creative suite to create artwork for customers and maintaining our website via SpaceCraft by updating product information, writing blogs, and updating SEO keywords.
                        <br />
                        <br />
                        My background in design and website management has eased the transition into Web Development. Both require critical thinking and creativity to come up with a solution. I am looking forward to new challenges and continuing to learn skills in this fast-paced industry.
                    </p>
                </div>
                <div>
                    <img src={travel} alt="travel photos" />
                </div>
            </section>

            <section className="interests d-flex align-items-center justify-content-center">
                <h2 className="interestsTitle">Interests & Hobbies</h2>
                <div className="allInterests">
                    <div className="d-flex flex-column align-items-center justify-content-center hobby-group">
                        <MdOutlineBakeryDining size={80}/>
                        <p className="interest-title">Baking</p>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center hobby-group">
                        <MdBolt size={80}/>
                        <p className="interest-title">Harry Potter</p>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center hobby-group">
                        <GiCommercialAirplane size={80}/>
                        <p className="interest-title">Traveling</p>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center hobby-group">
                        <MdPedalBike size={80}/>
                        <p className="interest-title">Biking</p>
                    </div>
                </div>
            </section>
        </section >
        </animated.div>
    )
}

export default About;