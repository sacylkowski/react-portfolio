import React from "react";
import linkedInIcon from "../../../src/assets/img/linkedin_icon.png";
import githubIcon from "../../../src/assets/img/github_icon.png";
import instagramIcon from "../../../src/assets/img/instagram_icon.png";

function Footer() {
    return (
            <footer className="footer d-flex flex-row">
                <div className="allIcons">
                <a href="https://www.linkedin.com/in/sarah-cylkowski-43197566/">
                    <img className="socialIcons"
                        src={linkedInIcon}
                        // style={{ width: "12% " }}
                        alt="LinkedIn icon"
                    />
                </a>
                <a href="https://github.com/sacylkowski">
                    <img className="socialIcons"
                        src={githubIcon}
                        // style={{ width: "12% " }}
                        alt="GitHub icon"
                    />
                </a>
                <a href="https://www.instagram.com/SarahAnnATX/">
                    <img className="socialIcons"
                        src={instagramIcon}
                        // style={{ width: "12% " }}
                        alt="Instagram icon"
                    />
                </a>
                </div>
                <div className="copyright">
                    &copy; Sarah Cylkowski
                </div>
            </footer>
    );
}

export default Footer;