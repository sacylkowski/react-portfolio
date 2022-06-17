import React from "react";

function Nav() {
    return (
        <header>
            <a href="/">
            <h1>Sarah Cylkowski</h1>
            </a>
            <nav>
            <ul>
                <li>
                <a href="#about">About me</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            </nav>
        </header>
    );
}

export default Nav;