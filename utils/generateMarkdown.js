// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ### ${data.title}
  htttp://github.com/${data.username}/${data.title}
  
  ### Description
  ${data.description}

  ### Table of Cotents:
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

  ### Credits
  List your collaborators, if any, with links to their GitHub profiles.
  If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
  If you followed tutorials, include links to those here as well.
  ${data.credits}

  ### License:
  This project is licensed under the ${data.license} license.
  [![License badge](https://img.shields.io/badge/license-${data.license}-<COLOR>.svg)](#license)
  
  ### Features:
  ${data.features}

  ### Contributing:
  If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The Contributor Covenant is an industry standard, but you can always write your own.
  ${data.contribute}

  ### Tests:
  ${data.tests}

  ### Questions:
  If you have any questions about this repo, please visit [GitHub](https://github.com/${data.username}) or contact ${data.author} at ${data.email}
`;
}

module.exports = generateMarkdown;
