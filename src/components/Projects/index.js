import React from "react";
import dandd from "../../assets/img/WizardoftheCode.png";

// const categories = [
//     {
//       name: "commercial",
//       description:
//         "Photos of grocery stores, food trucks, and other commercial projects",
//     },
//     { name: "portraits", description: "Portraits of people in my life" },
//     { name: "food", description: "Delicious delicacies" },
//     { name: "landscape", description: "Fields, farmhouses, waterfalls, and the beauty of nature",
//     },
//   ];

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