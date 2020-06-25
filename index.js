const fs = require("fs");
const inquirer = require("inquirer");

inquirer
.prompt([
    {
        type: "input",
        message: "What is your gitHub username?",
        name: "username",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
    {
        type: "input",
        message: "What if your Project's Title?",
        name: "title",
    },
    {
        type: "input",
        message: "Brief Description of Your Project",
        name: "description",
    },
    {
        type: "input",
        message: "Instructions for Installation",
        name: "installation",
    },
    {
        type: "input",
        message: "What is the Usage for this project?",
        name: "usage",
    },
    {
        type: "input",
        message: "Did anyone Contribute to your project?",
        name: "contributing",
    },
    {
        type: "input",
        message: "Were any tests needed for this project?",
        name: "tests",
    },
    {
        type: "checkbox",
        message: "What license do you want to use?",
        choices: ["MIT License", "The Unlicense", "Random", "None"],
        name: "license",
    },  
])

.then(function(response) {
    console.log(response);
})

// array of questions for user
const questions = [
    
    //https://www.npm.com/package/inquirer#questions
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
// use the inquirer package
}

// function call to initialize program
init();

fs.writeFile("./generatedREADME.md", "This is a readme file", function(err) {
    if(err) {
        throw err;
    }
    console.log("Wrote the file");
});