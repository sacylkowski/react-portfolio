import React from "react";


function Nav({ currentPage, handlePageChange }) {
    return (
        <header className="nav-container d-flex flex-row align-items-center justify-content-center mb-0">
            <nav>
            <ul>
                <li>
                <a href="#about"
                onClick={() => handlePageChange("About")}
                className={currentPage === "About" ? "nav-link active" : "nav-link"}>
                    About me</a>
                </li>
                <li>
                <a href="#portfolio"
                onClick={() => handlePageChange("Portfolio")}
                className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}>
                    Portfolio</a>
                </li>
                <li>
                <a href="#contact"
                onClick={() => handlePageChange("Contact")}
                className={currentPage === "Contact" ? "nav-link active" : "nav-link"}>
                    Contact</a>
                </li>
                <li>
                <a href="#resume"
                onClick={() => handlePageChange("Resume")}
                className={currentPage === "Resume" ? "nav-link active" : "nav-link"}>
                    Resume</a>
                </li>
            </ul>
            </nav>
        </header>
    );
}

export default Nav;