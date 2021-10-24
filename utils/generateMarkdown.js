// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ### ${data.title}
  htttp://github.com/${data.username}/${data.title}
  ### Description
  ${data.description}
  ## Table of Cotents:
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
  ### Installation:
  What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
  ${data.install}
  ### Usage:
  Provide instructions and examples for use. Include screenshots as needed.
  ${data.usage}
  ### License:
  This project is licensed under the ${data.license} license.
  [![License badge](https://img.shields.io/badge/license-${data.license}-<COLOR>.svg)](#license)
  ### Features:
  ${data.features}
  ### Contributions:
  ${data.contribute}
  ### Tests:
  ${data.tests}
  ### Questions:
  If you have any questions about this repo, please visit [GitHub](https://github.com/${data.username}) or contact ${data.author} at ${data.email}
`;
}

module.exports = generateMarkdown;
