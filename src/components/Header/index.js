import React from "react";
import { useSpring, animated } from "react-spring";


function Header() {
    const props = useSpring({ to: { opacity: 1, marginTop: 0 }, from: { opacity: 0, marginTop: -500 }, delay: 400 })
    return (
        <animated.div style={props}>
                    <section className="d-flex flex-column justify-content-center align-items-center header-container">
                        <h1 className="d-flex flex-column mt-3 mb-0 align-items-center justify-content-center">
                            <a href="/" className="header-title">Sarah Cylkowski</a>
                        </h1>
                        <h3 className="header-subtitle">Web Developer</h3>
                    </section>
                    </animated.div>
    );
}

export default Header;