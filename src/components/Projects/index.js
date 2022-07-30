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
        <button className="githubLink">Github Repo</button>
        <button className="liveSite">Live Site</button>
        </div>
      {/* 
        
        <div className="column">
          <h1>Budget Tracker</h1>
          <p>This is a PWA that keeps track of your expenses.  You can add and subtract funds online and offline. <br />
            <a href="https://github.com/sacylkowski/budget-tracker">GitHub Repo</a> <a href="https://pure-basin-22816.herokuapp.com/">Live Site</a></p>
          <img src={budget} style={{ width: "80% " }} alt="Budget tracker" />
          <p> This uses: bcrypt, dotenv, express, express-handlebars, express-session, foundation-cli, jest, mysql2, node-fetch, and sequelize</p>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <h1>README generator</h1>
          <p>This commandline run program asks the user questions about their project and generates a professional README.<br />
            <a href="https://github.com/sacylkowski/README-generator">GitHub Repo</a></p>
          <img src={readme} style={{ width: "80% " }} alt="Readme generator" />
          <p> This uses: Express.js, Inquirer, Node.js, and File System</p>
        </div>
        <div className="column">
          <h1>Vacation Vibes</h1>
          <p>This app was created to help travelers find places to eat in a new city.  It uses the Yelp API to retrieve the information.<br />
            <a href="https://github.com/sacylkowski/Vacation-vibes">GitHub Repo</a> <a href="https://peterwmcclelland.github.io/Vacation-vibes/">Live Site</a></p>
          <img src={vacation} style={{ width: "80% " }} alt="Vacation Vibes" />
          <p> This uses: HTML, CSS, JavaScript, Bulma, jQuery, and APIs</p>
        </div>
      </div> */}
    </div>
  )
}

export default Projects;