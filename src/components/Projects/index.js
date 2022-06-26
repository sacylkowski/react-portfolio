import React from "react";
import dandd from "../../assets/img/WizardoftheCode.png";
import quiz from "../../assets/img/Coding-quiz.png";
import generator from "../../assets/img/PW-generator.png";


function Projects() {

    return (
        <section>
          <div className="project1">
        <h1>D & D character generator</h1>
        <p>Description</p> 
        <img src={dandd} style={{ width: "50% " }} alt="D&D character generator" />
        </div>
        <div className="project2">
        <h1>Password generator</h1>
        <p>Description</p> 
        <img src={generator} style={{ width: "50% " }} alt="PW generator" />
        </div>
        <div className="project3">
        <h1>Coding Quiz</h1>
        <p>Description</p> 
        <img src={quiz} style={{ width: "50% " }} alt="Coding Quiz" />
        </div>
      </section>
    )
  }

  export default Projects;