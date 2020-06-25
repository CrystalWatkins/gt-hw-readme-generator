// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 
  
  ${data.description}

  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
 
  ${data.installation}  

  ## Usage 
 
  ${data.usage}
  
  ## License
  
  License choice: ${data.license} 
  
  ## Contributing

  ${data.contributing}
  
  ## Tests
  ${data.tests}

  ## Questions

  For any additional questions, please reach out to me at my 
  email account: ${data.email}. To see the additional work
  that I have created, please visit me at ${data.username}.
`;
}

module.exports = generateMarkdown;
