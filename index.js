const inquirer = require('inquirer');
const fileSystem = require('fs');
// const { title } = require('process');

inquirer.prompt([{
    type: 'input',
    message: 'What will the title be?' ,
    name: 'title' ,
}, 
{
    type: 'input',
    message: 'Write a description for your README file:' ,
    name: 'description' ,
},
{
    type: 'input',
    message: 'What are the installation instructions (eg. download x program or navigate to live URL)?' ,
    name: 'installationInstructions' ,
},
{
    type: 'input',
    message: 'What are some helpful details or description about how to use your project?' ,
    name: 'usageInformation' ,
},
{
    type: 'input',
    message: 'How can others contribute to your project (eg. send an email, leave a comment, etc.)?' ,
    name: 'contributionGuidelines' ,
},
{
    type: 'input',
    message: 'Go the extra mile and write how you tested your application for errors or bugs:' ,
    name: 'testInstructions' ,
},
{
    type: 'list',
    message: 'Which of the following badges will you use for your project?' ,
    name: 'license' ,
    choices: [
        "None",
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT License",
        "BSD 2-Clause 'Simplified' License",
        "BSD 3-Clause 'New' or 'Revised' License",
        "Boost Software License 1.0",
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public License 2.0",
        "GNU Affero General Public License v3.0",
        "GNU General Public License v2.0",
        "GNU Lesser General Public License v2.1",
        "Mozilla Public License 2.0",
        "The Unlicense",
    ]
},
{
    type: 'input',
    message: 'So that users can reach you for questions and have access to your github portfolio. What is your github username?' ,
    name: 'githubUsername' ,
},
{
    type: 'input',
    message: 'So users can also send questions via email. What is your or the dedicated email address for this project?' ,
    name: 'emailAddress' ,
},
])

// when everything is answered pass the answers into the generateReadme function
.then(answers => {
    console.log(answers)
    const readmeContent = generateReadme(answers);

    // call fs module to write the readme file
    // do a validation, return error if there is one

    fileSystem.writeFile('README.md', readmeContent, (err) =>
        err ? console.log(err) : console.log('Readme file was successfully generated! Check README.md')
    );
});



const generateReadme = ({title, description, installationInstructions, usageInformation, contributionGuidelines, testInstructions, license, githubUsername, emailAddress}) => 
`# ${title}

![License](https://img.shields.io/badge/license-${license.replace(/ /g, '%20').replace(/-/g, '--')}-lightblue.svg)

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installationInstructions}

## Usage

${usageInformation}


## License

The license used in this project is: ${license}

## How to Contribute

${contributionGuidelines}

## Tests

${testInstructions}

## Questions

Github profile: https://github.com/${githubUsername}\n
Please email any questions to: ${emailAddress}`;