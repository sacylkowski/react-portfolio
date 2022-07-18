import React from "react";
import dandd from "../../assets/img/WizardoftheCode.png";
import readme from "../../assets/img/Readme-gen.png";
import generator from "../../assets/img/PW-generator.png";
import budget from "../../assets/img/Budget-tracker.png";
import tavern from "../../assets/img/tavern-masters.png";
import vacation from "../../assets/img/vacation-vibes.png";


function Projects() {

  return (
    <div className="projects">
      <div className="row">
        <div className="column">
          <h1>D & D character generator</h1>
          <p>This app lets you create D & D characters and save them to your account when you are logged in. <br />
            <a href="https://github.com/sacylkowski/wizards-code">GitHub Repo</a> <a href="https://warm-cove-70741.herokuapp.com/">Live Site</a></p>
          <img src={dandd} style={{ width: "80% " }} alt="D&D character generator" />
        </div>
        <div className="column">
          <h1>Password generator</h1>
          <p>This app asks the user a series of questions regarding what they would like in a password.  The new password is then generated.<br />
            <a href="https://github.com/sacylkowski/password-generator">GitHub Repo</a> <a href="https://sacylkowski.github.io/password-generator/">Live Site</a></p>
          <img src={generator} style={{ width: "80% " }} alt="PW generator" />
        </div>
      </div>
      <div className="row">
        <div className="column">
          <h1>Tavern Masters</h1>
          <p>This app helps new role playing game player to create their campaigns.  The user can add encounters to their campaign and view other user's campaigns as well.<br />
            <a href="https://github.com/sacylkowski/tavern-masters">GitHub Repo</a> <a href="https://tavern-masters.herokuapp.com/">Live Site</a></p>
          <img src={tavern} style={{ width: "80% " }} alt="Tavern Masters" />
        </div>
        <div className="column">
          <h1>Budget Tracker</h1>
          <p>This is a PWA that keeps track of your expenses.  You can add and subtract funds online and offline. <br />
            <a href="https://github.com/sacylkowski/budget-tracker">GitHub Repo</a> <a href="https://pure-basin-22816.herokuapp.com/">Live Site</a></p>
          <img src={budget} style={{ width: "80% " }} alt="Budget tracker" />
        </div>
      </div>
      <div className="row">
        <div className="column">
          <h1>README generator</h1>
          <p>This commandline run program asks the user questions about their project and generates a professional README.<br />
            <a href="https://github.com/sacylkowski/README-generator">GitHub Repo</a></p>
          <img src={readme} style={{ width: "80% " }} alt="Readme generator" />
        </div>
        <div className="column">
          <h1>Vacation Vibes</h1>
          <p>This app was created to help travelers find places to eat in a new city.  It uses the Yelp API to retrieve the information.<br />
            <a href="https://github.com/sacylkowski/Vacation-vibes">GitHub Repo</a> <a href="https://peterwmcclelland.github.io/Vacation-vibes/">Live Site</a></p>
          <img src={vacation} style={{ width: "80% " }} alt="Vacation Vibes" />
        </div>
      </div>
    </div>
  )
}

export default Projects;