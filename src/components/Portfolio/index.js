import React from "react";
import Projects from "../Projects";
import dandd from "../../assets/img/WizardoftheCode.png";
import readme from "../../assets/img/Readme-gen.png";
import generator from "../../assets/img/PW-generator.png";
import budget from "../../assets/img/Budget-tracker.png";
import tavern from "../../assets/img/tavern-masters.png";
import vacation from "../../assets/img/vacation-vibes.png";

function Portfolio() {
    return(
        <div className="portfolio">
            <Projects 
            title="D & D character generator"
            img={dandd}
            description="This app lets you create D & D characters and save them to your account when you are logged in."
            skills="Skills used: bcrypt, dotenv, Express.js, express-handlebars, express-session, foundation-cli, jest, mysql2, node-fetch, and sequelize"
            />
            <Projects 
            title="Tavern Masters"
            img={tavern}
            description="This app helps new role playing game player to create their campaigns.  The user can add encounters to their campaign and view other user's campaigns as well."
            skills="Skills used: React, GraphQL, Node.js, Express.js, MongoDB, Mongoose, Apollo-Client, and JWT"
            />
            <Projects 
            title="Budget Tracker"
            img={budget}
            description="This is a PWA that keeps track of your expenses.  You can add and subtract funds online and offline."
            skills="Skills used: bcrypt, dotenv, express, express-handlebars, express-session, foundation-cli, jest, mysql2, node-fetch, and sequelize"
            />
            <Projects 
            title="Password generator"
            img={generator}
            description="This app asks the user a series of questions regarding what they would like in a password.  The new password is then generated."
            skills="Skills used: HTML, CSS, and JavaScript"
            />
            <Projects 
            title="README generator"
            img={readme}
            description="This commandline run program asks the user questions about their project and generates a professional README."
            skills="Skills used: Express.js, Inquirer, Node.js, and File System"
            />
            <Projects 
            title="Vacation Vibes"
            img={vacation}
            description="This app was created to help travelers find places to eat in a new city.  It uses the Yelp API to retrieve the information."
            skills="Skills used: HTML, CSS, JavaScript, Bulma, jQuery, and APIs"
            />
        </div>
    )
}

export default Portfolio;