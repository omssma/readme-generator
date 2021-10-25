const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

//  Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your project Title?",
    name: "title",
  },
  {
    type: "input",
    message: "What is a short description of your project?",
    name: "description",
  },
  {
    type: "input",
    message: "What is the author's name?",
    name: "author",
  },
  {
    type: "input",
    message: "What are the steps required to install?",
    name: "install",
  },
  {
    type: "input",
    message: "Provide instructions and examples.",
    name: "usage",
  },
  {
    type: "input",
    message: "List the collaborators, such as links, profiles, tutorials, APIs.",
    name: "credits",
  },
  {
    type: "list",
    message: "What kind of license do you want?",
    name: "license",
    choices: ["MIT", "APACHE", "ISC", "GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Boost Software License 1.0", "NONE"],
  },
  {
    type: "input",
    message: "List all the features.",
    name: "features",
  },
  {
    type: "input",
    message: "How to contribute.",
    name: "contribute",
  },
  {
    type: "input",
    message: "What kind of tests does the project run?",
    name: "tests",
  },
  {
    type: "input",
    message: "What is your GitHub user name?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  }
];

// Create a function to write README file
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

// Create a function to initialize app in README file
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