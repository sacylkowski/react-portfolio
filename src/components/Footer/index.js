import React from "react";
import linkedInIcon from "../../../src/assets/img/linkedin-icon.png";
import githubIcon from "../../../src/assets/img/github-icon.png";
import instagramIcon from "../../../src/assets/img/instagram-icon.png";

function Footer() {
    return (
        <div>
                <a href="https://www.linkedin.com/in/sarah-cylkowski-43197566/">
                    <img
                        src={linkedInIcon}
                        style={{ width: "5% " }}
                        alt="LinkedIn icon"
                    />
                </a>
                <a href="https://github.com/sacylkowski">
                    <img
                        src={githubIcon}
                        style={{ width: "5% " }}
                        alt="GitHub icon"
                    />
                </a>
                <a href="https://www.instagram.com/SarahAnnATX/">
                    <img
                        src={instagramIcon}
                        style={{ width: "5% " }}
                        alt="Instagram icon"
                    />
                </a>
                <div className="copyright">
             &copy; Sarah Cylkowski
             </div>
            
        </div>
    );
}

export default Footer;