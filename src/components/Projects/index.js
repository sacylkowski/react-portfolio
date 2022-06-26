import React from "react";
import dandd from "../../assets/img/WizardoftheCode.png";


function Projects() {

    return (
        <section>
          <div className="project1">
        <h1>D & D character generator</h1>
        <p>Description</p> 
        <img src={dandd} style={{ width: "50% " }} alt="D&D character generator" />
        </div>
      </section>
    )
  }

  export default Projects;