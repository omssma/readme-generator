const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

// Create an array of questions for user input, this will get called by prompt method
const questions = [
  {
    type: "input",
    message: "What is your project Title?",
    name: "title",
  },
  {
    type: "input",
    message: "What is a short description?",
    name: "description",
  },
  {
    type: "input",
    message: "What is your author's name",
    name: "author",
  },
  {
    type: "input",
    message: "What are the steps required to install",
    name: "install",
  },
  {
    type: "input",
    message: "Provide instructions and examples",
    name: "usage",
  },
  {
    type: "input",
    message: "List the collaborators, such as links, profiles, tutorials, APIs",
    name: "credits",
  },
  {
    type: "list",
    message: "What kind of license do you want?",
    name: "license",
    choices: ["MIT", "APACHE", "ISC", "NONE"],
  },
  {
    type: "input",
    message: "List all the features",
    name: "features",
  },
  {
    type: "input",
    message: "How to contribute",
    name: "contribute",
  },
  {
    type: "input",
    message: "What kind of tests does the project run?",
    name: "tests",
  },
  {
    type: "input",
    message: "What is your GitHub user name",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email",
    name: "email",
  }
];

// Create a function to write README file, will place this in function init
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
      console.log(fileName)
      console.log(data)
      if (err) {
          return console.log(err)
      } else {
          console.log("SUCCESS!");
      }
    })
}

// Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(function (data) {
            console.log(data);
            const response = generateMarkdown(data);
            writeToFile("README.md", response);
        });
}

// Function call to initialize app
init();