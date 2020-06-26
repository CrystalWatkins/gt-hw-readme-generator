const fs = require("fs");
const inquirer = require("inquirer");

const generatedReadMe = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
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
        type: "list",
        message: "What license do you want to use?",
        name: "license",
        choices: [
            {
                name: "MIT License",
                value: {
                    badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
                    description: "Copyright <2020> <COPYRIGHT HOLDER> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.",
                },
                },
            {
                name: "Unlicensed License",
                value: {
                    badge: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
                    description: "You chose not to have a license, so this is an absent license file.",
            },
            },
            {
                name: "IBM License",
                value: { 
                   badge: "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
                   description: "This site contains IBM's License Information (LI) documents, which provide information and any additional terms specific to a Program which applies to certain software announced or released after May, 1999. The Programs listed in the LI are licensed under those LI terms and conditions in addition to the Program license terms previously agreed to by Client and IBM. If Client does not have previously agreed to license terms in effect for the Program, either the International Program License Agreement or the International License Agreement for Non-Warranted Programs as identified in the LI applies. These documents are for your reference and viewing convenience. They are normally provided with IBM software in hardcopy form, on a CD, or are embedded in the software in softcopy form for acceptance prior to installation or first use of the software.",
               },
                },
        ]
    },  
]

inquirer.prompt(questions).then(answers => {
    console.log(answers)
   fs.writeFile("generatedReadMe.md", generatedReadMe(answers), function(err) {

       if (err) {
           throw err;
       }
       console.log("Wrote the file");
   })
})

