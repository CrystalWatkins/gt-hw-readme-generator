// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title} 
  ${answers.license.badge}

  ## Description 
  
  ${answers.description}

  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
 
  ${answers.installation}  

  ## Usage 
 
  ${answers.usage}
  
  ## License
  
  License choice: ${answers.license.description} 
  
  ## Contributing

  ${answers.contributing}
  
  ## Tests
  ${answers.tests}

  ## Questions

  For any additional questions, please reach out to me at my 
  email account: ${answers.email}. To see the additional work
  that I have created, please visit me at http://github.com/${answers.username}.
`;
}

module.exports = generateMarkdown;
