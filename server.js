// Import Dependencies
const express = require ("express");
const cors = require("cors");

// Import JSON files
const projects = require("./projects.json");
const about =require("./about.json");
const contact =require("./contact.json")

// Create our app object
const app = express();

// set up middleware
app.use(cors());

//home route for testing our app
app.get("/", (req,res) =>{
    res.send("Hello World!");
});

// route for retrieving projects
app.get("/projects", (req, res) =>{
    // send projectes via JSON
    res.json(projects);
});
app.get("/home", (req, res) =>{
    // send projectes via JSON
    res.json(homes);
});

// route for retrieving about info
app.get("/about", (req,res) =>{
    // send about via Json
    res.json(about);
});
app.get("/contact", (req,res) =>{
    // send about via Json
    res.json(contact);
});
app.get("/resume", (req,res) =>{
    // send about via Json
    res.json(resume);
});

//declare a variable for our port number
const PORT = process.env.PORT || 4000;

// turn on the server listener
app.listen(PORT, () => console.log(`listening on port ${PORT}`));

