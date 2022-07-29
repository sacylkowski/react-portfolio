import React from "react";

function Header() {
    return (
        <section className="d-flex flex-column justify-content-center align-items-center header-container">
            <h2 className="d-flex flex-column mt-3 mb-0 align-items-center justify-content-center">
                <a href="/" className="header-title">Sarah Cylkowski</a>
            </h2>
            <h3 className="header-subtitle">Web Developer</h3>
        </section>
    );
}

export default Header;