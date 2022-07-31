import React from "react";


function Projects(props) {

  return (
      <div className="card">
        <div className="cardBody">
          <h1 className="cardTitle">{props.title}</h1>
          <img src={props.img} style={{ width: "100% " }} alt="portfolio images"/>
          <p className="description">{props.description}</p>
          <p className="skillsUsed">{props.skills}</p>
        </div>
        <div className="btns">
        <a href={props.github} target="_blank" rel="noreferrer"><button className="githubLink">Github Repo</button></a>
        <a href={props.liveSite} target="_blank" rel="noreferrer"><button className="liveSite">Live Site</button></a>
        </div>
    </div>
  )
}

export default Projects;