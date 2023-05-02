const inquirer = require('inquirer');
const fileSystem = require('fs');

inquirer.prompt([{
    type: 'input',
    message: 'What will the title be?' ,
    name: 'title' ,
},
{
    type: 'input',
    message: 'Write a description for your README file' ,
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
        "Academic Free License v3.0",
        "Apache License 2.0",
        "Artistic License 2.0",
        "Boost Software License 1.0",
        "BSD 2-Clause 'Simplified' License",
        "BSD 3-Clause 'New' or 'Revised' License",
        "BSD 3-Clause Clear License",
        "Creative Commons",
        "Creative Commons Zero v1.0 Universal",
        "Creative Commons Attribution 4.0",
        "Creative Commons Attribution Share Alike 4.0",
        "Do What The F*ck You Want To Public License",
        "Educational Community License v2.0",
        "Eclipse Public License 1.0",
        "Eclipse Public License 2.0",
        "European Union Public License 1.1",
        "GNU Affero General Public License v3.0",
        "GNU General Public License family",
        "GNU General Public License v2.0",
        "GNU General Public License v3.0",
        "GNU Lesser General Public License family",
        "GNU Lesser General Public License v2.1",
        "GNU Lesser General Public License v3.0",
        "ISC",
        "LaTeX Project Public License v1.3c",
        "Microsoft Public License",
        "MIT",
        "Mozilla Public License 2.0",
        "Open Software License 3.0",
        "PostgreSQL License",
        "SIL Open Font License 1.1",
        "University of Illinois/NCSA Open Source License",
        "The Unlicense",
        "zLib License"
    ]
},
])
.then(data => {
    console.log(data)
});


`# README-file-generator
This repo is for the creation of a README file generator

![License](https://img.shields.io/badge/License-${license}-lightblue.svg)

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [License](#license)
- [Credits](#credits)
- [License](#license)

## Installation

${installationInstructions}

## Usage

${usageInformation}


## License

The license used in this project is: ${license}

## Badges



## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.`